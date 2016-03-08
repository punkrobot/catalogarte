function reviewCatalog(action){
  if (action === "approve") {
    var post_data = {
      review_id: reviewId,
      action: action,
      comments: ""
    };
    sendAction(post_data);
  } else {
    bootbox.prompt("¿Cuál es el motivo del rechazo?", function (result) {
      if (result !== null) {
        if(result !== "") {
          var post_data = {
            review_id: reviewId,
            action: action,
            comments: result
          };
          sendAction(post_data);
        } else {
          bootbox.alert("Error. Debes ingresar un motivo.");
        }
      }
    });
  }
}

function sendAction(post_data){
  var actionStr = post_data.action == "approve" ? "aprobar" : "rechazar";
  bootbox.confirm("¿Estás seguro de " + actionStr + " el catálogo?", function(result) {
    if (result) {
      var alerta = $('<div class="alert alert-dismissable alert-message" style="display: none;">');
      alerta.append($('<button type="button" class="close" data-dismiss="alert">&times</button>'));
      alerta.append("Publicando catálogo, por favor espere.");
      alerta.appendTo($('body')).fadeIn(500);

      $.ajax({
        type: "POST",
        url: reviewUrl,
        contentType: "application/json; charset=utf-8",
        data: $.toJSON(post_data),
        success: function(data) {
          location.reload();
        }
      });
    }
  });
}