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
    if($(window).scrollTop()>600) {
      $('nav').addClass('grey darken-3');
    } else {
      $('nav').removeClass('grey darken-3');
    }
  });
});
//ここからconsole出力
console.log("このデバッグページを開くより https://materializecss.com/ を見た方が有益です。");
console.log("保存して察しのついた方、主の別ページの使いまわしのHPです\n手を抜いてはいけない(戒め)");
$(function() {
  $('#site-main').css('display','none');
  let leon, canvas, ctx;
  const sw = window.outerWidth;
  const sh = window.outerHeight/1.25;
  const pixelRatio = 2;
  console.log("height is " + window.outerHeight)
  console.log("width is " + window.outerWidth)
  function init() {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);

    leon = new LeonSans({
        text: "nuilpointer",
        color: ['#ffffff'],
        size: window.outerWidth * window.outerHeight / 10000,
        weight: 200,
        align: "center"
    });

    requestAnimationFrame(animate);
    let i, total = leon.drawing.length;
    for (i = 0; i < total; i++) {
      TweenMax.fromTo(leon.drawing[i], 1.6, {
        value: 0
      }, {
        delay: i * 0.05,
        value: 1,
        ease: Power4.easeOut
      });
    }
  }

  function animate(t) {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;
    leon.position(x, y);

    leon.draw(ctx);
  }

  window.onload = () => {
    init();
  };
});
$(document).ready(function() {
  setTimeout(function(){
     $("canvas").delay(500).fadeOut(450)
     $("#site-main").delay(500).fadeIn(450)
   },2000);
})
