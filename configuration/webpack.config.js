const path = require('path');
const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { paths, isDev } = require('.');

const plugins = isDev
    ? [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HardSourceWebpackPlugin(),
        new HardSourceWebpackPlugin.ExcludeModulePlugin([
            {
                test: /mini-css-extract-plugin[\\/]dist[\\/]loader/
            }
        ])
    ]
    : [];

const devtool = isDev ? 'eval-source-map' : false;
const entry = [path.join(paths.client, 'index.tsx')];

if (isDev) {
    entry.push('webpack-dev-server/client?http://localhost:8080');
}

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry,
    output: {
        filename: 'bundle.js',
        path: paths.dist,
        publicPath: 'http://localhost:8080/dist/'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                use: [
                    'ts-loader',
                    'eslint-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins,
    devtool,
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'vendors.js'
                }
            }
        }
    },
    devServer: {
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        },
        overlay: {
            warnings: false,
            errors: true
        }
    }
};
