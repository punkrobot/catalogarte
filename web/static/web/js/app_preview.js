function showDesktop(){
    docWidth = $('body').innerWidth();
    docHeight = $('body').innerHeight() - 60;
    isMobile = false;

    $("#device-switcher").html("Computadoras de escritorio <span class='caret'></span>");
    $(".catalog").removeClass("phone center-block");

    var frame = $(".frame");
    frame.height("100%").width("100%");
    $(".scrollbar").width("100%");

    renderCatalog();
    frame.sly('reload');
}

function showMobile(){
    docWidth = 350;
    docHeight = 515;
    isMobile = true;

    $("#device-switcher").html("Dispositivos móviles <span class='caret'></span>");
    $(".catalog").addClass("phone center-block");

    var frame = $(".frame");
    frame.height("515px").width("345px");
    $(".scrollbar").width("345px");

    renderCatalog();
    frame.sly('reload');

    $(".slidee").css({"paddingTop": 0});
}