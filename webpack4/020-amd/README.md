# Hello world like example for AMD

## To run this

Simply open a browser to the file.  No webserver is needed
but if you want you could open the file with a webserver
and it will also work.

    firefox ./index.html

## Description
The purpose of this example is to show how AMD modules work.
See other resources for an explanation.

This example has two modules actually three.
- math.js - has math code sum()
- app.js - this is the main application, it is loaded by html
- ES.js - This is another module 

The require.js library was downloaded and placed in the directory
- lib/require.js
It can be downloaded using the URL [http://requirejs.org/docs/download.html](http://requirejs.org/docs/download.html)

In this example, index.html < script > includes lib/app.js.

lib/app.js is the main program.  It registers the callback
on the button.  It also depends on the ES.js module.

lib/ES.js - this is a helper module added to show multiple modules.
It defines updateSum() which reaches into the DOM and pulls out
two numbers.  It also codes math.sum() to get the sum of the
two numbers on the screen.

