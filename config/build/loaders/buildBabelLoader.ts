import { BuildOptions } from '../types/config';

export function buildBabelLoader(options: BuildOptions) {
  const { isDev } = options;
  return {
    test: /\.m?(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
      },
    },
  };
}
