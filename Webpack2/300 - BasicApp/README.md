# Basic Application
This application was developed during a Webpack training video I watched.
The video is called Webpack for React Applications was on Safari Online Books.
 https://www.safaribooksonline.com/library/view/webpack-for-react/9781788472203/video2_1.html
 
The author said to use webpack 2.6.1

    yarn add webpack@2.6.1 -D

Other packages are

    yarn add babel-loader babel-preset-es2015 babel-preset-react -D
    yarn add babel-core -D
    yarn add react react-dom
    // The version used was v0.27.5 
    
    
After the basics were working these were installed

    yarn add css-loader -D
    yarn add file-loader -D
    yarn add image-webpack-loader -D

After adding CSS and seeing it not work, he added style-loader

    yarn add style-loader -D

To use SASS the following was needed

    yarn add sass-loader node-sass -D

    yarn add http-server -D

    yarn add html-webpack-plugin -D

# Video shows

## How to setup basic webpack

## How to add React

## How to add CSS

## How to add watching to auto recompile/package

## How to add images

## How to use SASS or CSS

## Adding an HTTP Server to support React-Router
To use SASS the following was needed

    yarn add http-server -D
   
To run it, the package.json file was updated.  The scripts section

## Add HTML Webpack Plugin
This plugin allows you to specify the HTML page that will be served
as the single page app and the plugin with "behind the scenes" add
an "include" for the bundle.js file.

    yarn add html-webpack-plugin -D

See https://github.com/jantimon/html-webpack-plugin.

Next update the webpack.config.js file


 
 

# What my webpack.config.js file looks like



    var webpack = require('webpack');
    var path = require('path');
    
    var BUIILD_DIR = path.join(__dirname, 'dist');
    var APP_DIR = path.join(__dirname, 'src');
    
    // module.exports = {
    //     entry: './src/app.js',
    //     output: {
    //         filename: './dist/app.bundle.js'
    //     }
    // }
    //
    var config = {
        entry: APP_DIR + '/app.js',
        output: {
            path: BUIILD_DIR,
            filename: 'app.bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.(js|jsx)$/,
                    //include: APP_DIR,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: 'file-loader'
                }
            ]
        }
    }
    
    module.exports = config;


    
    
    


 
 