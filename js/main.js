

$(document).ready(function() {
	var quotation = "test";
	function tweetQuotation(quotation) {
		var textToTweet = quotation;
	 	if (textToTweet.length > 140) {
	 		alert('Tweet should be less than 140 Chars');
	 	}
		else {
		 	var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
		 	window.open(twtLink,'_blank');
		}
	}
	
	// utilizing CORS proxy to work around Cross Origin Resource Sharing issue in the browser since retrieved
	// quote data is on different server than web app
	var url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
	$.getJSON(url, function(json) {
	    quotation = json.quoteText + "\n" + "--" + json.quoteAuthor;
		$(".quote").html(quotation);
		}).fail(function( jqxhr, textStatus, error ) {
	    		var err = textStatus + ", " + error;
	    		$(".quote").html( "OOPS! unable to retrieve data due to error: " + err + ". Please try your request again later.");

	});

	// setup event listner to retrieve a new quote when user clicks on the generate new quote button
	$(".newquote").click(function() {
		$.getJSON(url, function(json) {
		    quotation = json.quoteText + "\n" + "--" + json.quoteAuthor;
			$(".quote").html(quotation);
			}).fail(function( jqxhr, textStatus, error ) {
		    		var err = textStatus + ", " + error;
		    		$(".quote").html( "OOPS! unable to retrieve data due to error: " + err + ". Please try your request again later.");

		});
		
	});

	// tweet retrieved quote
	$('.tweet').click(function (e) {
		tweetQuotation(quotation);	
	 });

});