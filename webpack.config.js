
module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
		],
	},
	mode: 'production',
	devtool: 'source-map',
	externals: {
		jquery: 'jQuery',
	},
	output: {
		filename: '[name].min.js',
	},
	optimization: {
		minimize: true,
	},
	stats: {
		chunks: false,
		entrypoints: false,
	},
};
