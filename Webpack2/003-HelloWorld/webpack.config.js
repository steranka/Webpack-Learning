var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname +  "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader","css-loader"]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject : "body"
        })
    ]
};