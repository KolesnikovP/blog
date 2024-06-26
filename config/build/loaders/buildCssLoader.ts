import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      exclude: /node_modules/,
      options: {
        modules: {
          auto: (resourcePath: string) => resourcePath.endsWith('.module.scss') || resourcePath.endsWith('.module.css'),
          localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});
