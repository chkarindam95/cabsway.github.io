import config, {nodeEnv} from './config';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.listen(config.port, () => {
  console.info(`ENV ${nodeEnv}`);
  console.info('Express listening on PORT', config.port);
});