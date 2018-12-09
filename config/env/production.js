const env = process.env;

export const nodeEnv = env.NODE_ENV || 'production';

export default {
  port: env.PORT || 8080,
  db: 'mongodb://localhost/taxi_website_production',
};

