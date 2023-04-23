import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode || 'development'

  const isDev: boolean = mode === 'development'

  const PORT: number = env.port || 3000

  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: paths,
    isDev: isDev,
    port: PORT
  })

  return config
};
