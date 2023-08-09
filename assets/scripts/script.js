$(document).ready(function(){



    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var opacity = 1 - (scrollTop / 500); // 최상단에서 500px 스크롤할 때까지 투명도가 0이 됨
        var slideUp = 20 - (scrollTop / 1); 
  
        if (opacity >= 0) {
          $(".scroll").css("opacity", opacity);
        }
        if (opacity >= 0) {
            $(".visu_title").css("opacity", opacity);
        }
        if (slideUp >= -1000) {
          $(".visu_title").css("left", slideUp);
        }
      });

    // 햄버거버튼
    $('.nav_toggle').click(function(){
        if ($('.nav_toggle').hasClass('on')) {
            $('.nav_toggle').removeClass('on');
            $('header').removeClass('on');
        }else{
            $('.nav_toggle').addClass('on');
            $('header').addClass('on');
        }
    });
    $('.menu_list li a').click(function(){
        if ($('.nav_toggle').hasClass('on')) {
            $('.nav_toggle').removeClass('on');
            $('header').removeClass('on');
        }else{
            $('.nav_toggle').addClass('on');
            $('header').addClass('on');
        }
    });

    $('.link_head').click(function(){
        if ($('.site_link').hasClass('on')) {
            $('.site_link').removeClass('on');
        }else{
            $('.site_link').addClass('on');
        }
    });   

    $('body').on('click', function(e){
        var $tgPoint = $(e.target);
        var $btn1_1 = $tgPoint.is('.site_link');
        var $btn1_2 = $tgPoint.is('.site_link *');
        if (!$btn1_1 && !$btn1_2) {
            $('.site_link').removeClass('on');
        }
    });    



    // 탑버튼
    $('#top_btn').hide();
    $(window).scroll(function() {

        if ($(this).scrollTop() > 2000) {
            $('#top_btn').fadeIn();
        } else {
            $('#top_btn').fadeOut();
        }
    });
    $("#top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

    // 모달창 켜기1
    $('.modal_step_open').click(function(){
        var modal_step = $(this).attr('modal_step');

        $('.modal_step').addClass('hidden'); // 이전 모달창을 숨김
        
        $(this).addClass('current');
        $("."+ "modal_step" +modal_step).removeClass('hidden');
    })

    // 모달창 켜기2
    $('.modal_open').on("click", function() {
        $(this).next().removeClass("hidden");
    });

    // 모달창 끄기
    $('.cancerButton').on("click", function() {
        if ($(this).closest(".modal")) {
            $(this).closest(".modal").addClass("hidden");
        }
        else {
            $(this).closest(".modal").addClass("hidden");
        }
    });

    // 모든 모달창 끄기
    $('.allModalClose').on("click", function() {
        $('.modal').addClass("hidden");
    });

    // 첫번째 모달창 끄기
    $('.firstModalClose2').on("click", function() {
        $(this).closest('.modal').addClass("hidden");
        $(this).closest('.modal').next('.modal').removeClass("hidden");
    });   
});


