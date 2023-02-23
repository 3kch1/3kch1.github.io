// JavaScript Document

$("#hamburger").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#hamburger").removeClass('active');//ボタンの activeクラスを除去し
    $("#nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

//smartphoneの時だけ有効化するJavaScript
//farmers,usersのslickslide
function sliderSetting() {
  var width = $(window).width();
  if (width <= 754) {
    $('#farmers-slick, #users-slick').not('.slick-initialized').slick({
      dots: true,
      arrows: false
    });
  } else {
    $('#farmers-slick.slick-initialized, #users-slick.slick-initialized').slick('unslick');
  }
}
// 初期表示の実行
sliderSetting();
// リサイズの実行
$(window).resize(function () {
  sliderSetting();
});

//faq accordion
$(".question-answer dt").on('click', function () {
  $(this).next().slideToggle(500);
})

//スクロールボタン
$(function () {
  var topBtn = $('#scroll-top');
  topBtn.hide();

  $(window).scroll(function () {

    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
    topBtn.on('click',function(event){
      event.preventDefault();
      $("body,html").animate({
        scrollTop:0
      },800);
      });
    });

//ページ内リンクのジャンプ
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    $("html, body").animate(
        {scrollTop: target.offset().top}, speed, "swing");
    return false;
  });
});