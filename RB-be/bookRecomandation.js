const bookdata = require('./database-exchange/book.json')
const leaderData = require('./database-exchange/leaders.json')
const Book = require('./models/book-model')
const leader = require('./models/leader-model')
const bookRecomandation=(followersId)=>{
    console.log("-------------------------------")
    leader.find(followersId)
    const followerArray = (followersId.users).map((data,i)=>{

        // console.log(data.screen_name)
        return data.screen_name
    })
    // console.log(followerArray);
    
}



module.exports = bookRecomandation;