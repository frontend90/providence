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
  speed: 1000
});

/****************      pricing card    **************/
$('.individual').click(function(){
$('.individual').addClass('active');
$('.starter').addClass('active');
$('.company').removeClass('active');
  $('.pro').removeClass('active');
});

$('.company').click(function(){
  $('.company').addClass('active');
  $('.pro').addClass('active');
  $('.individual').removeClass('active');
$('.starter').removeClass('active');
  });