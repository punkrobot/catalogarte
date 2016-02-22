$(function() {
    $(".filter").on("change", search);
    $("#search_btn").on("click", search);
});

function search(e) {
    e.preventDefault();

    $("#container").stop().fadeOut("fast", function(){
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
                $("#container").html("<span class='empty-message center-block text-center'>No se encontraron catálogos con los términos ingresados.</span>");
            } else {
                $("#container").html(data);
            }
            $("#loading").stop().fadeOut("fast", function(){
                $("#container").stop().fadeIn("slow");
            });
        }
    });
};

function trim1 (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
