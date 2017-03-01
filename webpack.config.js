var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSass = new ExtractTextPlugin('../../dist/css/[name].css');
//noinspection JSUnresolvedVariable
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: __dirname + '/public/js/entry.js'
    },
    output: {
        path: __dirname + '/public/dist/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:  'css-loader?modules'
                })
            },
            {
                test: /\.scss$/i,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new webpack.BannerPlugin('This file is created by hwh')
    ]
};