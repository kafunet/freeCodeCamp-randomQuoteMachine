$(document).ready(function() {
    var quote,
      author;
  
    function getNewQuote() {
      $.ajax({
        url: 'https://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
          method: 'getQuote',
          lang: 'en',
          format: 'jsonp'
        },
        success: function(res) {
          quote = res.quoteText;
          author = res.quoteAuthor;
          $('#quote').text(quote);
          if (author) {
            $('#author').text('Said by ' + author);
          } else {
            $('#author').text('- Unknown');
          }
        }
      });
    }
    getNewQuote();
    $('#get-quote').on('click', function(event) {
      event.preventDefault();
      getNewQuote();
    });
    $('#share-quote').on('click', function(event) {
      event.preventDefault();
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '--' + author))
    });
  });


    

