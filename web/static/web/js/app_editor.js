$(function() {
    registerHandlebarsHelpers();
    renderTemplates();
    initMultimediaModal();
    initMultimediaToolbar();
    initPropertiesToolbar();
    restartMultimediaModal();

    if(catalog.num_pages > 0){
        render();
    }
});

function addPage(){
    var layout = $("input[type=radio]:checked").val();
    var page = {
        id: "page"+catalog.next_id++,
        title: "Página " + (++catalog.num_pages),
        padding: 15,
        template: layout
    };
    catalog.pages.push(page);

    render();
}

function deletePage(e){
    bootbox.confirm("¿Estás seguro de borrar la página?", function(result) {
        if(result){
            $.each(catalog.pages, function(i, p) {
                if(catalog.pages[i].id === e.data.id){
                    catalog.pages.splice(i, 1);
                    catalog.num_pages--;
                    return false;
                }
            });

            render();
        }
    });
}

function sortPages(){
    var num_pages = [];
    $("#toolbar-document li").each(function(){
        num_pages.push($(this).find("a").attr("href").replace("#", ""));
    });

    var sorted = [];

    num_pages.forEach(function(key) {
        var found = false;
        catalog.pages = catalog.pages.filter(function(item) {
            if(!found && item.id == key) {
                sorted.push(item);
                found = true;
                return false;
            } else
                return true;
        });
    });
    catalog.pages = sorted;
}

function showCatalogProperties(){
    $("#page-width").val(catalog.width);
    $("#page-height").val(catalog.height);
    $("#catalogPropertiesModal").modal('show');
}

function saveCatalogProperties(){
    catalog.width = $("#page-width").val();
    catalog.height = $("#page-height").val();

    render();
}

function showPageProperties(e){
    var id = $(e.target).parent().attr('href').replace("#", "");
    var page = getPage(id);

    $("#page-title").val(page.title);
    $("#page-padding").val(page.padding);
    $("#save-page-properties").off("click").click({id: id}, savePageProperties);
    $("#delete-page-button").off("click").click({id: id}, deletePage);
    $("#pagePropertiesModal").modal('show');
}

function savePageProperties(e){
    var page = getPage(e.data.id);

    page.padding = $("#page-padding").val();
    page.title = $("#page-title").val();

    catalog.pages.sort(function (a, b){
        return ((a.number < b.number) ? -1 : ((a.number > b.number) ? 1 : 0));
    });

    render();
}

function saveCatalog(){
    var loading = $("#save-button").find("i.fa-spin");
    loading.show();

    $.ajax({
        type: 'POST',
        url: catalogSaveUrl,
        contentType: 'application/json; charset=utf-8',
        data: $.toJSON(catalog),
        dataType: 'text',
        success: function (data) {
            loading.hide();
            var alerta = $('<div class="alert alert-dismissable alert-message" style="display: none;">');
            alerta.append($('<button type="button" class="close" data-dismiss="alert">&times</button>'));
            alerta.append("Catálogo guardado correctamente");
            alerta.appendTo($('body')).fadeIn(500).delay(2000).fadeOut(500);
        },
        error: function(data) {
            console.log("Error");
        }
    });
}


function exportCatalog(){
    var loading = $("#export-button").find("i.fa-spin");
    loading.show();

    $.ajax({
        type: 'GET',
        url: catalogExportUrl,
        dataType: 'json',
        success: function (data) {
            loading.hide();
            bootbox.dialog({
                title: "Exportar PDF",
                message: '<iframe style="width:100%;height:500px;" src="'+ data.file +'"/>',
                size: 'large'
            });
        },
        error: function(data) {
            console.log("Error");
        }
    });
}

function render(){
    var document = $("#catalog").empty();
    var documentToolbar = $("#toolbar-document").find("ul").empty();

    $.each(catalog.pages, function(i, page) {
        var template = Handlebars.templates[page.template];
        var $page = $(template(page)).height(catalog.height).width(catalog.width);
        document.append($page);
        var li = $("<li>", {class: catalog.num_pages == 0 ? 'active' : ''}).data("src", "#" + page.id)
            .append($("<a>", {href: "#" + page.id, html: page.title})
            .append($("<i>", {class:"fa fa-bars pull-left drag-handle"}))
            .append($("<i>", {class:"fa fa-pencil pull-right", "click": showPageProperties})));
        documentToolbar.append(li);
    });

    $("#catalog").width(catalog.width);

    $('body').scrollspy("refresh");

    $("#catalog .empty").droppable({
        hoverClass: "drop-active",
        accept: ".thumb",
        drop: addMediaToCatalog
    }).html($("<i>", {class: "fa fa-edit fa-2x edit", click: addTextContent}));

    $(".text").each(function () {
        var editor = CKEDITOR.inline(this, ckeditorConfigs.default);
        editor.on('change', function(e){
            var ids = $(e.editor.element.$).parent().attr("id").split("_");
            getContent(ids).html = e.editor.getData();
        });
    });

    $(".background").backgroundDraggable({done: setBackgroundPosition});
    $(".image").draggable({containment: "parent", helper: "original", start: setActiveContent, stop: setImagePosition});
    $(".set").unbind().on('click', showContentProperties);

    if(selectedContent){
        $("#"+selectedContent.id).click();
    }

    $("#sortable").sortable({
        stop: function(event, ui) {
            sortPages();
            render();
        }
    });

    $("#sortable").disableSelection();
}

function showContentProperties() {
    if($(this).is(".ui-draggable-dragging")) return;

    var content = getContent($(this).attr('id').split("_"));
    selectedContent = content;

    $(".content").removeClass("active");
    $(this).addClass("active");

    $(".toolbar.content-properties").show();
    $(".toolbar.document").hide();

    var title = $("#content-type-title");
    if(content.type === "IMGB"){
        title.html("Imagen de fondo");
        $("#expand-checkbox").prop("checked", true);

    } else if(content.type === "IMG"){
        title.html("Imagen");
        $("#expand-checkbox").prop("checked", false);
        if(content.footer_right){
            $("#footer-checkbox").prop("checked", true);
        } else {
            $("#footer-checkbox").prop("checked", false);
        }

    } else if(content.type === "VID"){
        title.html("Video");

    } else if(content.type == "AUD"){
        title.html("Audio");

    } else if(content.type == "TXT"){
        title.html("Texto");
    }

    if(content.type === "IMG" || content.type === "IMGB") {
        $("#image-expand-container").show();
        if(content.type === "IMG"){
            $("#image-footer-container").show();
            $("#slider-container").show();
            if(content.title != "" ){
                $("#footer-position-container").show();
            } else {
                $("#footer-position-container").hide();
            }
        } else {
            $("#image-footer-container").hide();
            $("#footer-position-container").hide();
            $("#slider-container").hide();
        }
    } else {
        $("#image-expand-container").hide();
        $("#image-footer-container").hide();
        $("#footer-position-container").hide();
        $("#slider-container").hide();
    }

}

function expandImage(){
    if(selectedContent == null) return;

    if($("#expand-checkbox").prop('checked')){
        selectedContent.type = "IMGB";
        delete selectedContent.height;
        delete selectedContent.width;
    } else {
        selectedContent.type = "IMG";

        var selectedContentElement = $("#"+selectedContent.id);
        selectedContent.width = selectedContentElement.width()+"px";
        selectedContent.height = "auto";
    }

    selectedContent.x = selectedContent.y = 0;

    render();
}

function deleteContent(){
    if(selectedContent == null) return;

    bootbox.confirm("¿Estás seguro de borrar el contenido seleccionado?", function(result) {
        if(result){
            var ids = selectedContent.id.split("_");
            var page = getPage(ids[0]);
            delete page[ids[1]];

            $('.toolbar.content-properties').hide();
            $('.toolbar.document').show();

            render();
        }
    });
}

function editImageFooter(){
    if(selectedContent == null) return;

    CKEDITOR.instances.imageFooter.setData(selectedContent.title);

    $("#imageFooterModal").modal("show");
}

function saveImageFooter(){
    if(selectedContent == null) return;

    selectedContent.title = CKEDITOR.instances.imageFooter.getData();
    selectedContent.footer_right = false;

    CKEDITOR.instances.imageFooter.setData("");

    render();
}

function changeFooterLocation(){
    if(selectedContent == null) return;

    if($("#footer-checkbox").prop('checked')){
        selectedContent.footer_right = true;
    } else {
        selectedContent.footer_right = false;
    }

    render();
}

function setActiveContent(e, ui){
    var selectedContentElement = e.type === "dragstart" ? ui.helper.parent() : ui.element.parent().parent();
    selectedContent = getContent(selectedContentElement.attr('id').split("_"));
    $(".content").removeClass("active");
    selectedContentElement.addClass("active");
}

function setImagePosition(e, ui){
    selectedContent.x = ui.position.left;
    selectedContent.y = ui.position.top;
}

function restartMultimediaModal() {
    $("#videoLoadBtn, #audioLoadBtn").show();
    $("#multimediaModal .fa-spin, #videoInsertBtn, #audioInsertBtn").hide();
    $("#videoPreview, #audioPreview").empty();
    $("#imageLoadBtn, #videoLoadBtn, #audioLoadBtn").button("reset");
    $("#imageUploader").fineUploader('reset');
    $("#videoUploader").fineUploader('reset');
    $("#audioUploader").fineUploader('reset');
}

function updateMultimediaToolbar(data){
    $("#multimediaToolbar").html(data);
    $('#multimediaModal').modal('hide');

    initMultimediaToolbar();
}

function initMultimediaToolbar(){
    $(".draggable").draggable({ opacity: 0.8, helper: "clone", appendTo:'body' });
    $(".thumb-video, .thumb-audio").tooltip({container: 'body'});
}

function initMultimediaModal(){
    var request = {
        endpoint: mediaUploadUrl,
        forceMultipart: false,
        paramsInBody: false,
        customHeaders: {
            "X-CSRFToken": $("input[name='csrfmiddlewaretoken']").val()
        }
    };

    $("#imageUploader").fineUploader({
        request: request,
        form: { element: 'form-image-upload' },
        validation: { allowedExtensions: ["png","jpg","jpeg","gif"] }
    }).on("complete", loadMultimedia).on("upload", function(){
        $("#imageLoadBtn").button("loading");
    });

    $("#videoUploader").fineUploader({
        request: request,
        multiple: false,
        form: { element: 'form-video-upload' },
        validation: { allowedExtensions: ["mp4"] }
    }).on("complete", loadMultimedia).on("upload", function(){
        $("#videoLoadBtn").button("loading");
    });

    $("#audioUploader").fineUploader({
        request: request,
        multiple: false,
        form:{element: 'form-audio-upload'},
        validation: { allowedExtensions: ["mp3"] }
    }).on("complete", loadMultimedia).on("upload", function(){
        $("#audioLoadBtn").button("loading");
    });

    $("#multimediaModal").on("hidden.bs.modal", restartMultimediaModal);
}

function initPropertiesToolbar(){
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.replace("imageFooter", ckeditorConfigs.default);

    $("body").scrollspy({ target: "#toolbar-document", offset: 150 });

    selectedContent = null;
    $(document).on("click", function(e) {
        if(!$(e.target).closest(".toolbar.content-properties").length && !$(e.target).closest(".content").length &&
            !$(e.target).closest(".modal").length && !$(e.target).closest(".cke").length) {
            $(".content").removeClass('active');
            $(".toolbar.content-properties").hide();
            $(".toolbar.document").show();
            selectedContent = null;
        }
    });

    $("#slider").slider({ step: 10, min: 100, max: catalog.width, value: catalog.width / 2,
        slide: function(event, ui) {
            if(selectedContent.type = "IMG"){
                var img = $("#"+selectedContent.id).find('img');
                var ratio = img.width() / img.height();

                img.attr('width', ui.value);
                img.attr('height', ui.value / ratio);

                selectedContent.height = img.height();
                selectedContent.width = img.width();
            }
        }
    });
}

function loadMultimedia(event, id, name, response) {
    if(response.success) {
        $.ajax({
            type: "GET",
            url: mediaUrl,
            contentType: "text/html; charset=utf-8",
            success: function (data) {
                updateMultimediaToolbar(data);
            }
        });
    }
}

function addMultimediaResource(media){
    $.ajax({
        type: "POST",
        url: mediaUrl,
        contentType: "application/json; charset=utf-8",
        data: $.toJSON(media),
        success: function(data) {
            updateMultimediaToolbar(data);
        }
    });
}

function addVideo(){
    var videoPreview = $("#videoPreview");
    addMultimediaResource({
        name : videoPreview.data('title'),
        thumbnail : videoPreview.data('thumbnail'),
        category : 'VID',
        external_url : videoPreview.data('url'),
        html : videoPreview.data('html')
    });
}

function addAudio(){
    var audioPreview = $("#audioPreview");
    addMultimediaResource({
        name : audioPreview.data('title'),
        thumbnail : audioPreview.data('thumbnail'),
        category : 'AUD',
        external_url : audioPreview.data('url'),
        html : audioPreview.data('html')
    });
}


function loadAudio(){
    var url = $("#audioUrlInput").val();
    if(url == ""){
        $("#audioUrlInputForm").addClass("has-error");
    } else {
        $("#audioUrlInputForm").removeClass("has-error");
        $("#audioLoadBtn").hide();
        $("#soundcloud").find("i").show();

        getSoundCloudAudio(url, null, function (data) {
            $("#soundcloud").find("i").hide();
            var audioPreview = $("#audioPreview");
            audioPreview.data("url", url);
            audioPreview.data("title", data.title);
            audioPreview.data("thumbnail", data.thumbnail_url);
            audioPreview.html(data.html);
            $("#audioInsertBtn, #audioPreview").show();
        });
    }
}

function loadVideo(){
    var url = $("#videoUrlInput").val();
    if(url == ""){
        $("#videoUrlInputForm").addClass("has-error");
    } else {
        $("#videoUrlInputForm").removeClass("has-error");
        $("#videoLoadBtn").hide();
        $("#youtube").find("i").show();

        getYouTubeVideo(url, function (data) {
            $("#youtube").find("i").hide();
            var videoPreview = $("#videoPreview");
            videoPreview.data("url", "https://www.youtube.com/watch?v="+url.split("v=")[1].substring(0, 11));
            videoPreview.data("title", data.query.results.json.title);
            videoPreview.data("thumbnail", data.query.results.json.thumbnail_url);
            videoPreview.html(data.query.results.json.html);
            $("#videoPreview, #videoInsertBtn").show();
        });
    }
}

function setBackgroundPosition(el, x, y) {
    var content = getContent(el.parent().attr('id').split("_"));
    content.x = x;
    content.y = y;
}

function addMediaToCatalog(event, ui) {
    var ids = $(event.target).attr('id').split("_");
    var page = getPage(ids[0]);
    var contentId = ids[1];
    var type = $(ui.draggable).hasClass("thumb-video") ? "VID" :
               $(ui.draggable).hasClass("thumb-audio") ? "AUD" : "IMGB";

    page[contentId] = {
        type: type,
        id: $(event.target).attr('id'),
        url: $(ui.draggable).data("url"),
        thumbnail: $(ui.draggable).data("thumbnail")
    };

    if(type === "IMGB") {
        page[contentId].x = 0;
        page[contentId].y = 0;
    } else {
        page[contentId].local_file = $(ui.draggable).data("local-file") === "True";
        page[contentId].title = $(ui.draggable).data("original-title");
    }

    render();
}

function deleteMedia(id){
    bootbox.confirm("¿Estás seguro de borrar el contenido seleccionado?", function(result) {
        if(result){
            var url = "/admin/" + slug + "/media/delete/" + id;
            $.ajax({
                type: "DELETE",
                url: url,
                contentType: "text/html; charset=utf-8",
                success: function (data) {
                    updateMultimediaToolbar(data);
                }
            });
        }
    });
}

function addTextContent(e){
    var ids = $(e.target).parent().attr("id").split("_");
    var page = getPage(ids[0]);
    page[ids[1]] = {
        type: "TXT",
        id: $(e.target).parent().attr("id"),
        html: "<p>Clic para editar el texto</p>"
    };

    render();
}

function renderTemplates() {
    $.each(Handlebars.templates, function(i, fn) {
        if (i.indexOf('layout') === 0) {
            var selection = Handlebars.templates.template_selection({template:fn(), id:i});
            $("#templatesContainer").append(selection);
        }
    });
}

function getPage(id){
    return $(catalog.pages).filter(function(i){ return catalog.pages[i].id === id; })[0];
}

function getContent(ids){
    return getPage(ids[0])[ids[1]];
}

function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", $("input[name='csrfmiddlewaretoken']").val());
        }
    }
});
