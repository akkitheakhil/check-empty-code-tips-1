const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const mode = 'production'

module.exports = {
    mode,
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: 'src/index.html', to: 'index.html' },
                ]
            }
        )
    ]
};