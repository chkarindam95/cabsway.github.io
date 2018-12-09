
const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.PORT || 8080,
  db: 'mongodb://localhost:27017/taxi_website_development',
};

