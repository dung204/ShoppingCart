require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const router = require('./routes');

console.clear();

db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router(app);

app.listen(process.env.PORT, () => {
  console.log(`The server is listening at port ${process.env.PORT}`);
});
