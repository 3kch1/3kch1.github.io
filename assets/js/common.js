// JavaScript Document

//スクロール
$(function () {
    var topBtn = $('#scroll-top');
    topBtn.on('click',function(event){
    event.preventDefault();
    $("body,html").animate({
        scrollTop:0
        },800);
    });
    });

//ページ遷移後にスムーススクロールする
$(function(){
    //現在のページURLのハッシュ部分を取得
    const hash = location.hash;

    //ハッシュ部分がある場合の条件分岐
    if(hash){
        //ページ遷移後のスクロール位置指定
        $("html, body").stop().scrollTop(0);
        //処理を遅らせる
        setTimeout(function(){
            //リンク先を取得
            const target = $(hash),
            //リンク先までの距離を取得
            position = target.offset().top - 20; //指定の位置から20px上 
            //指定の場所までスムーススクロール
            $("html, body").animate({scrollTop:position}, 1000, "swing");
        });
    }
});