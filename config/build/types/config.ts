export type BuildMode = 'development' | 'production'
export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface BuildEnv {
    mode: BuildMode
    port: number
    apiUrl: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    apiUrl: string
    // Переменные среды - в зависимости от среды подключаем необходимое
    project: 'storybook' | 'frontend' | 'jest';
}
