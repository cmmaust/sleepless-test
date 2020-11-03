( () => {
  // Initiate our carousels and its options.
  const swiper = new Swiper( '.carousel', {
    slidesPerView: 1,
    spaceBetween: 40,

    navigation: {
      nextEl: '.carousel__nav--next',
      prevEl: '.carousel__nav--prev'
    },

    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1040: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  } );


  const heroSwipe = new Swiper( '.hero__carousel', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
      disableOnInteraction: false,
    },
  } );
} )();
