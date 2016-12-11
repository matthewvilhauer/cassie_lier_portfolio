import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			{test: /\.png$/, loader: 'file?name=/images/[name].[ext]'},
			{
				// ASSET LOADER
				// Reference: https://github.com/webpack/file-loader
				// Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
				// Rename the file using the asset hash
				// Pass along the updated reference to your code
				// You can add here any file extension you want to get copied to your output
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				// include: [
				// 	`${nodeModules}/angular-ui-grid`,
				// ],
				loader: 'file?name=/images/[name].[ext]',
			},
    ]
  }
};
