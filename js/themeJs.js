$(function() {
    //toggle class open on button
    $('#navbar-custom').on('hide.bs.collapse', function () {
        $('.navbar-toggler').removeClass('open');
    })
    $('#navbar-custom').on('show.bs.collapse', function () {
        $('.navbar-toggler').addClass('open');
    })
});
