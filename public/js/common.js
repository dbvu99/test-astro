$(document).ready(function () {
  $('#top1-close').click(function (e) {
    $('.header-top1').fadeOut();
  });
  $('.body-slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.menu-sub').click(function (e) {
    $(this).toggleClass('active');
  });
  $('#motion .play').click(function (e) {
    $('#motion button').css({ display: 'none' });
    $('#motion .pause').css({ display: 'block' });
    $('.body-slider').slick('slickPause');
  });
  $('#motion .pause').click(function (e) {
    $('#motion button').css({ display: 'none' });
    $('#motion .play').css({ display: 'block' });
    $('.body-slider').slick('slickPlay');
  });
  $('#icon-menu').click(function (e) {
    $(this).toggleClass('active');
    $('#menu-sp').toggleClass('active');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#header-logo .pc').css({ top: '0', opacity: '1' });
    } else {
      $('#header-logo .pc').css({ top: '-100%', opacity: '0' });
    }
  });
});
