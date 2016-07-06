$(document).ready(function() {
  newQuote();
});

function newQuote() {
    $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    headers: {
      "X-Mashape-Key": "U9J3wiM6oSmshnL3MmMF9bOrvmnup1UhUuIjsnRiQWBDuk9QyL",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    dataType: "json",
    success: function(data) {
      var quote = data.quote;
      var author = data.author;
      $('#quote').empty();
      $('#quote').append(quote);
      $('#source').empty();
      $('#source').append(author);
      $('#tweet').attr("href", "https://twitter.com/intent/tweet?text=" + quote + "-" + author);
    }
  })

};
