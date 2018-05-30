module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
    filename: 'bundle.js'
  },
  // Whenever files change rebundle
  watch: true,
  // No source map
  // devtool: 'source-map',
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
      },
      {
        test: /\.s?css$/,
        exclude: /(node_modules|bower_components)/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: `jshint-loader`,
            // options: {...options}
          }
        ]
      }
    ]
  }
}
