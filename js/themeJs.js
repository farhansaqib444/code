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
    $(".owl-carousel.with-three").owlCarousel({
        loop:true,
        margin:25,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
                nav: true,
            },
            1024:{
                items:3,
                nav: true,
            },
            1200:{
                items:3,
                nav: true,
            }
        }
    });
});

$(document).ready(function(){
    $(".owl-carousel.trips-owl").owlCarousel({
        loop:true,
        margin:25,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
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


$(document).ready(function(){
    $(".country-owl.owl-carousel").owlCarousel({
        nav: true,
        loop:true,
        dots: false,
        margin:25,
        responsive:{
            0:{
                items:1,
            },
        }
    });
});


$(".readmore-link").click( function(e) {
    // record if our text is expanded
    var isExpanded =  $(e.target).hasClass("expand");

    //close all open paragraphs
    $(".readmore.expand").removeClass("expand");
    $(".readmore-link.expand").removeClass("expand");

    // if target wasn't expand, then expand it
    if (!isExpanded){
        $( e.target ).parent( ".readmore" ).addClass( "expand" );
        $(e.target).addClass("expand");
    }
});

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// video grid
$('#modal1').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal6').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
});
