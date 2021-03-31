//  selectors
 const QuoteBtn = document.querySelector(".newQuote")
 const QuoteOutput = document.querySelector("#quoteOutput")
 const QuotAuthor = document.querySelector("#authorOutput");

//  event listerner 

QuoteBtn.addEventListener("click", GetQuote)

// function 
function GetQuote(){
    fetch("https://quotable.io/random")
    .then(res => res.json())
    .then(data => {
        QuoteOutput.innerHTML = `"${data.content}"` ;
        QuotAuthor.innerHTML = data.author;})
}
