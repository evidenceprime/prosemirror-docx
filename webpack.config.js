const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  mode: 'production',
  target: 'es5',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'prosemirror-docx.js',
    chunkFormat: 'commonjs',
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
