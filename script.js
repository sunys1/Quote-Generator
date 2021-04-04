const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
let apiQuotes = [];

//Show loading
function showLoading() {
    quoteContainer.hidden = true;
    loader.hidden = false;
}

function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
//Show new quote
function newQuote() {
    showLoading();
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //authorText.textContent = quote.author;
    //Check if the author field is blank and replace it with 'Unknown'.
    if (!quote.author){
        authorText.textContent = 'Unknown';
    }else {
        authorText.textContent = quote.author;
    }

    //Check quote length to determine the font styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote');
    }
    //Once loading complete, hide loader and dipslay quote.
    quoteText.textContent = quote.text;
    complete();
}

//Tweet new quote
function tweetQuote() {
    tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweetUrl, '_blank');
}

//Gets Quotes from API
async function getQuotes() {
    showLoading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(newQuote());
    } catch (error) {
        //Catch error here
    }
}

//EventListeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//On load
getQuotes();


