const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: false,

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../dist")
    },
    devServer : {
        port: 3000, // Port Number
        open: true, // Open browser automatically
        hot: true // Auto Reload
    }
});