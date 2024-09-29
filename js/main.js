$(document).ready(function(){

    $('#nav ul.floor1 > li > a').on('click', function(){
      $(this).parent().toggleClass('active').siblings('#nav ul.floor1 > li').removeClass('active');
      $(this).parent().siblings('#nav ul.floor1 > li').children('ul.floor2').fadeOut(500);
      if($(this).parent().hasClass('active')){
        $(this).siblings('ul.floor2').fadeIn(500);
      }
      else{
        $(this).siblings('ul.floor2').fadeOut(500);
      }
      });

  $(document).on('mouseup', function(e){
    var nav_floor1 = $('#nav ul.floor1 > li.submenu');
    var nav_floor2 = $('ul.floor2');
    if(nav_floor1.has(e.target).length === 0){
      nav_floor2.fadeOut(500);
      nav_floor1.removeClass('active');
    }
  });

  $(window).on('scroll', function(){
    if($(window).scrollTop() > $('#main_article').offset().top){
      $('body').addClass('fixed_header');
      $('#nav ul.floor1 > li').removeClass('active');
      $('#nav ul.floor1 > li').children('ul.floor2').fadeOut(500);
    }
    else{
      $('body').removeClass('fixed_header');
      $('.click_nav_btn').removeClass('active');
      $('.click_nav').removeClass('active');
    }
  });

  $('.click_nav_btn').on('click', function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.click_nav').addClass('active');
    }
    else{
      $('.click_nav').removeClass('active');
    }
  });

  const mobNavListBtn = $('.click_nav_list.type_2 .cnl_floor1 > li > a');
  const mobNavList = $('.click_nav_list.type_2 .cnl_floor2');

  mobNavListBtn.on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('active').parent().siblings().find(mobNavListBtn).removeClass('active');
    
    if(mobNavListBtn.hasClass('active')){
      $(this).siblings(mobNavList).slideDown(300);
      $(this).parent().siblings().find(mobNavList).slideUp(300);
    }

    else if(mobNavListBtn.not('.active')){
      $(this).siblings(mobNavList).slideUp(300);
    }

  });
    

    const swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: true,
        duration: 6000,
        speed: 2000,

      });

      var sac_full_article_height = $('.sac_full_article').innerHeight() + 23;
      var left_aside_height = $('.sub_article_box').outerHeight() - sac_full_article_height;

      $('.left_aside_view').css({'margin-top' : sac_full_article_height + 'px'});
      $('.left_aside').css({'height' : left_aside_height + 'px'});
      $('.left_aside_view').css({'height' : left_aside_height + 'px'});

      const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 4,
        speed: 1200,
        navigation: {
          nextEl: '.sbn_2',
          prevEl: '.sbp_2',
        },
        spaceBetween: 25,

      });

      const swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 4,
        speed: 1200,
        navigation: {
          nextEl: '.sbn_3',
          prevEl: '.sbp_3',
        },
        spaceBetween: 25,

      });

      const swiper4 = new Swiper('.swiper4', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 4,
        speed: 1200,
        navigation: {
          nextEl: '.sbn_4',
          prevEl: '.sbp_4',
        },
        spaceBetween: 25,

      });

      const swiper5 = new Swiper('.swiper5', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 4,
        speed: 1200,
        navigation: {
          nextEl: '.sbn_5',
          prevEl: '.sbp_5',
        },
        spaceBetween: 25,

      });

      const swiper6 = new Swiper('.swiper6', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 4,
        speed: 1200,
        navigation: {
          nextEl: '.sbn_6',
          prevEl: '.sbp_6',
        },
        spaceBetween: 25,

      });

      const swiper7 = new Swiper('.swiper7', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: true,
        duration: 6000,
        speed: 2000,

      });

      $("#jc_time").flatpickr({
        dateFormat: "l, d F Y",
        defaultDate: "today",
        monthSelectorType: "static"
      });

      var lastScroll1 = 0;
      $(window).on('scroll', function(e){
        var scrollY1 = $(this).scrollTop();
        var offsetbottom1 = $('.article_container_floor2.acf2_2').offset().top + $('.article_container_floor2.acf2_2').outerHeight();

        var rav_2_trigger = $('.hamas_atrocities').offset().top - $(window).height(); 

        if($(window).scrollTop() > rav_2_trigger){
          $('.right_aside_view.rav_2').addClass('sticky_active');
        }

        // if(scrollY1 > lastScroll1 && $(window).scrollTop() < $('.acf2_2').offset().top + 950){
        //   $('.right_aside_view.rav_2').removeClass('sticky_active');
        // }

        if(scrollY1 > lastScroll1 && $(window).scrollTop() < $('.article_container_floor2.acf2_2').offset().top){
          $('.right_aside_view.rav_2').removeClass('sticky_active');
        }

        var rah_1 = $('.article_container_floor2.type2').outerHeight();
        var rah_2 = $('.right_aside.ra_2').outerHeight();

        // if($(window).scrollTop() > $('.article_container_floor3.acf3_2').offset().top - 950){
        //   $('.right_aside_view.rav_2').removeClass('sticky_active');
        //   $('.right_aside.ra_2').css({'margin-top': rah_1 - rah_2 + 'px'});
        // }

        var scroll_Bottom = $(document).height() - $(window).height() - $(window).scrollTop();

        var divOffset = $(".article_container_floor2.acf2_2").offset().top;
        var divHeight = $(".article_container_floor2.acf2_2").outerHeight();
        
        var windowHeight = $(window).outerHeight();
        var scrollTop = $(window).scrollTop();
        
        var trigger_bottom = divOffset + divHeight - (windowHeight + scrollTop);

        // console.log(scroll_Bottom);
        // console.log(trigger_bottom);


        if(trigger_bottom < 0){
          $('.right_aside_view.rav_2').removeClass('sticky_active');
          $('.right_aside.ra_2').css({'margin-top': rah_1 - rah_2 + 'px'});
        }
        
        else{
          $('.right_aside.ra_2').css({'margin-top': 0 + 'px'});
        }

        scrollY1 = lastScroll1;
      });

      $('.mlb_tab_height').each(function(){
        $(this).height(
            $('.mbl_tab_floor1 > li.on').children('.mbl_tabmenu_box').outerHeight() - 3 + 'px'
        );
      });

      $('.mbl_tab_floor1 > li > button').on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.mlb_tab_height').height(
          $('.mbl_tab_floor1 > li.on').children('.mbl_tabmenu_box').outerHeight() - 3 + 'px'
        );
    });

    $('.back_to_top a').on('click', function(e){
      e.preventDefault();
      $(window).scrollTop(0);
    });

});


$(window).on('load', function(){
  var sac_full_article_height = $('.sac_full_article').innerHeight() + 23;
  var left_aside_height = $('.sub_article_box').outerHeight() - sac_full_article_height;

  $('.left_aside_view').css({'margin-top' : sac_full_article_height + 'px'});
  $('.left_aside').css({'height' : left_aside_height + 'px'});
  $('.left_aside_view').css({'height' : left_aside_height + 'px'});
});