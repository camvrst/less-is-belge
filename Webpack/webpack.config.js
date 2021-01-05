// node
const path = require('path');

// npm
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { main: './main.js', annuaire: './annuaire.js' , contact: './contact.js', articlesimple: './src/services/articlesimple.js', fichespratiques: './src/view/fichespratiques.js', lexique: './src/view/lexique.js', marquebe: './src/view/marquebe.js', articlesinfos : './src/view/articlesinfos.js', articlesgeneraux: './src/view/articlesgeneraux.js', fiche3: './src/view/fiche3.js', fiche0: './src/view/fiche0.js', fiche1: './src/view/fiche1.js', fiche2: './src/view/fiche2.js', lexique3: './src/view/lexique3.js', lexique0: './src/view/lexique0.js', lexique1: './src/view/lexique1.js', lexique2: './src/view/lexique2.js', infos0: './src/view/infos0.js', infos1: './src/view/infos1.js', infos2: './src/view/infos2.js', infos3: './src/view/infos3.js', marque0: './src/view/marque0.js', marque1: './src/view/marque1.js', marque2: './src/view/marque2.js', marque3: './src/view/marque3.js'},
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new CopyPlugin({
      patterns: [{
        from: './static/assets',
        to: './assets',
      }, {
        from: './static/php',
        to: './',
      }, {
        from: './static/html',
        to: './',
      }],
    }),
    new webpack.ProgressPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'public',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'public',
        },
      },
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
              },
            ],
          ],
        },
      },
    ],
  },
  devServer: {
    open: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};
