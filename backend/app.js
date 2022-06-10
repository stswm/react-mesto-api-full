require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('./middlewares/cors');
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
const { PORT = 3001 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(express.json());
app.use(requestLogger);

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
