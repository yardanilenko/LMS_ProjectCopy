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

// импорт роутов
const eventsRouter = require('./routes/events');
const groupsRouter = require('./routes/groups');
const groupRouter = require('./routes/group');
const votesRouter = require('./routes/votes');
const userinfoRoutes = require('./routes/userinfoRoutes');

const arrayPairs = require('./routes/arrayPairs');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const avatarupload = require('./routes/avatarupload');
const createEventsRoutes = require('./routes/createEvents');


// вызов функции проверки соединения с базой данных
dbCheck();
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.use('/', arrayPairs);
app.use('/', loginRoutes);
app.use('/', logoutRoutes);
app.use('/', avatarupload);
app.use('/', createEventsRoutes);


const PORT = process.env.PORT || 3100;


app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);

  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
