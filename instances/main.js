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


 //      $(window).scroll(function() {

 //    if ($(this).scrollTop()<350)
 //     {
 //        $('.footer').slideUp();
 //     }
 //    else
 //     {
 //      $('.footer').slideDown();
 //     }
 // });

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

        $('.click').hover(function() {
      	$('.click').addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      		$(this).removeClass('animated swing');
      	});
      })
   $("#works").click(function (){
                $('html, body').animate({
                    scrollTop: $("#here").offset().top
                }, 2000);
            });
//hover


  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1000,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

 $(".animsition").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-right',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });



    // Custom Easing
   // $('#header2').hide()

   // $('#contact').click(function(){
   // 	$('#header2').toggle()
   // })

   // window.sr = ScrollReveal({ reset: true }).reveal('.proj3, .proj4, .proj5, .proj6, .proj7, .proj8, .proj9, .proj10, .proj11 ');
})
