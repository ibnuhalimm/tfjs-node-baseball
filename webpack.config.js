const path = require('path');

module.exports = {
    mode: 'production',
    entry: './client.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        host: '0.0.0.0',
        disableHostCheck: true
    }
};