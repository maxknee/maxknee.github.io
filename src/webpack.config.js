module.exports = {
  entry: "./js/entry.js",
  output: {
    path: './public',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
    ]
  }
};
