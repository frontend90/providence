/***********      header overlay     *************/
$('.title .btn').click(function () {
  $('.header .overlay').css("transition", "1s");
  $('.header .overlay').toggleClass('active');
});
/*************         slick       ************/
$('.blog-slider').slick({
  centerMode: true,
  centerPadding: '160px',
  slidesToShow: 1,
  slidesToScroll: 1
});