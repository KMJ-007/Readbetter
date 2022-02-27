const bookdata = require('./database-exchange/book.json')
const leaderData = require('./database-exchange/leaders.json')
const Book = require('./models/book-model')
const leader = require('./models/leader-model')
const bookRecomandation=async(followersId)=>{
    console.log("-------------------------------")
    leader.find(followersId)
    const followerArray = (followersId.users).map((data,i)=>{

        // console.log(data.screen_name)
        return data.screen_name
    })
   const leaderId= await leader.find({"twitter.id":followerArray.map((data,i)=>{return data})},(err,data)=>{
        if(err){
            // console.log(err);
            return err
        }
        
    }).clone()
    // console.log(leaderId)
    return leaderId;
    
}



module.exports = bookRecomandation;