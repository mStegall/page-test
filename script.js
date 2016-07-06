$(document).ready(function() {
  newQuote();
});

function newQuote() {
    var colors = ['red', 'aqua', 'chartreuse', 'coral', 'darkorchid', 'deeppink', 'forestgree',
      'gold', 'indigo', 'orange', 'palegreen', 'navy', 'teal', 'violet']    

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
      
      var color = colors[getRandomInt(colors.length)]
      
      $('#quoteContainer, body').css('background-color', color)
      $('button').css('color', color)
    }
  })

};

function getRandomInt(max) {
  return Math.floor(Math.random() * (max))
}