const bookdata = require('./database-exchange/book.json')
const leaderData = require('./database-exchange/leaders.json')
const Book = require('./models/book-model')
const leader = require('./models/leader-model')
const bookRecomandation=(followersId)=>{
    console.log("-------------------------------")
    // leader.find(followersId)
    return followersId;

    
}



module.exports = bookRecomandation;