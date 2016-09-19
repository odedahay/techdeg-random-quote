
// Objects to hold the data quotes:
var quotes = [
  {
   quote: "Life is really simple, but we insist on making it complicated.",
   source: "Confucius",
   citation: "The sayings of Confucius",
   tags: "Life"
  },
  {
    quote: "Experience is simply the name we give our mistakes.",
    source: "Oscar Wilde",
    year: "1900",
    tags: "Experience"
  },
  {
    quote: "Love is a better teacher than duty.",
    source: "Albert Einstein",
    year: "1955",
    tags: "Love"
  },
  {
    quote: "Art is anything people do with distinction.",
    source: "Louis Dudek",
    citation: "www.brainyquote.com",
    tags: "Art"
  },
  {
    quote: "Where there is no work, there is no dignity.",
    source: "Pope Francis",
    citation: "St. Peter’s Square",
    tags: "Dignity"
  }
];

var uniqueRandoms = [];

// Random quote object from the quotes array:
function getRandomQuote() {

    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < quotes.length; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var finalRandom = uniqueRandoms[index];

    // remove that value from the array to avoid any duplicate numbers
    uniqueRandoms.splice(index, 1);

    return quotes[finalRandom];
}

// Randomly background change color of the page:
function getRandomColor() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  // console.log('rgb(' + red + ',' + green + ',' + blue + ')');
  // return random color
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

//calls the getRandomQuote function and stores the returned quote object in a variable
function printQuote() {

  var quotesArray = getRandomQuote();

  var message = '<p class ="quote">' + quotesArray.quote + '</p>';
      message += '<p class ="source">' + quotesArray.source;

  if (quotesArray.year === undefined){
    //alert('Test');
    message += '<span class ="citation">' + quotesArray.citation + '</span>';
  }
  if (quotesArray.citation === undefined){
      message += '<span class ="year">' + quotesArray.year + '</span>';
  }
  message += ', <span class="tags">' + quotesArray.tags + '</span></p>';

  // prints the random qoutes evertime they click btn.:
  document.getElementById('quote-box').innerHTML = message;

  // Add random background-color
  var randomColor = getRandomColor();

  // prints final HTML to the page
  document.body.style.background=randomColor;

} //end of printQuote()

// Refresh the quote every 30 seconds:
setInterval(printQuote, 30000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, true);
