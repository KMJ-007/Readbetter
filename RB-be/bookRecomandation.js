const bookdata = require('./database-exchange/book.json')

const bookRecomandation=(followersId)=>{
    console.log("-------------------------------")
    console.log(followersId,bookdata);
    // console.log(bookdata);
    
}

module.exports = bookRecomandation;