var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    if (!env) env = {};

    var config = {
        context: __dirname,

        performance: { hints: "warning" },

        entry: {
            app: ["babel-polyfill", "./src/app/index.tsx"],
            vendor: ['react', 'react-dom', 'lodash', 'react-router', 'immutable']
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve('./dist'),
            publicPath: '/'
        },

        devtool: "source-map",

        resolve: {
            extensions: ['.scss', '.css', '.js', ".jsx",  ".ts", ".tsx", '.svg'],
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
                title: 'zine',
                template: './src/app/index_template.html'
            }),

            new webpack.DefinePlugin({
              'process.env': {
                'NODE_ENV': env.production ?
                  JSON.stringify('production') :
                  JSON.stringify('dev'),
              },

              'API_URL': env.production && env.next ?
                JSON.stringify('https://zine-next.herokuapp.com') :
                env.production ?
                JSON.stringify('https://zine-api.herokuapp.com') :
                JSON.stringify('http://localhost:3001'),

              'FACEBOOK_APP_ID': env.production && env.next ?
                JSON.stringify('1193228920796165') :
                env.production ?
                JSON.stringify('826483897470671') :
                JSON.stringify('1177220292397028'),

              'CLOUDINARY_URL': JSON.stringify("https://api.cloudinary.com/v1_1/quillapp/image/upload")
            })
        ]
    }

    if (env.production) {
        config.devtool = ""
        config.plugins.unshift(new ExtractTextPlugin('style.css'))

        config.plugins.push(
          new webpack.optimize.UglifyJsPlugin({
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
                drop_console: true
            }
        })
      )
    }

    return config;
};
