require('dotenv').config();
const mongoose = require('mongoose');
const { DB_HOST, DB_PORT, DB_DATABASE, DB_DEPLOY } = process.env;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
// mongoose.connect(DB_DEPLOY, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error cant connect MongoDB:'));
db.once('open', () => {
	console.log('success MongoDB con');
});

// import models
const Sound = require('./models/sounds');
const User = require('./models/users');

module.exports = { db, Sound, User };
