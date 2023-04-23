import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
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
    })
]
}
