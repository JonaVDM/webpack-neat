const path = require('path');
const WebpackNotifierPlugin = require('webpack-build-notifier');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const bourbonPath = require('bourbon-neat').includePaths;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    },
    plugins: [
        new WebpackNotifierPlugin({
            title: 'compiler',
            successIcon: path.join(__dirname, 'icons/success.png'),
            failureIcon: path.join(__dirname, 'icons/fail.png')
        }),
        new FriendlyErrorsWebpackPlugin({
            clearConsole: true
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: bourbonPath
                    }
                }
            ],
        }]
    }
};
