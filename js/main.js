// utilizing CORS proxy to work around Cross Origin Resource Sharing issue in the browser since retrieved
// quote data is on different server than web app 
$.getJSON("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
	$(".quote").html(json.quoteText + "\n<br>--" + json.quoteAuthor)
		}).fail(function( jqxhr, textStatus, error ) {
    	var err = textStatus + ", " + error;
    	$(".quote").html( "OOPS! unable to retrieve data due to error: " + err + ". Please try your request again later.");
});

// setup event listner to retrieve a new quote when user clicks on the generate new quote button
$(".newquote").on("click", function() {
	$.getJSON("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
	$(".quote").html(json.quoteText + "\n<br>--" + json.quoteAuthor) }).fail(function( jqxhr, textStatus, error ) {
    	var err = textStatus + ", " + error;
    	$(".quote").html( "OOPS! unable to retrieve data due to error: " + err + ". Please try your request again later.");
	});
});
