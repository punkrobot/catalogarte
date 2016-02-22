var page = require('webpage').create();
var system = require('system');

var address = system.args[1];
var file = system.args[2];
var width = system.args[3];
var height = system.args[4];

page.paperSize = {
    width: width+'px',
    height: height+'px',
    border: '0px'
};

page.zoomFactor = 0.51;

page.open(address, function () {
    page.render(file);
    phantom.exit();
});
