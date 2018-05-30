# Webpack Hello

The purpose of this example is to show how webpack works
with AMD using a simple webpage.

Based on tutorial at https://channel9.msdn.com/Shows/Tech-Crumbs/Webpack-tutorial-for-beginners



## Pre-requisits / Setup
Do things things
- Install webpack globally

```
npm install -g webpack webpack-cli
webpack --version    # outputs 4.10.2
```

# To run this

- Run webpack as follows

    webpack --mode development
    serve -l 8080 .
    firefox http://localhost:8080

NOTE: We don't even have a package.json file.

NOTE: The console shows an error, but the tutorial didn't address this error
so I ignored it.  The example ran anyway which is puzzling.
[!(images/wiring-is-not-defined.png)[images/wiring-is-not-defined.png]]

