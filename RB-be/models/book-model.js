const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({

bookAuthor:[],
bookTags:[],
clickBy:[],
bookStoryLink:String,
bookName:String,
bookImgPath:String,
bookDesc:String,
amazonLink:String,
leadersReco:[],
bookRBLink:String
})
const Book = mongoose.model("book", bookSchema);

module.exports = Book;