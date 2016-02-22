function getSoundCloudAudio(url, height, success){
    if(height == null) height = 270;
    var oembed = "https://soundcloud.com/oembed?format=json&maxheight="+height+"&url=" + url;
    $.ajax({
        url: oembed,
        dataType: "json",
        success: success,
        error: function (result) {
            bootbox.alert("Error al cargar audio");
        }
    });
}

function getYouTubeVideo(url, success){
    var oembed = "http://www.youtube.com/oembed?format=json&url=" + url;
    $.ajax({
        url: "http://query.yahooapis.com/v1/public/yql",
        data: {
            q: "select * from json where url ='" + oembed + "'",
            format: "json"
        },
        dataType: "jsonp",
        success: success,
        error: function (result) {
            bootbox.alert("Error al cargar video");
        }
    });
}

function registerHandlebarsHelpers() {
    Handlebars.registerHelper("isEmpty", function(content) {
        if(content == null) return "empty";
        else return "set";
    });
    Handlebars.registerHelper("renderContent", function(content, editable) {
        if(!content) return "";
        if(content.type === "TXT"){
            return Handlebars.templates.content_text({content: content, editable: editable});
        } else if(content.type === "VID"){
            return Handlebars.templates.content_video({content: content, editable: editable});
        } else if(content.type === "AUD"){
            return Handlebars.templates.content_audio({content: content, editable: editable});
        } else if(content.type === "IMGB"){
            return Handlebars.templates.content_imageb({content: content, use_thumbnails: editable});
        } else if(content.type === "IMG"){
            return Handlebars.templates.content_image({content: content, editable: editable});
        }
    });
}
