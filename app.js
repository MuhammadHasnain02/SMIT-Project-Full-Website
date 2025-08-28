// -----------------<<< Slick Slider Code >>>-----------------
$('.single-item').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 480,  settings: { slidesToShow: 1 } }
    ]
});

// -----------------<<<  >>>-----------------
