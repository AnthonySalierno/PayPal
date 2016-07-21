module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
