/*
mongoexport --uri mongodb+srv://kmj-007:6XA1myLXtBrxiX6B@gladiator-kris.t7sjb.mongodb.net/scraper  --type json --out ~/Desktop/mongodata data
*/
const mongoose = require("mongoose");
const Book = require("../models/book-model");

const bookData = Book.find({},'book', function (err, users) {
    // return res.end(JSON.stringify(users));
    // return res.send( JSON.parse(JSON.stringify(users)) );
    // console.log(users);
});



// const bookData = Book.find().lean().exec(function (err, users) {
//     // return res.json(users);
    
// })

module.exports= bookData;