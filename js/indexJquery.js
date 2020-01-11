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





$(window).on('scroll', function(){
  var w_top = $(window).scrollTop();
  var e_top = $('.project__all').offset().top;

  console.log(w_top + ' ' + e_top);

  if(w_top >= 1398){

    var time = 2;
$('.number').each(function(){
  
    var $item = $(this),
      maxNum = +$item.data('num'),
      step = time* 10000 / maxNum;

    showNumber($item, step, maxNum);
});

    function showNumber($item, step, maxNum) {
      var currentNum = +$item.html() + 1;
    
      if (currentNum <= maxNum) {
        $item.html(Math.min(maxNum, currentNum));
    
        setTimeout(function() {
          showNumber($item, step, maxNum)
        }, step);
      }
    }
  }
})

  