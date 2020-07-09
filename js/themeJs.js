$(function() {
    //toggle class open on button
    $('#navbar-custom').on('hide.bs.collapse', function () {
        $('.navbar-toggler').removeClass('open');
    })
    $('#navbar-custom').on('show.bs.collapse', function () {
        $('.navbar-toggler').addClass('open');
    })
});


$(document).ready(function(){
    $(".owl-carousel.trips-owl").owlCarousel({
        loop:true,
        margin:25,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
                nav: true,
            },
            1024:{
                items:3,
                nav: true,
            },
            1200:{
                items:4,
                nav: true,
            }
        }
    });
});
