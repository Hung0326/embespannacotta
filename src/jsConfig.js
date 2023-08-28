$(".product-carousel").owlCarousel({
  autoplay: false,
  smartSpeed: 1500,
  margin: 30,
  dots: false,
  loop: true,
  nav : true,
  navText : [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive: {
    0:{
      items:1
    },
    576:{
      items:2
    },
    768:{
      items:3
    },
    992:{
      items:4
    }
  }
});

$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  dots: true,
  loop: true,
  items: 1
});
$(".navbar-nav a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 45
    }, 1500, 'easeInOutExpo');
    
    if ($(this).parents('.navbar-nav').length) {
      $('.navbar-nav .active').removeClass('active');
      $(this).closest('a').addClass('active');
    }
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 1500);
  return false;
});

$('.btt').click(function () {
  $('html, body').animate({scrollTop: 0}, 600);
  return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        document.querySelector('.bth-navinator').classList.add('active')
    } else {
        document.querySelector('.bth-navinator').classList.remove('active')
    }
});
