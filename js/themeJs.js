$(function() {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

});

$('.carousel').carousel({

}) ;

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
    $(".owl-carousel.padding-spacing").owlCarousel({
        loop:true,
        margin:25,
        responsive:{
            0:{
                stagePadding: 50,
            },
            600:{
                nav: true,
                stagePadding: 50,
            },
            1024:{
                nav: true,
                stagePadding: 50,
            },
            1200:{
                nav: true,
                stagePadding: 50,
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


$('.carousel.single-img').carousel({
    interval: 8000,
    wrap: true,
    keyboard: true
});

// video icon

$('.video-icon').parent().click(function () {
    if($(this).children(".video-icon").get(0).paused){
        $(this).children(".video-icon").get(0).play();
        $(this).children(".playpause-icon").fadeOut();
    }else{
        $(this).children(".video-icon").get(0).pause();
        $(this).children(".playpause-icon").fadeIn();
    }
});


// show password icon

$(".reveal").on('click',function() {
    var $pwd = $(".pwd");
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
    } else {
        $pwd.attr('type', 'password');
    }
});


$(document).ready(function() {

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    };

    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });
});
// https://codepen.io/gdev/pen/bKdjpa
