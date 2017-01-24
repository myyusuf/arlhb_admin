var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './main.js',
  output: {
    path: '/Users/myyusuf/Documents/Projects/Nusapro/Software/Server/arlhb/public/app/',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        // explicitely define the path to allow import of the jqwidget-react jsx files
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "main.js"),
          path.resolve(__dirname, "node_modules/jqwidgets-framework/jqwidgets-react")
        ],
        // exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
