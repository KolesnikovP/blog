import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): WebpackDevServerConfiguration {
  return {
    port: options.port,
    open: true, // auto open window of browser
    hot: true, // hot reload
    historyApiFallback: true, // if we have 404 error, we will be redirected to index.html
  };
}
