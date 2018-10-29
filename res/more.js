document.addEventListener('DOMContentLoaded', function() {
  var options = new Object;
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(function(){
  $("#footer").load("https://nuilpointer.github.io/res/footer.html");
});

$(function(){
  $("#header").load("https://nuilpointer.github.io/res/header.html");
});

$(document).ready(function(){
    $('.tabs').tabs();
  });

$(document).ready(function() {
  $(window).scroll(function() {
    if($(window).scrollTop()>580) {
      $('nav').addClass('grey darken-3');
    } else {
      $('nav').removeClass('grey darken-3');
    }
  });
});
//ここからconsole出力
console.log("このデバッグページを開くより https://materializecss.com/ を見た方が有益です。");
console.log("保存して察しのついた方、主の別ページの使いまわしのHPです\n手を抜いてはいけない(戒め)");
