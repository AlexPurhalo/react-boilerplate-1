const merge = require('webpack-merge');
const webpack = require("webpack");
const common = require('./webpack.common.js');
module.exports = merge(common, {
    output: {
        path: __dirname + "/production",
        filename: "bundle.js",
        publicPath: "/production/",
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ]
});