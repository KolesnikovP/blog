import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    // entry point
    entry: paths.entry,
    // output point (where to put the bundle)
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js', // [name] is the entry point name [contenthash] is a hash of the content
      clean: true, // clean the dist folder before each build
      publicPath: '/', // for correct routing in dev ?(better read docs webpack)
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
