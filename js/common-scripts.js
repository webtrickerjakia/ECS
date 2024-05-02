(function($) {
    $(function() {


            $('#phone-nav').click(function() {
                $('body').toggleClass('nav-expand');
                $('body').toggleClass('navexpand');
                $(this).toggleClass('active');
            });



            //  venue-carousel function 
            if ($('.commercial-item-slider').length) {
                $('.commercial-item-slider').slick({
                    dots: true,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    infinite: true,
                    navigation: false,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
            // End venue-carousel function 
            //  venue-carousel function 
            if ($('.lnd-service-slider-item-inner').length) {
                $('.lnd-service-slider-item-inner').slick({
                    dots: false,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    infinite: true,
                    navigation: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
            // End venue-carousel function 
            //  venue-carousel function 
            if ($('.video-item-wrap').length) {
                $('.video-item-wrap').slick({
                    dots: $('.video-item').length > 2, // Show dots if more than 2 videos
                    arrows: false,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    infinite: false,
                    navigation: false,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
            
            // End venue-carousel function 

            //FAQs Accordion Function
            $(".accordion-item").each(function() {
                var $this = $(this);
                $this.find(" > h5").on("click touch", function() {
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                    if ($this.find(".accordion-text:visible").length) {
                        $(".accordion-item").removeClass("active")
                        $(".accordion-item .accordion-text").slideUp();
                    } else {
                        $this.addClass("active")
                        $(".accordion-item .accordion-text").slideUp();
                        $this.find(" > .accordion-text").slideDown();
                    }
                })
            })

          

// video modal

















        }) // End ready function.


    /* Slick needs no get Reinitialized on window Resize after it was destroyed */
    $(window).on('load resize orientationchange', function() {
        $('.carousel-wrap').each(function() {
            var $carousel = $(this);
            / Initializes a slick carousel only on mobile screens /
            // slick on mobile
            if ($(window).width() > 767) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            } else {
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        prevArrow: $('.billing-solutions-section .prev-btn'),
                        nextArrow: $('.billing-solutions-section .next-btn'),
                    });
                }
            }
        });
    });
    // End the solutin card carousel

    //start header section
    function handleScroll() {
        let prevScrollPos = window.pageYOffset;
        const header = document.getElementById("header-wrap");
        const heroWrap = document.getElementById("hero-wrap");

        window.addEventListener("scroll", () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > heroWrap.offsetTop) {
                header.classList.add("solid-background");
            } else {
                header.classList.remove("solid-background");
            }

            if (prevScrollPos > currentScrollPos) {
                header.style.transform = "translateY(0)";
            } else {
                header.style.transform = "translateY(-100%)";
            }

            prevScrollPos = currentScrollPos;
        });
    }

    handleScroll();

    function toggleMenu() {
        var menuContainer = document.getElementById("header-wrap");
        menuContainer.classList.toggle("active");

        var body = document.body;
        body.classList.toggle("disable-scroll");
    }
    // end header section



})(jQuery)