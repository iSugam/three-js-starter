const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: false,

    output: {
        filename: "script.[contenthash].js",
        path: path.resolve(__dirname, "../dist")
    },
    plugins: [
            new HtmlWebpackPlugin({
            template: "./src/template.html" // Build a index.html file with a script tag automatically from template
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}

console.log(path);