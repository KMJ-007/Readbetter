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
const bookRecomandation = require('./bookRecomandation')
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
// app.use(
//   cors({
//     origin: "http://localhost:3000", // allow to server to accept request from different origin
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true // allow session cookie from browser to pass through
//   })
// );



// set up routes
// app.use("/auth", authRoutes);

// const authCheck = (req, res, next) => {
//   if (!req.user) {
//     res.status(401).json({
//       authenticated: false,
//       message: "user has not been authenticated"
//     });
//   } else {
//     next();
//   }
// };

// // if it's already login, send the profile response,
// // otherwise, send a 401 response that the user is not authenticated
// // authCheck before navigating to home page
// app.get("/", authCheck, (req, res) => {
//   res.status(200).json({
//     authenticated: true,
//     message: "user successfully authenticated",
//     user: req.user,
//     cookies: req.cookies
//   });
// });

app.use(express.static('public'));
app
  .route("/")
  .get( (req, res) => {
    res.sendFile(process.cwd()+"/homepage.html")
  });

app.set("view engine", "ejs");

app.get("/user?",(req,res)=>{
  let userId=req.query.userHandle;

  recomandation = [
  
    {
      bookName:"Principles (for Success)",
      bookAuthors:[ "Ray Dalio"],
      recomandedBy:[
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
        twitterhandle:"billgates",
        name:"Bill Gates"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/2233350183/hastings_reed_abosch_400x400.jpg",
        twitterhandle:"reedhastings",
        name:"Reed Hastings"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/49918572/half-face-ice_400x400.jpg",
        twitterhandle:"tferriss",
        name:"Tim Ferriss"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1440461885703217155/Js8kvT7a_400x400.jpg",
        twitterhandle:"TonyRobbins",
        name:"Tony Robbins"
      }
    ],
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41mD+n0RquL._SX258_BO1,204,203,200_.jpg"
    },
    {
      bookName:"Stillness Is the Key",
      bookAuthors:[  "Ryan Holiday"],
      recomandedBy:[
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1403013239487680512/FEfDeOTX_400x400.jpg",
        twitterhandle:"ProfCalNewport",
        name:"Cal Newport"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1315809894411403265/GFTl08tw_400x400.jpg",
        twitterhandle:"ariannahuff",
        name:"Arianna Huffington"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1204727725836996608/ByShSrLR_400x400.jpg",
        twitterhandle:"IAmMarkManson",
        name:"Mark Manson"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1408049737157259271/7MmiUGAI_400x400.jpg",
        twitterhandle:"angeladuckw",
        name:"Angela Duckworth"
      }
    ],
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71xpXdXuZRL.jpg"
    },
    
    {
      bookName:"Super Human: The Bulletproof Plan to Age Backward and Maybe Even Live Forever",
      bookAuthors:[  "Dave Asprey"],
      recomandedBy:[
        {
        imageUrl:"https://pbs.twimg.com/profile_images/959130829589946368/XY2QpdJx_400x400.jpg",
        twitterhandle:"GerardButler",
        name:"Grerard Butler"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1448695845088546820/wS-4VjjJ_400x400.jpg",
        twitterhandle:"ZivaMeditation",
        name:"Emily Fletcher"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1129414062/Mercola-Dr-Joe-Mercola_400x400.jpg",
        twitterhandle:"mercolainfo",
        name:"Joseph Mercola"
      }
    ],
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71APv4qxx8L.jpg"
    },
    {
      bookName:"Elevate: Push Beyond Your Limits and Unlock Success in Yourself and Others",
      bookAuthors:[  "Robert Glazer"],
      recomandedBy:[
        {
        imageUrl:"https://pbs.twimg.com/profile_images/935270007331749888/xZNXud5R_400x400.jpg",
        twitterhandle:"ThisIsSethsBlog",
        name:"Seth Godin"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1427272847643316232/9CeNBJAr_400x400.jpg",
        twitterhandle:"AdamMGrant",
        name:"Adam Grant"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1481362504810967041/RSAOLbKu_400x400.jpg",
        twitterhandle:"DanielPink",
        name:"Daniel Pink"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/751486747893047296/14CIA8Xk_400x400.jpg",
        twitterhandle:"coachgoldsmith",
        name:"Marshall Goldsmith"
      }
    ],
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/412Pb6okLWL._SX328_BO1,204,203,200_.jpg"
    },  
    {
      bookName:"Face to Face: The Art of Connection",
      bookAuthors:[ "Brian Grazer"],
      recomandedBy:[
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1459294703/110711_r21057_p233_400x400.jpg",
        twitterhandle:"sherylsandberg",
        name:"Sheryl Sandberg"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/836744595316879363/CWd5Db_i_400x400.jpg",
        twitterhandle:"Gladwell",
        name:"Malcolm Gladwell"
      }
    ],
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71gI2iNULcL.jpg"
    },
    {
      bookName:"Everything Is Figureoutable",
      bookAuthors:[ "Marie Forleo"],
      recomandedBy:[
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1123359369570148353/Mh-Rf4Sk_400x400.jpg",
        twitterhandle:"Oprah",
        name:"Oprah Winfrey"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/935270007331749888/xZNXud5R_400x400.jpg",
        twitterhandle:"ThisIsSethsBlog",
        name:"Seth Godin"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/124934523/head_shot_400x400.jpg",
        twitterhandle:"SPressfield",
        name:"Steven Pressfield"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1295112038096629760/3eCOaKDb_400x400.jpg",
        twitterhandle:"simonsinek",
        name:"Simon Sinek"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1440461885703217155/Js8kvT7a_400x400.jpg",
        twitterhandle:"TonyRobbins",
        name:"Tony Robbins"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1493135410230267906/knKNAh2V_400x400.jpg",
        twitterhandle:"sophiaamoruso",
        name:"Sophia Amorus"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1315809894411403265/GFTl08tw_400x400.jpg",
        twitterhandle:"ariannahuff",
        name:"Arianna Huffington"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1187448678371463169/Bd0jNLQ9_400x400.jpg",
        twitterhandle:"TheSharkDaymond",
        name:"Daymond John"
      },
    ],
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51tEO57bs1L._SX328_BO1,204,203,200_.jpg"
    },
    {
      bookName:"Principles (for Success)",
      bookAuthors:[ "Ray Dalio"],
      recomandedBy:[
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
        twitterhandle:"billgates",
        name:"Bill Gates"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/2233350183/hastings_reed_abosch_400x400.jpg",
        twitterhandle:"reedhastings",
        name:"Reed Hastings"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/49918572/half-face-ice_400x400.jpg",
        twitterhandle:"tferriss",
        name:"Tim Ferriss"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1440461885703217155/Js8kvT7a_400x400.jpg",
        twitterhandle:"TonyRobbins",
        name:"Tony Robbins"
      }
    ],
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41mD+n0RquL._SX258_BO1,204,203,200_.jpg"
    },
    {
      bookName:"Stillness Is the Key",
      bookAuthors:[  "Ryan Holiday"],
      recomandedBy:[
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1403013239487680512/FEfDeOTX_400x400.jpg",
        twitterhandle:"ProfCalNewport",
        name:"Cal Newport"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1315809894411403265/GFTl08tw_400x400.jpg",
        twitterhandle:"ariannahuff",
        name:"Arianna Huffington"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1204727725836996608/ByShSrLR_400x400.jpg",
        twitterhandle:"IAmMarkManson",
        name:"Mark Manson"
      },
        {
        imageUrl:"https://pbs.twimg.com/profile_images/1408049737157259271/7MmiUGAI_400x400.jpg",
        twitterhandle:"angeladuckw",
        name:"Angela Duckworth"
      }
    ],
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71xpXdXuZRL.jpg"
    }
    
  ]

  res.render(process.cwd()+"/pages/booksrecommended/booksrecommended.ejs", {data:recomandation});
  // T.get('friends/list', [{ screen_name:userId },{count:200}],  function (err, data, response) {
    
  //   /*{
  //               imageUrl:"",
  //               twitterhandle:"TonyRobbins",
  //               name:"Tony Robbins"
  //             }
  //              */
  //   // console.log(data);
  //   let recomandation = bookRecomandation(data);    
  //   res.json(recomandation);
  //   if(err){
  //     res.send(err);
  //   }
  // })
})

// connect react to nodejs express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));
