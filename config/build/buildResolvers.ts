import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    // if preferAbsolute: true, then we can just use path absolute. If not - "@"before folder name
    alias: { // aliases is useful thing for resolving path and helps to avoid a misunderstanding between familiar modules
      '@': options.paths.src,
    },
  };
}
