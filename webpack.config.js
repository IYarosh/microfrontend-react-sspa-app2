const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/microfrontend-react-sspa-app2.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "microfrontend-react-sspa-app2.js",
        libraryTarget: "system"
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}