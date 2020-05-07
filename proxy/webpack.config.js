const path = require('path');
const SRC_DIR = '/mnt/c/Users/06089/Documents/HRATX48/review-proxy'
const DIST_DIR = path.join(__dirname, './proxy/dist');

module.exports = {
  entry: [`${SRC_DIR}/product-display/src/index.js`, `${SRC_DIR}/review-component/src/index.js`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};