const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require( 'copy-webpack-plugin' );

module.exports = {
    
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                
            }
        ]
    },

    optimization: {},


    plugins: [
        new HtmlWebpackPlugin( {
            title: 'DeliveryApp-Practice',
            filename: 'index.html',
            template: './src/index.html'
        } ),
        new MiniCssExtractPlugin( {
            filename: '[name].css'
        } ),
        new CopyPlugin( {
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        } )
    ],
};