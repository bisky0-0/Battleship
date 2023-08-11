const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    target: 'web',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};