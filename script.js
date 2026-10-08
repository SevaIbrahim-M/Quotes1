let quoteID = document.getElementById("quotesID");
let authorID = document.getElementById("authorID");

console.log(quoteID);
console.log(authorID);

async function getQuote() {

    try {
        let result = await fetch('https://dummyjson.com/quotes/random')

        let data = await result.json();

        quoteID.innerHTML = data.quote;
        authorID.innerHTML = data.author;
    } catch (error) {
        console.log(error);
    }
}
getQuote();