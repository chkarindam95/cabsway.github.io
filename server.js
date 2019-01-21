import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import config, {nodeEnv} from './config/env/development';
const MongoDBStore = require('connect-mongodb-session')(session);

const server = express();
const db = connect();

db.once('open', () => {
  listen();
});

const store = new MongoDBStore(
  {
    uri: config.db,
    collection: 'sessions'
  },
  function(error) {
    console.error(error);
  });

const prices = require('./routes/prices');
const users = require('./routes/users');
const bookings = require('./routes/bookings');
const location = require('./routes/location');
const auth = require('./routes/auth');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(
  session(
    {
      secret: 'my secret',
      resave: false, // not be saved on any response, only if sth change,
      saveUninitialized: false,
      store: store
    }
  )
);


server.set('view engine', 'ejs');
server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.render('index');
});

// Routinstaes

server.use('/prices', prices);
server.use('/users', users);
server.use('/bookings', bookings);
server.use('/location', location);
server.use('/auth', auth);

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