$(function () {
   'use strict'


   $(window).on('scroll', function () {
      var menuHeight = $('#header').height();
      var scrollSize = $(window).scrollTop();
      if (scrollSize > menuHeight) {
         $('#header').addClass('animate')
      } else {
         $('#header').removeClass('animate')
      }
   })

   $('.banner_slider').slick({
      prevArrow: '<i class="fas fa-chevron-left banner_slider_icon"></i>',
      nextArrow: '<i class="fas fa-chevron-right banner_slider_icon"></i>',
      dots: true,
      dotsClass:'banner_slider_dots'
   });

   $('.gallery_filter').filterizr();

   $('.gallery_menu li').on('click', function () {
      $(this).addClass('active')
      $(this).siblings('.active').removeClass('active')
   })



   $('.count_down').countdown('2022/03/31', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="count_down_item"><span>%D</span><span>days</span></div >'
        + '<div class="count_down_item"><span>%H</span><span>Hours</span></div >'
        + '<div class="count_down_item"><span>%M</span><span>Mins</span></div >'
        + '<div class="count_down_item"><span>%S</span><span>Secs</span></div >'));
    });
})

new VenoBox({
   spinner: 'wave',
   spinColor: 'red',
   overlayColor: 'red',
   titlePosition:'top'
});

const counters = document.querySelectorAll('.counter');
const speed = 1000; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

// preloader Start
$(window).on('load',function(){
   $('#preloader').fadeOut(3000);
});
// preloader End
//arrow 
$(window).on('scroll', function() {
   var scrollTop = $(this).scrollTop();

   if (scrollTop > 600) {
       $('#top i').fadeIn(300)
   } else {
       $('#top i').fadeOut(300)
   }
});

$('#top').on('click', function() {
   $("html, body").animate({
       scrollTop: 0
   }, 1000)
});


