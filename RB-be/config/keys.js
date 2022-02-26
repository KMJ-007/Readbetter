require('dotenv'). config();

const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
    TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
    TWITTER_TOKEN_SECRET: process.env.TWITTER_TOKEN_SECRET
  };
  
  const DB_USER = "admin";
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const MONGODB = {
    MONGODB_URI: `mongodb+srv://admin:${DB_PASSWORD}@cluster0.q1chg.mongodb.net/readbetter?retryWrites=true&w=majority`
  };
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;
  