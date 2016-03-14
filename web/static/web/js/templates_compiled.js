(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['content_audio'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "data-url=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.url : stack1), depth0))
    + "\"";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" width=\"100%\"></audio>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"audio\"\r\n     style=\"background:url('"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.thumbnail : stack1), depth0))
    + "');\"\r\n     "
    + ((stack1 = helpers.unless.call(alias3,(depth0 != null ? depth0.editable : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n     data-local=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.local_file : stack1), depth0))
    + "\" >\r\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.local_file : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"footer\">\r\n  <i class=\"fa fa-music\"></i> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.title : stack1), depth0))
    + "\r\n</div>";
},"useData":true});
templates['content_image'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.thumbnail : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.url : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <span class=\"image-footer\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.footer_right : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " >"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.title : stack1), depth0)) != null ? stack1 : "")
    + "</span>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " style=\"float:right;\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"image\" style=\"top:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.y : stack1), depth0))
    + "px;left:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.x : stack1), depth0))
    + "px;position:relative;\">\r\n  <img src=\""
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\"\r\n       width=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.width : stack1), depth0))
    + "\" height=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.height : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['content_imageb'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.thumbnail : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.url : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"background\"\r\n     style=\"background-image:url('"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.use_thumbnails : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "');\r\n            background-position:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.x : stack1), depth0))
    + "px "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.y : stack1), depth0))
    + "px;\">\r\n</div>";
},"useData":true});
templates['content_text'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "contenteditable=\"true\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"text\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n  "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.html : stack1), depth0)) != null ? stack1 : "")
    + "\r\n</div>";
},"useData":true});
templates['content_video'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <a "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.local_file : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "     data-local=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.local_file : stack1), depth0))
    + "\">\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n        href=\"#"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.id : stack1), depth0))
    + "_video\"\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.url : stack1), depth0))
    + "\"\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "  </a>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.local_file : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.id : stack1), depth0))
    + "_video\" class=\"mfp-hide\">\r\n      <video src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" preload=\"none\"></video>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"video\" style=\"background:url('"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.thumbnail : stack1), depth0))
    + "');\"></div>\r\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"footer\">\r\n  <i class=\"fa fa-video-camera\"></i> "
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.title : stack1), depth0))
    + "\r\n</div>\r\n\r\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['desktop_layout01'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>";
},"useData":true});
templates['desktop_layout02'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout03'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout04'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n       <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout05'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout06'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-8\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout07'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-8\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout08'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout09'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout10'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout11'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['desktop_layout12'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['layout01'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-12\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout02'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout03'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content3\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout04'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n       <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-12\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout05'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-12\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout06'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-8\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout07'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-8\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout08'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content3\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout09'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content3\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-6\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content4\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout10'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h100\">\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content3\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout11'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content3\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content4\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['layout12'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"page\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content1\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content2\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"c col-xs-4\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content3\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "_content4\" class=\"content "
    + alias4((helpers.isEmpty || (depth0 && depth0.isEmpty) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),{"name":"isEmpty","hash":{},"data":data}))
    + "\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),true,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['mobile_layout01'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>";
},"useData":true});
templates['mobile_layout02'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['mobile_layout03'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['mobile_layout04'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['mobile_layout05'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['mobile_layout06'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['mobile_layout07'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['mobile_layout08'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['mobile_layout09'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h50\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n";
},"useData":true});
templates['mobile_layout10'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>";
},"useData":true});
templates['mobile_layout11'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>";
},"useData":true});
templates['mobile_layout12'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content1 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"content\">\r\n    "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content2 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</li>\r\n<li class=\"item\" style=\"padding:"
    + alias4(((helper = (helper = helpers.padding || (depth0 != null ? depth0.padding : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"padding","hash":{},"data":data}) : helper)))
    + "px\">\r\n  <div class=\"r h75\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content3 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"r h25\">\r\n    <div class=\"c col-xs-12\">\r\n      <div class=\"content\">\r\n        "
    + ((stack1 = (helpers.renderContent || (depth0 && depth0.renderContent) || alias2).call(alias1,(depth0 != null ? depth0.content4 : depth0),false,{"name":"renderContent","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</li>";
},"useData":true});
templates['template_selection'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-md-3\">\r\n    <label for=\"sel-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n        "
    + ((stack1 = ((helper = (helper = helpers.template || (depth0 != null ? depth0.template : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"template","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n    </label>\r\n    <input class=\"layout-radio\" type=\"radio\" name=\"layout-sel\" id=\"sel-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n</div>\r\n";
},"useData":true});
})();
