const path = require('path');
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist')
}

const PAGES_DIR = `${PATHS.src}/pug`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {

	externals: {
		paths: PATHS
	},

	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: PATHS.dist,
		publicPath: './'
	},
	resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/img/'),
    },
  },
	module: {
		rules: [
			{
      test: /\.pug$/,
      loader: 'pug-loader'
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
      	name: 'src/img/[name].[ext]'
      }
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader"
        }
      ]
    }
    ]
	},
	
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		 new CopyWebpackPlugin({
      patterns: [
        { from: './src/img', to: 'src/img' },
      ],
    }),
		...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
			
	]
}