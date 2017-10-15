const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.NormalModuleReplacementPlugin(
            /\/iconv-loader$/, 'node-noop'
        )
    ],
    devServer: {
        compress: true,
        hot: true,
        stats: { colors: true },
        contentBase: path.join(__dirname, "public"),
        host: '0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: true,
        proxy: {
            // "/": "http://localhost:3000/",
            // "graphql": "http://localhost:3000"
        },
    },
});