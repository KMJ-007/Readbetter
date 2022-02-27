const fetch = require("node-fetch");
 async function getBookdata() {
    const books = await fetch(
        "http://localhost:1234/mongodata/books"
    );
    let response = await books.json();
    bookRecomandation(bookdata=response)
}
const bookRecomandation=(followersId,bookdata)=>{
    console.log("-------------------------------")
    console.log(bookdata);
}

module.exports = bookRecomandation;