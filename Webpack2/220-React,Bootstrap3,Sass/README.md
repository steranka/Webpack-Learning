# React, Bootstrap3, and SASS

This is (for me) a full blown React application that uses Bootstrap
and SASS, has images, and requires webpack to support SASS, ES6 syntax transpiling
This is ONLY the client side code. Webpack isn't used or needed
for NodeJS code (AFAIK).

But if there were server-side (NodeJS) code under this directory
I would have the following

- src/client - Client side only code
- src/server - Server side (NodeJS) only code.
- src/shared - Utility code that can be used on the client or server
that doesn't required Node, nor a browser for it to work.

This sample, however, is ONLY client side code.

But also support non-bundling files that need to just be copied to the 
destination website directory.

The approach is as follows:

- Developers put all their source in the src directory
- By default, the entry point is app.js
- Subdirectories are used to hold components and the names can vary depending on the project's needs.
- I typically name JSX files with *.jsx extention.
- I typically like to include .jsx when I import.  It makes finding all of the files that reference a filename easier
- SCSS files are converted to normal CSS files and can be directly included
in any *.js file.

To compile and run the application for development use.

    npm start
    
This starts a browser on localhost:3000.

The webpack configuration file 
