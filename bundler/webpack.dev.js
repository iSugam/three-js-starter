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
        port: 3000,
        open: true,
    }
});

console.log(path);