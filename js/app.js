const menuToggle = document.getElementById('menu-toggle');
const menuu = document.getElementById('menuu');

menuToggle.addEventListener('click', function() {
  menuu.classList.toggle('hidden');
  menuToggle.classList.toggle('active');
});


// $('.about-content ul li a').on('click', function () {
//   $('.about-content ul li a').removeClass('active');
//   $(this).addClass('active');
// });



// $('.counter').counterUp({
//   delay: 10,
//   time: 2000
// });



$(".counting_number").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});





$(function () {

  $(window).on('scroll', function () {
      var scrollSize = $(window).scrollTop()
      if (scrollSize > 500) {
          $('#backtotop').slideDown()
      } else {
          $('#backtotop').slideUp()
      }


      if (scrollSize > 50) {
          $('#navigation').addClass('active')
      } else {
          $('#navigation').removeClass('active')
      }
  })
}) 
  
  $('#backtotop').on('click', function () {
      $('html, body').animate({
          scrollTop:0,
      },1000)
  })





// var mySlider = $('.pogoSlider').pogoSlider({
//     pauseOnHover: false,
//     generateButtons: false,
//     generateNav: false
// }).data('plugin_pogoSlider');
// $('.arrow_left').on('click', function () {
//     mySlider.prevSlide();
// });
// $('.arrow_right').on('click', function () {
//     mySlider.nextSlide();
// });




// $('.fade').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });





