
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
    $('.projectName').on('click', function () {
        var target = $(this).data('target');
        $("#" + target).toggle();
        $(".pDetails").not("#" + target).hide();
      
    });

    //projects button 
    $('.tab').on('click', function () {
        // Remove 'active' class from all tabs
        $('.tab').removeClass('active');
    
        // Add 'active' class to the clicked tab
        $(this).addClass('active');
    });
    
    
});

