/**
 * Created by Chunxu on 2017/2/25.
 */

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  const config = require('./config.json');
  const envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
