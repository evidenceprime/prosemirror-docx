const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
    'buffer-image-size': 'BufferImageSize',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
