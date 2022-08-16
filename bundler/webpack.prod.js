const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: "styles.[contenthash].css" // Toextract CSS into a seperate file
        })
    ], 
    output: {
        filename: "script.[contenthash].js",
        path: path.resolve(__dirname, "../dist"), // Build in directory
        assetModuleFilename:"asset/textures/[name].[hash][ext]",
        clean: true // To not to build a new js or css file every time we run (npm run build)
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"], // Extract CSS
          },
        ],
    },
});