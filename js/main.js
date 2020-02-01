/***********      header overlay     *************/
$('.title .btn').click(function () {
  $('.header .overlay').css("transition", "1s");
  $('.header .overlay').toggleClass('active');
});
/*************         slick       ************/
$('.blog-slider').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  speed: 1000,
  responsive: [
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/****************      pricing card    **************/
$('.individual').click(function () {
  $('.individual').addClass('active');
  $('.starter').addClass('active');
  $('.company').removeClass('active');
  $('.pro').removeClass('active');
});

$('.company').click(function () {
  $('.company').addClass('active');
  $('.pro').addClass('active');
  $('.individual').removeClass('active');
  $('.starter').removeClass('active');
});

/*************       open sidebar      *************/
$('.dropdown').click(function (e) {
  e.preventDefault();
  $('.sidebar').toggleClass('active');
});

$('.sidebar .close').click(function () {
  $('.sidebar').removeClass('active');
});

/****************      scroll top     ***************/
$(window).scroll(function () {

  var wScroll = $(this).scrollTop();

  if (wScroll > 20) {
    $('.top-menu').addClass('active');
  } else {
    $('.top-menu').removeClass('active');
  };
});

/*********************     плавный скролл        ************************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});

/*******************       WOW     ************/
new WOW().init();