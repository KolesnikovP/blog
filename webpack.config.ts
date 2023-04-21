import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  // entry point
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  // output point (where to put the bundle)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // [name] is the entry point name [contenthash] is a hash of the content
    clean: true, // clean the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin({
      handler: (percentage: number, message: string, ...args: any) => {
        console.log(`${(percentage * 100).toFixed(2)}%`, message, ...args);
      }
    })
  ]
}

export default config;
