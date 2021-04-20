// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var nav = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

$(function(){
  var imgHeight = $('.cover').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
  var header = $('.header'); //ヘッダーコンテンツ

  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight) {
       //メインビジュアル内にいるので、クラスを外す。
       header.removeClass('headerColor-default');
     }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
       header.addClass('headerColor-default');
     }
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
  $(document).ready(function(){

    $("#sp_navi_btn").click(function () {
      $(this).next().slideToggle();
    });
  });

});