const bookdata = require('./database-exchange/book.json')
const leaderData = require('./database-exchange/leaders.json')
const Book = require('./models/book-model')
const leader = require('./models/leader-model')
const bookRecomandation=async(followersId)=>{
    console.log("-------------------------------")
    // console.log(followersId.users);
    const followerArray = (followersId.users).map((data,i)=>{

        // console.log(data.screen_name)
        return data.screen_name
    })
    console.log(followerArray);
    let leadersId= []
    for (id in followerArray){

       await leader.find({"twitter.id":followerArray[id]},(err,data)=>{
            if(data){
                leadersId.push(data);
            }
            
        }).clone().catch(function(err){ console.log(err)})
    }
    // console.log(followerArray)
    // return leaderId;
    
}



module.exports = bookRecomandation;