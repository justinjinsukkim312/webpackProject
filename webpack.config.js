module.exports = {
	// where do we want webpack to start looking?
	entry: ['./src/index.js'],
	// where we choose the results will goes
	// public path is url to the output directory, resolved relative to the html page
	// we call the results bundle.js
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	// what we run when we develop
	// where to serve the content from
	devServer: {
		contentBase: './dist'
	},
	// anything that matches jsx or js
	// run it through babel-loader
	// run it through eslint-loader
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['eslint-loader']
			}
		]
	},
	// we want the extensions of js, jsx to be left off. (assume its js or jsx, when importing on top of file)
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
