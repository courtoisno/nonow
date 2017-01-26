function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


$(document).ready(function(){

   $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('header').slideUp();
     }
    else
     {
      $('header').slideDown();
     }
 });


      $(window).scroll(function() {

    if ($(this).scrollTop()<350)
     {
        $('.footer').slideUp();
     }
    else
     {
      $('.footer').slideDown();
     }
 });

      // $('#works').hover(function() {
      // 	$('#works').addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      // 		$(this).removeClass('animated swing');
      // 	});
      // })
      //  $('#various').hover(function() {
      //   $('#various').addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      //     $(this).removeClass('animated swing');
      //   });
      // })

      //   $('#contact').hover(function() {
      // 	$('#contact').addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      // 		$(this).removeClass('animated swing');
      // 	});
      // })
   $("#works").click(function (){
                $('html, body').animate({
                    scrollTop: $("#here").offset().top
                }, 2000);
            });
//hover




    // Custom Easing
   // $('#header2').hide()

   // $('#contact').click(function(){
   // 	$('#header2').toggle()
   // })

   // window.sr = ScrollReveal({ reset: true }).reveal('.proj3, .proj4, .proj5, .proj6, .proj7, .proj8, .proj9, .proj10, .proj11 ');
})
