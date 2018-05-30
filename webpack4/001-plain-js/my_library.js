"use strict";

var MyLibrary = {}
function doSomething() {
  console.log('MyLibrary.doSomething was called');
  document.getElementById("replaceMe").innerText = "MyLibrary.doSomething was called";
}
MyLibrary.doSomething = doSomething;

// no exports, this is plain javascript
