import express from 'express';
import mongoose from 'mongoose';

import config, {nodeEnv} from './config/env/development';

const server = express();
const db = connect();

db.once('open', () => {
  listen();
});

var users = require('./routes/users');

server.set('view engine', 'ejs');
server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.render('index');
});

server.use('/users', users);

function listen() {
  if (server.get('env') === 'test') return;

  server.listen(config.port, () => {
    console.info(`ENV ${nodeEnv}`);
    console.info('Express listening on PORT', config.port);
  });
}

// Connection with the database
function connect() {
  let options = { 
    useNewUrlParser: true 
  };

  mongoose.connect(
    config.db, 
    options, 
    function(err) {
      if (err) throw err;
    }
  );
  
  return mongoose.connection;
}