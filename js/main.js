$(function(){

  $('.color-menu').on('click',function(){
    $('.nav-area,.nav-btn,.mask').toggleClass('open');
  });

  $('.nav-area a').on('click',function(){
    $('.nav-area,.nav-btn,.mask').toggleClass('open');
  });

  $('.mask').on('click',function(){
    $('.nav-area,.nav-btn,.mask').toggleClass('open');
  });
});