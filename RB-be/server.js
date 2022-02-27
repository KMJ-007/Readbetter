const cookieSession = require("cookie-session");
const express = require("express");
const app = express();
const port = 1234;
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
const session = require("express-session");
const authRoutes = require("./routes/auth-router");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header
const path = require("path");
require('dotenv'). config();
const Twit = require('twit');
const bookData = require('./database-exchange/database');
var T = new Twit({
  consumer_key:         process.env.krishna_TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.krishna_TWITTER_CONSUMER_SECRET,
  access_token:         process.env.krishna_TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.krishna_TWITTER_TOKEN_SECRET,
})
// connect to mongodb
mongoose.connect(keys.MONGODB_URI, () => {
  console.log("connected to mongo db");
});

app.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
  );
  
  // console.log(bookData);
// parse cookies
app.use(cookieParser());

// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());
require(path.join(__dirname, './config/passport-setup'))(passport); //Load passport config
// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "*", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
  "optionsSuccessStatus": 204,
    allowedHeaders: ["Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
    // credentials: true // allow session cookie from browser to pass through
  })
);



// set up routes
app.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});

app.get("/user/:userId", (req,res)=>{
  let userId=req.params.userId;
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');


  T.get('friends/ids', { screen_name:userId },  function (err, data, response) {
    console.log("::::::::::::::::::::::::::::::::::::::::::")
    console.log(response);
    res.json(data);
    if(err){
      res.send(err);
    }
  })
});

// app.get("/mongodata",(req,res)=>{
//   res.json(bookData)
// })

// connect react to nodejs express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));

