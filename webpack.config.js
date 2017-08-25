const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {index:['./vue/main.js'],
	vendor:['vue','echarts','vis']
	},
	output: {
		path: __dirname,
		filename: 'dist/js/[name].js'
	},
	module: {
		rules: [
			{test: /\.vue$/, use: ['vue-loader']},
			{test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/},
			{test: /\.css$/, use: ['style-loader','css-loader']},
			{test: /\.(png|svg|jpg|gif)$/,use:['file-loader?name=dist/img/[name].[ext]']},
			{test: /\.(woff|woff2|eot|ttf|otf)$/,use:['file-loader']}
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor'),
		new HtmlWebpackPlugin({
			title: "vue my config",
			template: "./index.html",
			filename:"dist/index.html",
			// files:{
			// 	js: ['[name].js'],
			// },
			inject: true
		})
	],
	devServer: {
		contentBase: __dirname+"/dist",
		compress: true,
		port: 9000
	}
};