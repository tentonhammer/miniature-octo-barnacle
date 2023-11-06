// Generated using webpack-cli https://github.com/webpack/webpack-cli
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = MiniCssExtractPlugin.loader;
const config = {
  mode: 'development',
  entry: './src/app/index.tsx',
  output: { path: path.resolve(__dirname, 'dist') },
  devServer: {
    open: true,
    host: 'localhost',
    port: 3000,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' }), new MiniCssExtractPlugin()],
  resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', '.scss'] },
  module: {
    rules: [
      { test: /\.css$/i, use: [stylesHandler, 'css-loader'] },
      {
        test: /\.(css|scss|sass|less)$/,
        use: [
          stylesHandler,
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      { test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i, type: 'asset' },
      { test: /\.(ts|tsx)$/i, loader: 'ts-loader', exclude: ['/node_modules/'] },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};
module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
