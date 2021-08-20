$(function () {

  $('.button-burger').on('click', function () {
    $('.header-top__menu-list').toggleClass('header-top__menu-list--active');
  });


  $('.filter__content-btn').on('click', function () {
    $('.filter__content').toggleClass('filter__content--active');
  });


  $('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    fade: true,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/icons/arrow-slider-header.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 921,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 661,
        settings: {
          arrows: false,
          dots: false,
        }
      },
    ]
  });


  $('.select-style').styler();


  $('.testimonials__slider').slick({
    infinite: false,
    // fade: true,
    slidesToShow: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 0.999998" stroke="#1A0A03" stroke- width="2" stroke - linecap="round" stroke - linejoin="round"/></svg ></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L0.999999 9L9 17" stroke="#1A0A03" stroke- width="2" stroke - linecap="round" stroke - linejoin="round"/></svg ></button>',
    responsive: [
      {
        breakpoint: 861,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          dots: false,
        }
      },
    ]
  });

  $('.gallary-tab__item').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('gallary-tab__item--active');

    $($(this).closest('.gallary-tab').siblings().find('div')).removeClass('gallary-tab__content--active');

    $(this).addClass('gallary-tab__item--active');

    $($(this).attr('href')).addClass('gallary-tab__content--active');

    $('.slick-slider').slick('setPosition');
  })

  

  $('.gallary-tab__content-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 0.999998" stroke="#1A0A03" stroke- width="2" stroke - linecap="round" stroke - linejoin="round"/></svg ></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L0.999999 9L9 17" stroke="#1A0A03" stroke- width="2" stroke - linecap="round" stroke - linejoin="round"/></svg ></button>',
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 661,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
    ]
  });

})