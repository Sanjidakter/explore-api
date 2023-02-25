const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json()) //response ashbe jake response.json e convert kora hocche
    .then(data => displayQuote(data)) //
    .catch(error => console.log(error))
}

const displayQuote = quote => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerHTML = quote.quote;
}

loadQuote();