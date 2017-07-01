const webpack = require("webpack");
const path = require("path");
const glob = require('glob');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const node_dir = path.join(__dirname, './node_modules/'); 

module.exports = {
    entry:{
        login: './src/js/page/login.js',
        index: './src/js/page/index.js',
        inforchange: './src/js/page/admin/inforchange.js',
        infor: './src/js/page/admin/infor.js',
        vendor: ['jquery','bootstrap','vue','store'] 
    },
    output:{
        path: path.join(__dirname,'dist'),
        publicPath: '/dist/',
        //filename: 'js/[name]-[hash].js',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader'})
            },            
            {
                test:/\.html$/,
                loader: "html-loader?attrs=img:src img:data-src"
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }            
        ]
    },
    plugins:[
        new ExtractTextPlugin('css/[name].css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'public',
            chunks: ['login','index','inforchange','infor'],
            minChunks: 2
        }),  
        new HtmlWebpackPlugin({ 
            //favicon: './src/img/favicon.ico', 
            filename: './view/login.html', 
            template: './src/view/login.html', 
            inject: true, 
            hash: true, 
            // minify: { 
            //     removeComments: true, 
            //     collapseWhitespace: false 
            // },    
            chunks: ['public', 'login','vendor'] 
        }), 
        new HtmlWebpackPlugin({ 
            //favicon: './src/img/favicon.ico', 
            filename: './view/index.html', 
            template: './src/view/index.html', 
            inject: true, 
            hash: true, 
            // minify: { 
            //     removeComments: true, 
            //     collapseWhitespace: false 
            // },    
            chunks: ['public', 'index','vendor'] 
        }),
        new HtmlWebpackPlugin({ 
            //favicon: './src/img/favicon.ico', 
            filename: './view/admin/inforChange.html', 
            template: './src/view/admin/inforChange.html', 
            inject: true, 
            hash: true, 
            // minify: { 
            //     removeComments: true, 
            //     collapseWhitespace: false 
            // },    
            chunks: ['public', 'inforchange','vendor'] 
        }),  
        new HtmlWebpackPlugin({ 
            //favicon: './src/img/favicon.ico', 
            filename: './view/admin/infor.html', 
            template: './src/view/admin/infor.html', 
            inject: true, 
            hash: true, 
            // minify: { 
            //     removeComments: true, 
            //     collapseWhitespace: false 
            // },    
            chunks: ['public', 'info','vendor'] 
        })                            
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer:{
        contentBase: './dist/view/',
        host: '127.0.0.1',
        //host: 'http://119.90.141.208',
        port: 9090,
        inline: true,
        hot: true,
 
        proxy: {
  
            '/beecubic': {
                target: 'http://119.90.141.208',
                changeOrigin: true 
 
            }
        } 
    }
}