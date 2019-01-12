import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config, {nodeEnv} from './config/env/development';

const server = express();
const db = connect();

db.once('open', () => {
  listen();
});

const users = require('./routes/users');
const bookings = require('./routes/bookings');
const location = require('./routes/location');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.set('view engine', 'ejs');
server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.render('index');
});

server.use('/users', users);
server.use('/bookings', bookings);
server.use('/location', location);

// Connection

function listen() {
  if (server.get('env') === 'test') return;

  server.listen(config.port, () => {
    console.info(`ENV ${nodeEnv}`);
    console.info('Express listening on PORT', config.port);
  });
}

// Connection with the database
function connect() {
  const options = { 
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