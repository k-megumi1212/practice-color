$(function(){

  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      // 要素（inviewクラス）が表示されたらshowクラスを追加する
      $(this).stop().addClass("show");
    }
  });

  $('.slick01').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 4, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: true, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});

lightbox.option({
  'wrapAround': true, //グループ画像の総数を表示するか否か
  'showImageNumberLabel': false, //グループ画像の最後に矢印を押すと、最初の画像に戻るか否か
});