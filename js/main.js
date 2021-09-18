$(document).ready(function() {
    $(".menu-toggler").click(function() {
        $("body , .home , .tow-sections , .tow-sections , .navbar ul li a , .navbar .menu-toggler").toggleClass("active");
    });
    $(window).resize(function() {
        let x = $(document).innerWidth();
        if (x < 991.98) {
            $("body , .home , .tow-sections , .tow-sections , .navbar ul li a , .navbar .menu-toggler").removeClass("active");
        }
    });
});