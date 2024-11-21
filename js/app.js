
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
            target: '.mix'
        },
        animation: {
            duration: 300
        }
    });
    
    // Add 'active' class to the first tab
    // $('.box_control').on('click', function () {
    //     // Remove 'active' class from all tabs
    //     $('.box_control').removeClass('active');
    
    //     // Add 'active' class to the clicked tab
    //     $(this).addClass('active');
    // })

});




