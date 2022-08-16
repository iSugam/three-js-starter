const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "script.[contenthash].js",
        path: path.resolve(__dirname, "../dist")
    }
});

console.log(path);