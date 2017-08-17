var msg = require("./contents.js");
var $ = require('jquery');

require('./message.css');

document.write('<p>hello world from webpack</p>');
console.log("msg is ", msg);
document.write(msg);


var div = document.createElement("div");
div.id="message";
var txtNode = document.createTextNode(msg);
div.appendChild(txtNode);
document.body.appendChild(div);

$(function(){
    $("<div id='message'>")
        .text(msg+"!")
        .appendTo("body");
});
