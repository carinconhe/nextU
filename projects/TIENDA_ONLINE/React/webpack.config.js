const path = require('path');

var config ={
  entry:'./main.js',
  output:{
    path: path.resolve(__dirname, './'),
    filename:'index.js'
  },
  devServer:{
    historyApiFallback: true,
    inline: true,
    port: 8080
  },

  module:{
    rules:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        query:{
          presets:['es2015','react']
        }
      },
      { test: /.css$/, loader: 'style-loader'},
      { test: /.css$/, loader: 'css-loader', query: { modules: true, localIdentName: '[local]' } }
    ]
  }
};

module.exports = config;
