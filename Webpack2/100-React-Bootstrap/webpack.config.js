// James Collin - Please create this file to do the following:
// Transpile the ReactJS code in src to the dist directory.
// The example should support HotModuleReloading, React JSX syntax, use of ES6 syntax,
// and this syntax
//     let state = { ...state, 'update1': true, 'update2': 'yes' }



// BELOW IS WHAT I STARTED WITH and MAY OR MAY NOT BE USEFUL
//
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//     entry: "./src/app.js",
//     output: {
//         path: __dirname +  "/dist",
//         filename: "[name].js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 loader: ["style-loader","css-loader"]
//             }
//         ]
//     },
//     plugins : [
//         new HtmlWebpackPlugin({
//             template: "src/index.html",
//             inject : "body"
//         })
//     ]
// };