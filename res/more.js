document.addEventListener('DOMContentLoaded', function() {
  var options = new Object;
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(function(){
  $("#footer").load("../res/footer.html");
});

$(function(){
  $("#header").load("../res/header.html");
});

$(document).ready(function(){
    $('.tabs').tabs();
  });

$(document).ready(function() {
  $('nav').removeClass('grey darken-3');
});
//ここからconsole出力
console.log("このデバッグページを開くより https://materializecss.com/ を見た方が有益です。");
console.log("保存して察しのついた方、主の別ページの使いまわしのHPです\n手を抜いてはいけない(戒め)");
