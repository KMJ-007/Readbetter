require('dotenv'). config();

const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: process.env.krishna_TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET: process.env.krishna_TWITTER_CONSUMER_SECRET,
    TWITTER_ACCESS_TOKEN: process.env.krishna_TWITTER_ACCESS_TOKEN,
    TWITTER_TOKEN_SECRET: process.env.krishna_TWITTER_TOKEN_SECRET,
    callbackURL: process.env.krishna_twitterCallback
  };
  
  const DB_USER = "admin";
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const MONGODB = {
    MONGODB_URI: `mongodb+srv://kmj-007:${process.env.DB_PASSWORD}@gladiator-kris.t7sjb.mongodb.net/scraper?retryWrites=true&w=majority`
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
  