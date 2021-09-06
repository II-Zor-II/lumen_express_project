module.exports = {
  outputDir: './app/public',
  assetsDir: './assets',
  runtimeCompiler: true,
  devServer: {
    host: '0.0.0.0',
    public: 'localhost:3000',
    port: 3000,
    https: false,
    hot: true,
    clientLogLevel: 'info',
    watchOptions: {
      poll: true
    }
  },
  pages: {
    index: {
      entry: './app/src/main.ts',
      template: './app/src/views/index.html',
      filename: 'index.html',
      title: 'Express Front App',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
};
