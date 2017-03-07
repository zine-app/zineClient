var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    if (!env) env = {};

    var config = {
        context: __dirname,
        entry: {
            app: "./src/app/index.tsx",
            vendor: ['react', 'react-dom', 'lodash', 'react-router']
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve('./dist')
        },

        devtool: "source-map",

        resolve: {
            extensions: ['.scss', '.css', '.js', ".jsx",  ".ts", ".tsx"],
            modules: [
                path.resolve(__dirname, './src'),
                'node_modules',
                path.resolve(__dirname, './node_modules')
            ]
        },


        module: {
            loaders: [
                { 
                    test: /\.tsx?$/,
                    exclude: [/node_modules/, /react-css-themr/],
                    loaders: [
                        "babel-loader", "ts-loader"
                    ]
                },

                {
                    test: /\.scss$/,
                    exclude: [/node_modules/],
                    use: env.production ? ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader', 'autoprefixer-loader']
                    }) : ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader']
                },

                {
                    test: /\.css$/,
                    use: env.production ? ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'autoprefixer-loader']
                    }) : ['style-loader', 'css-loader', 'autoprefixer-loader']
                },

                {test: /(\.js|\.jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
                {test: /\.json$/, loader: 'json-loader'}
            ]
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.bundle.js',
                minChunks: Infinity
            }),

            new htmlPlugin({
                title: 'Application',
                template: './src/app/index_template.html'
            })
        ]
    };

    if (env.production) {
        config.plugins.unshift(new ExtractTextPlugin('style.css'));
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true, 
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: false
            }
        }))
    }

    return config;
};
