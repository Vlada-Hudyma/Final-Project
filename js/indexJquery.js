$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
            top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
    });
    
    $('.three').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
});

$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});


var time = 2;
$('.number').each(function(){
  $('div').each(function(){
    var 
    i = 1,
    num = $(this).data('num'),
    step = 1000 * time / num,
    that = $(this),
    int = setInterval(function(){
      if (i <= num) {
        that.html(i);
      }
      else {
        clearInterval(int);
      }
      i++;
    },step);
  });
});
