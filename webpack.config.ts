import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode: 'development' = 'development'

const isDev: boolean = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
  mode: mode,
  paths: paths,
  isDev: isDev
})

export default config;
