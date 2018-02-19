

var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

// Array of packages we want to be putting in the vendor bundle.
const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router-dom'
]

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
    // entry: APP_DIR + '/app.js',
    entry: {
        bundle: APP_DIR + '/app.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: BUIILD_DIR,
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
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
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ template: 'src/index.html'}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest' ]
        })
    ],
}

module.exports = config;
