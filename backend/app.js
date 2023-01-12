const express = require('express');
require('@babel/register');
require('dotenv').config();

const app = express();
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const dbCheck = require('./db/dbCheck');

// импорт роутов
const eventsRouter = require('./routes/events');
const groupsRouter = require('./routes/groups');
const groupRouter = require('./routes/group');
const votesRouter = require('./routes/votes');
const userinfoRoutes = require('./routes/userinfoRoutes');

// вызов функции проверки соединения с базой данных
dbCheck();

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


app.use('/', eventsRouter);
app.use('/', votesRouter);
app.use('/', groupsRouter);
app.use('/', groupRouter);
app.use('/', userinfoRoutes);


const PORT = process.env.PORT || 3100;


app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);

  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
