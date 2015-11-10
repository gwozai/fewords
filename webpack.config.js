var webpack = require('webpack')

module.exports = {
    entry: './pages/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html-loader"},
            { test: /\.scss$/, loaders: ["style", "css", "sass"]}
        ]
    }
}

