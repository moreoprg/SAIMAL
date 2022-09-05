// ハンバーガーメニュー
window.onunload = function () {};
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 768) {
  } else {
    $("header .drawer").click(function () {
      $("body").toggleClass("nav-open");
      $("header .header-nav").fadeToggle(200);
    });
    $("header li a").click(function () {
      $("body").toggleClass("nav-open");
      $("header .header-nav").fadeToggle(200);
    });
  }
});

// クラスの付与

// homeトップのズーム拡大でスライド
const slider = $(".slider");

$(function () {
  // 最初のスライドに"slider-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
  slider
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("slider-animation");
    })
    .slick({
      autoplay: true, // 自動再生ON
      fade: true, // フェードON
      arrows: false, // 矢印OFF
      speed: 1000, // スライド、フェードアニメーションの速度1000ミリ秒
      autoplaySpeed: 3000, // 自動再生速度3000ミリ秒
      pauseOnFocus: false, // フォーカスで一時停止OFF
      pauseOnHover: false, // マウスホバーで一時停止OFF
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"slider-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("slider-animation");
        // あとで"slider-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation slider-animation"
        );
      },
    });
});

$(function () {
  $(".works-slider").slick({
    slidesToShow: 3, // 3枚のパネルを表示
    slidesToScroll: 1, // 1ずつスライド
    arrows: true, // 矢印
    dots: false, // インジケーター
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// アコーディオンアニメーション
const Accordion = $(".job-inner-list-item");
const Job = $(".job-inner-list-item-ttl");
const Content = $(".job-inner-list-item-content");

//アコーディオンをクリックした時の動作
Job.on("click", function () {
  //タイトル要素をクリックしたら
  Content.slideUp(500); //クラス名.job-inner-list-item-contentがついたすべてのアコーディオンを閉じる

  let findAccordion = $(this).next(Content); //タイトル直後のアコーディオンを行うエリアを取得

  if ($(this).hasClass("close")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close"); //クラス名を除去
  } else {
    //それ以外は
    $(".close").removeClass("close"); //クラス名closeを全て除去した後
    $(this).addClass("close"); //クリックしたタイトルにクラス名closeを付与し
    $(findAccordion).slideDown(500); //アコーディオンを開く
  }
});

// フェードイン

function fadeIn() {
  // 画面に入ってきたら出てくる
  $(".fadeInTrigger").each(function () {
    //fadeInTriggerというクラス名が
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 80;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeIn"); //画面s内に入ったらfadeInというクラス名を追記
    }
  });

  // フェードアップ
  $(".fadeUpTrigger").each(function () {
    //fadeUpTriggerというクラス名が
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 80;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeUp"); //画面内に入ったらfadeInというクラス名を追記
    }
  });

  // フェードレフト
  $(".fadeLeftTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 80;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeLeft");
    }
  });

  // フェードライト
  $(".fadeRightTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 80;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeRight");
    }
  });
}
$(window).scroll(function () {
  fadeIn(); /* スクロールしたらfadeIn関数を呼ぶ*/
});

const loadAnime = $("#loading-wrapper");
$(window).on("load", function () {
  loadAnime.delay(1300).fadeOut(700);
});

function stopload() {
  loadAnime.delay(1000).fadeOut(700);
}
setTimeout("stopload()", 10000);
