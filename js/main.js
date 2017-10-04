$(".newquote").on("click", function() {

	$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp", function(json) {
		$(".quote").html(JSON.stringify(json));
		// $(".author").html(a[0].title);
	});
});