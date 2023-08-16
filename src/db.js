require('dotenv').config();
const mongoose = require('mongoose');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

//mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`, {
// useNewUrlParser: true,
//useUnifiedTopology: true,
//});
mongoose.connect(DB_DEPLOY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error cant connect MongoDB:'));
db.once('open', () => {
  console.log('success MongoDB con');
});

module.exports = db; 
