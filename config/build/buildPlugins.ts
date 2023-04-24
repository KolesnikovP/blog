import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
return [
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
        template: paths.html,
    }),
    new webpack.ProgressPlugin({
        handler: (percentage: number, message: string, ...args: any) => {
            console.log(`${(percentage * 100).toFixed(2)}%`, message, ...args);
        }
    }),
    // с его помощью можно прокидывать глобальные переменные
    new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
]
}
