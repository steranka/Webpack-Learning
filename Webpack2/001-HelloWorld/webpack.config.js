module.exports = {
    entry: "./app.js", // bundle's entry point
    output: {
        path: "./dist", // output directory (must be relative path)
        filename: "[name].js" // name of the generated bundle
    }
};

