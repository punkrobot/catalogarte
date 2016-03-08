$(function() {
    $(".filter").on("change", search);
    $("#search_btn").on("click", search);

    var q = $.urlParam('q');
    if (q && q !== ""){
        $("#search").val(q);
        search();
    }

    var category = $.urlParam('categoria');
    if (category && category !== ""){
        $("#filter_cat").val(category);
        search();
    }
});

function search() {
    $(".exhibitions").stop().fadeOut("fast", function(){
        $("#loading").stop().fadeIn("slow");
    });

    var query = {
        "category": $("#filter_cat").val(),
        "tag": $("#filter_labels").val(),
        "museum": $("#filter_museums").val(),
        "search": $("#search").val()
    };

    $.ajax({
        type: "GET",
        url: searchUrl,
        contentType: "text/html; charset=utf-8",
        data: query,
        success: function(data) {
            if(trim1(data) === ""){
                $(".exhibitions").html("<span class='empty-message center-block text-center'>No se encontraron catálogos con los términos ingresados.</span>");
            } else {
                $(".exhibitions").html(data);
            }
            $("#loading").stop().fadeOut("fast", function(){
                $(".exhibitions").stop().fadeIn("slow");
            });
        }
    });
};

function trim1 (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

$.urlParam = function(name, url) {
    if (!url) {
     url = window.location.href;
    }
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) {
        return undefined;
    }
    return results[1] || undefined;
}