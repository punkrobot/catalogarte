var docWidth = $('body').innerWidth();
var docHeight = $('body').innerHeight() - 60;
var isMobile = docWidth < 600;

$(function() {
    registerHandlebarsHelpers();
    renderCatalog();
    initFrames();
    initImageModals();
    initVideoModals();
    loadAudios();
});

function renderCatalog() {
    $(".slidee").html("");

    $.each(catalog.pages, function (i, page) {
        var prefix = isMobile ? "mobile_" : "desktop_";
        var html = Handlebars.templates[prefix + page.template](page);
        $(".slidee").append(html);
    });

    var width = isMobile || docWidth < catalog.width ? docWidth : catalog.width;
    var height = isMobile || docHeight < catalog.height ? docHeight : catalog.height;
    $(".item").css({"width": width + "px", "height": height + "px"});

    if (docHeight > catalog.height) {
        var paddingTop = (docHeight - catalog.height) / 2;
        $(".slidee").css({"paddingTop": paddingTop + "px"});
    }
}

function shareOnFacebook(){
    FB.ui({
        method: 'share',
        href: document.location.href
    }, function(response){});
}

function initFrames(){
    var options = {
        horizontal: 1,
        itemNav: "forceCentered",
        activateMiddle: true,
        speed: 300,
        scrollBy: 1,
        touchDragging: true,
        mouseDragging: true,
        scrollBar: ".scrollbar",
        dragHandle: true,
        clickBar: true
    };

    var frame = new Sly(".frame", options);
    frame.on("active", function(eventName, itemIndex){
        var page = getPage(this.items[this.rel.activeItem].el.id);
        if(page != null && page.title != null && page.title !== ""){
            $('.contents a.navbar-brand').html(page.title + "<span class='caret'></span>");
        }
    });
    frame.init();

    $.each(catalog.pages, function(i, page) {
        if(page.title != ""){
            var a = $("<a>", { html: page.title, "data-page-id": page.id });
            a.on("click", function(e) {
                var pageId = $(e.target).data("pageId");
                frame.toCenter($("#"+pageId), false);
            });

            $(".contents ul").append($("<li>").append(a));
        }
    });
}

function initImageModals(){
    $(".image img, .content .background").click(function() {
        var img = $(this), url = "";
        if(img.hasClass("background")){
            url = /^url\((['"]?)(.*)\1\)$/.exec(img.css("background-image"));
            url = url ? url[2] : '';
        } else {
            url = img.attr("src");
        }

        $.magnificPopup.open({
            items: { src: url },
            type: "image",
            mainClass: "mfp-no-margins mfp-with-zoom",
            closeOnContentClick: true,
            zoom: {
                enabled: true,
                duration: 300,
                easing: "ease-in-out",
                opener: function(openerElement) {
                    return img;
                }
            }
        }, 0);
    });
}

function initVideoModals(){
    $(".content>a[data-local='false']").magnificPopup({
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $(".content>a[data-local='true']").magnificPopup({
        type:'inline',
        mainClass: 'full-screen',
        callbacks: {
            open: function () {
                var video = $(this.content[0]).find("video");
                var options = {};
                if(isMobile){
                    options = {defaultVideoWidth:docWidth, enableAutosize: false};
                    video.width(docWidth);
                }
                player = new MediaElementPlayer(video[0], options);
            },
            close: function() {
                player.pause();
            }
        }
    });
}

function loadAudios(){
    $(".audio[data-local='false']").each(function() {
        var audio = $(this);
        if(!audio.data("local")) {
            getSoundCloudAudio(audio.data("url"), audio.height(), function(data) {
                audio.html(data.html);
            });
        }
    });
    $("audio").each(function() {
        new MediaElementPlayer(this);
    });
}

function getPage(id){
    return $(catalog.pages).filter(function(i){ return catalog.pages[i].id === id; })[0];
}