const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderSchema = new Schema ({

leaderName:String,
leaderSector:String,
clickBy:[],
booksReco:[],
leaderBio:String,
leaderStoryLink:String,
sortCount:Number,
twitter:{
    "followers":Number,
    "id":String,
}
});

const leader = mongoose.model("leader", leaderSchema);

module.exports = leader;