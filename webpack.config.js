const webpack = require("webpack");
const path = require("path");
const glob = require('glob');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const node_dir = path.join(__dirname, './node_modules/'); 
 
module.exports = {
    entry:{
        login: './src/js/page/login.js',
        password: './src/js/page/password.js',
        index: './src/js/page/index.js',
        email: './src/js/page/email.js',
        inforchange: './src/js/page/admin/inforchange.js',
        infor: './src/js/page/admin/infor.js',
        unmessage:'./src/js/page/admin/unmessage.js',
        mymessage:'./src/js/page/admin/mymessage.js',
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
            // 需要提取的放 不需要的不放 比如 password
            chunks: ['login','index','inforchange','infor','unmessage','mymessage'],
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
            filename: './view/password.html', 
            template: './src/view/password.html', 
            inject: true, 
            hash: true, 
            // minify: { 
            //     removeComments: true, 
            //     collapseWhitespace: false 
            // },    
            chunks: ['public','password','vendor'] 
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
            filename: './view/email.html', 
            template: './src/view/email.html', 
            inject: true, 
            hash: true, 
            // minify: { 
            //     removeComments: true, 
            //     collapseWhitespace: false 
            // },    
            chunks: ['public', 'email','vendor'] 
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
            chunks: ['public', 'infor','vendor'] 
        }),
        new HtmlWebpackPlugin({ 
            //favicon: './src/img/favicon.ico', 
            filename: './view/admin/unmessage.html', 
            template: './src/view/admin/unmessage.html', 
            inject: true, 
            hash: true, 
            // minify: { 
            //     removeComments: true, 
            //     collapseWhitespace: false 
            // },    
            chunks: ['public', 'unmessage','vendor'] 
        }),
        new HtmlWebpackPlugin({ 
            //favicon: './src/img/favicon.ico', 
            filename: './view/admin/mymessage.html', 
            template: './src/view/admin/mymessage.html', 
            inject: true, 
            hash: true, 
            // minify: { 
            //     removeComments: true, 
            //     collapseWhitespace: false 
            // },    
            chunks: ['public', 'mymessage','vendor'] 
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