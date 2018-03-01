const path = require('path');

module.exports = {
    entry: {
        js:'./src/app.js',
        css:'./src/app.scss'
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        loaders: [
            {
            test: /\.js$/,
            use: 'babel-loader',
            query: {
                presets: ['es2015'],
            }
        },
        {
            test: /\.vue$/,
            use: 'vue-loader',
        },
    ],
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'css-bundle.css', 
                        },
                    },
                    {loader: 'extract-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'sass-loader',
                        options: {
                            importer: function(url, prev) {
                                if(url.indexOf('bootstrap') === 0) {
                                    var filePath = url.split('bootstrap/')[1];
                                    var nodeModulePath = `./node_modules/bootstrap/${filePath}`;
                                    return { file: path.resolve(nodeModulePath) };
                                }
                                return { file: url };
                            }
                        }
                    },
                ],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map'
};
