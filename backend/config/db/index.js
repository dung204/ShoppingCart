require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
  try {
    console.log('Connecting to database ...');
    await mongoose
      .createConnection(process.env.DB_URI, {
        dbName: 'mantrilogix_dev_db',
      })
      .asPromise();
    console.log('Sucessfully connected to database!');
  } catch (ex) {
    console.log('Cannot connect to the database!');
    console.error(ex.message);
  }
}

module.exports = { connect };
