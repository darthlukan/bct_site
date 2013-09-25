/*
 * @author Brian Tomlinson <darthlukan@gmail.com>
 * @description A simple set of functions used to display
 * quotes at random from the book "The Art Of War" by
 * Sun Tzu.
 */

var quotes;
var quote;
var randint;

function getQuotes() {
    // Using XHR as it's simpler to implement than AJAX.
    var xhr = new XMLHttpRequest();

    // Grab the file containing our text
    xhr.open('GET', 'quotes.txt', false);

    // null here means we're using synchronous, not asynchronous calls.
    xhr.send(null);

    var os = navigator.platform;

    // Quotes are separated by double newlines in our text document.
    // Windows is a special snowflake, so we check to see which newline characters to look for.
    // TODO: Why does this work now but didn't with the original code?
    if (os == 'Win32') {
        quotes = xhr.responseText.split('\n\n');
    } else {
        quotes = xhr.responseText.split('\n\n');
    }
    
    return quotes;
}

/*
 * @returns randint, a random integer
 */
function randomize() {
    
    randint = Math.floor(Math.random() * quotes.length);
    
    return randint;
}

/*
 * Set the title and randomly choose a quote for display.
 *
 */
function showQuotes() {
    
    var quotes = getQuotes();
    
    var quote = quotes[randomize()];
    
    $('#quotesH').empty();
    $('#quotesC').empty();
    
    $('#quotesH').append("<h1>Quotes from 'The Art Of War':</h1><br />");
    $('#quotesC').append('<p>' + quote + '</p>');
    
    return quote;
}


$(document).bind('pageinit', function () {
    showQuotes();
});