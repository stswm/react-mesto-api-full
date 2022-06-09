require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const { userRouter } = require('./routes/users');
const { cardRouter } = require('./routes/cards');
const { mainRouter } = require('./routes/main');
const { errorHeandler } = require('./controllers/main');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const {
  login,
  createUser,
} = require('./controllers/users');
const {
  validateNewUser,
  validateLogin,
} = require('./middlewares/validator');
const auth = require('./middlewares/auth');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

// const corsOptions = {
//   origin: '*',
//   credentials: true,
//   optionSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

const allowedCors = [
  'https://praktikum.tk',
  'http://praktikum.tk',
  'localhost:3000',
  'http://http://stswm.nomoredomains.xyz',
  'https://http://stswm.nomoredomains.xyz',
  'http://api.stswm.nomoreparties.sbs',
  'https://api.stswm.nomoreparties.sbs',
];


app.use(express.json());
app.use(requestLogger);
const cors = (req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  next();
};
app.use(cors());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', validateNewUser, createUser);
app.post('/signin', validateLogin, login);

app.use(auth);
app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use('*', mainRouter);
app.use(errorLogger);

app.use(errors());
app.use(errorHeandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
