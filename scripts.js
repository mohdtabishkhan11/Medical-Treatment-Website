$(document).ready(function () {
    $("#patient-slider").owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1000,
        lazyLoad: true,
      
    });

    $("#menu-toggle").click(function () {
        $("#main-menu ul").toggleClass("show");
    });
    $("#navsection-toggle").click(function () {
        $("#sub-section ul").toggleClass("show");
    });

    $(window).on("load", function () {
        $("#page-loader").fadeOut("slow");
    });
});
