module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
    filename: 'bundle.js'
  },
  // Whenever files change rebundle
  watch: true,
  // See https://github.com/babel/babel-loader
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  }
}
