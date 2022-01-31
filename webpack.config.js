const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'prosemirror-docx.js',
    library: {
      name: 'PMDocx',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    docx: 'docx',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
