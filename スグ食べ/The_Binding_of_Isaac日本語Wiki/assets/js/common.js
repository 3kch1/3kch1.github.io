// JavaScript Document

//メニューをクリックしたら出てくるjs
function mediaQueriesWin() {
  var width = $(window).width();
  if (width >= 769) {
    $(".click-ja>a").off('click');
    $(".click-ja>a").on('click', function () {
      var parentElm = $(".pc-menu").parent();
      $(parentElm).toggleClass('active');
      $(parentElm).children('ul').stop().slideToggle(500);
      $('.pc-eng-menu').stop().slideUp(500);
      return false;
    });
    $(".click-eng>a").off('click');
    $(".click-eng>a").on('click', function () {
      var parentElm = $(".pc-eng-menu").parent();
      $(parentElm).toggleClass('active');
      $(parentElm).children('ul').stop().slideToggle(500);
      $('.pc-menu').stop().slideUp(500);
      return false;
    });
  }
}

mediaQueriesWin();

//スクショのslick.js
$('.slider').slick({
  autoplaySpeed: 3000,
  speed: 1000,
  autoplay: true,
  infinite: true,
  slidesToshow: 1,
  slidesToscroll: 1,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

//スクロール
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

//ハンバーガーメニュー
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $('.modal-window').css('display','none');
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


//キャラクター切り替え
$(function () {
  var winW = $(window).width();
  var devW = 769;
  if (winW >= devW) {
    $('.character-select li:first-child .character-detail').css('display','block');
  }
  $('.character-select a').on('click',function(){
    var target = $(this).attr('href');
    $(this).parent().parent().find('.character-detail').css('display','none');
    $(target).css('display','block');
    return false; //aタグのクリックイベントのみを実行する（画面遷移はしない）
  });
/*  const charElms = document.querySelectorAll('.character-select a');
  for(const charElm in charElms) {
    charElms[charElm].addEventListener('click', function(){
    var target = $(this).attr('href');
    $(this).parent().parent().find('.character-detail').css('display','none');
    $(target).css('display','block');
    return false; //aタグのクリックイベントのみを実行する（画面遷移はしない）
    })
  }*/
  $('.closeModal button').on('click',function(){
    $(this).parent().parent().css('display','none');
  });
  $('.item__icons a ,.trinkets__icons a ,trans-select__box a').on('click',function(){
    $('.modal-window').css('display','none');
    $(this).next('.modal-window').css('display','block');
  /*  $('body').css('overflow','hidden');*/
    $('.closeModal').on('click',function(){
      $('body').css('overflow','auto');
    });
    return false; //aタグのクリックイベントのみを実行する（画面遷移はしない）
  });
});


//検索

$(function () {
  $('#search-box').on('keyup',function(){
    var expr = this.value.toUpperCase();
    expr = expr.replace(/\s/,"");
    $('.item__icons li ,.trinkets__icons li').each(function(){
      var string = $(this).find('.detail__text-item__name ,.detail__text-trinkets__name').text().toUpperCase();
      string = string.replace(/\s/,"");
      if (string.search(expr) == -1) {
        $(this).css('display','none');
      } else {
        $(this).css('display','block');
      }
    });
  });
});

//変身ページ
$(function () {
  $('.trans-select button').on('click',function(){
    var target = $(this).attr('data-target');
    $('.trans-detail').each(function(index, item){
      if (item.id == target){
         $(item).css('display','block');
      } else {
         $(item).css('display','none');
      } 
      window.scrollTo({
        top: document.getElementById('move').offsetTop,
        behavior: 'smooth'
        });
    }); 
  });
}); 

//ツールチップ
(function($){
    // ここからツールチッププラグイン
    $.fn.easyToolTip = function(){  
        // toolTipを生成してbodyに追加しておく
        var toolTip = $('<div id="toolTip"></div>').hide();
        $('body').append(toolTip);
        
        $(this).filter(function(){
            // titleかaltを持っているものだけに絞る
            return this.title || this.alt;
        }).each(function(){
        
            var self = $(this);
            // titleがあればtitleを、なければaltをターゲットにする
            var target = this.title ? 'title' : 'alt';
            // ターゲットにした属性の値を保存する
            var tipText = self.attr(target);
            
            self.hover(function(e){
                // ブラウザのツールチップが表示されるのを防ぐために一時的にtitle(alt)を削除
                self.attr(target,'');
                // toolTipにテキストを入れて表示
                toolTip
                    .stop(true,true)
                    .fadeIn('fast')
                    .text(tipText)
                    .css({
                        backgroundColor: '#6C895A',
                        color: '#FFF',
                        padding: '5px',
                        borderRadius: '5px',
                        fontSize: '1.4rem',
                        position: 'absolute',
                        top: e.pageY - 20,
                        left: e.pageX + 20
                    })
            },function(){
                // title(alt)を元に戻す
                self.attr(target,tipText);
                // toolTipを非表示にする
                toolTip.fadeOut('fast');
            }).mousemove(function(e){
                // カーソルに追従させる
                toolTip.css({
                    top: e.pageY - 40,
                    left: e.pageX - 40
                });
            });
            
        });
    }
})(jQuery);

jQuery(function($){
    // ツールチップの実行
    $('img').easyToolTip();
});