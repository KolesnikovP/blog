import {BuildOptions} from "./types/config";
import type {Configuration as WebpackDevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): WebpackDevServerConfiguration {

    return {
        port: options.port,
        open: true, // auto open window of browser
    }
}