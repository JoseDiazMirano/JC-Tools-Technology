var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    autoplay: true,
    infinite:true,
    autoplaySpeed: 3900,
    cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  responsive: [
        {
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ],
    loop: true,
});
