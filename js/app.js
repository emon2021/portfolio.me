
    //sticky navigation menu
    let navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function (){
        if (window.scrollY > 100) {
            navbar.classList.add('sticky_nav');
        } else {
            navbar.classList.remove('sticky_nav');
        }
    });


// project showing js
$(document).ready(function () {
    //  mixitup 
    let mixer = mixitup('.box_list', {
        selectors: {
            target: '.mix',
            control: '.box_control'
        },
        animation: {
            duration: 300
        }
    });

    // Set default active control dynamically
    $('.box_control').removeClass('mixitup-control-active'); // Remove active from all
    $('[data-filter="*"]').addClass('mixitup-control-active'); // Add active to default
    
    
    //  testimonial
    $('.slick_carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    
});




