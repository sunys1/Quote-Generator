let apiQuotes = [];

//Show new quote
function newQuote() {
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    return quote;
}

//Gets Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(newQuote());
    } catch (error) {
        //Catch error here
    }
}

//On load
getQuotes();
