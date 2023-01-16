const express = require('express');
require('@babel/register');
require('dotenv').config();

const app = express();
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const dbCheck = require('./db/dbCheck');
const cors = require("cors");
const http = require('http');
const {Server} = require('socket.io');
const {UserChat, History} = require('./db/models');


// импорт роутов
const eventsRouter = require('./routes/events');
const groupsRouter = require('./routes/groups');
const groupRouter = require('./routes/group');
const votesRouter = require('./routes/votes');
const userinfoRoutes = require('./routes/userinfoRoutes');
const groupChatsRouter = require('./routes/groupChats');
const chatsRouter = require('./routes/chats');
const searchRouter = require('./routes/search');

const arrayPairs = require('./routes/arrayPairs');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const avatarupload = require('./routes/avatarupload');
const createEventsRoutes = require('./routes/createEvents');
const fileupload = require('./routes/fileupload');

// вызов функции проверки соединения с базой данных
dbCheck();
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on("join_contact", async ({chatID}) => {
    const chat = await UserChat.findOne({where: {id: chatID}});
    console.log(chat.dataValues.room_id);
    socket.join(chat.dataValues.room_id);
  });
  socket.on("join_room", (roomName) => {
    console.log(`User with ID ${socket.id} joined room ${roomName}`)
    socket.join(roomName)
  });
  socket.on("send_message", async (data) => {
    const chat = await UserChat.findOne({where: {id: data.chatID}});
    await History.create({room_id: chat.dataValues.room_id, message: data.message, user_id: chat.dataValues.user_id});
    socket.to(chat.dataValues.room_id).emit("receive_message", data)
  });
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  })
});


const sessionConfig = {
  name: 'myLmsCookie',
  store: new FileStore(),
  secret: process.env.SECRET ?? 'mySecretPass',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));
app.use(cors());


app.use('/', eventsRouter);
app.use('/', votesRouter);
app.use('/', groupsRouter);
app.use('/', groupRouter);
app.use('/', userinfoRoutes);
app.use('/', groupChatsRouter);
app.use('/', chatsRouter);
app.use('/', searchRouter);

app.use('/', arrayPairs);
app.use('/', loginRoutes);
app.use('/', logoutRoutes);
app.use('/', avatarupload);
app.use('/', createEventsRoutes);
app.use('/', fileupload);


const PORT = process.env.PORT || 3100;

server.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
