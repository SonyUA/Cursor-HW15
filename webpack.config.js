const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "production",
    entry: {
        filename: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        assetModuleFilename: "[name] [ext]",
        clean: true,
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svq|jpq|jpeq|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // не обрабатываем файлы из node_modules
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true, // Использование кэша для избежания рекомпиляции
                        // при каждом запуске
                    },
                },
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "My first Webpack",
            filename: "index.html",
            template: "src/index.html",
        }),
    ],
};
