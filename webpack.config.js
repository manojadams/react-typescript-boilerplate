const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [{
            test: /\.(tsx?)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.(png|svg|jpg|jpeg|gif|ico|json)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
        }]
    },
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),   
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: './public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: 3001,
        historyApiFallback: true,
        open: true
    }
}