$(function() {

  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    // 「3」の部分を、lengthメソッドを用いて書き換えてください
    } else if (slideIndex == $('.slide').length-1) {
      $('.next-btn').hide();
    }
  }

  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });

  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });


  //-----------------------------------//

  $('.index-btn2').click(function() {
    $('.active2').removeClass('active2');
    var clickedIndex2 = $('.index-btn2').index($(this));
    $('.slide2').eq(clickedIndex2).addClass('active2');

    $('.active3').removeClass('active3');
    $('.index-btn2').eq(clickedIndex2).addClass('active3');
  });

  //-------------------------------------//

  $('.index-btn3').click(function() {
    $('.active4').removeClass('active4');
    var clickedIndex3 = $('.index-btn3').index($(this));
    $('.slide3').eq(clickedIndex3).addClass('active4');

    $('.active5').removeClass('active5');
    $('.index-btn3').eq(clickedIndex3).addClass('active5');
  });

  //------------------------------------//



  function dropDown(){
    if(jQuery('.menu-container .menu').css('display') === 'block') {
      jQuery('.menu-container .menu').slideUp('1500');
      $('.fa-bars').addClass('dropactive');
      $('.fa-times').removeClass('dropactive');
    }else {
      jQuery('.menu-container .menu').slideDown('1500');
      $('.fa-times').addClass('dropactive');
      $('.fa-bars').removeClass('dropactive');
    }
  }


  $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');

        jQuery('.menu-container .menu').slideUp('1500');
        $('.fa-bars').addClass('dropactive');
        $('.fa-times').removeClass('dropactive');

        return false;

     });


        $('.icon-hamburger').click(function() {
              dropDown();
      });

      $('.close').click(function() {
            dropDown();
      });


  });
