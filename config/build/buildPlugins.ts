import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export function buildPlugins(): webpack.WebpackPluginInstance[] {
return [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', '..', 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin({
        handler: (percentage: number, message: string, ...args: any) => {
            console.log(`${(percentage * 100).toFixed(2)}%`, message, ...args);
        }
    })
]
}
