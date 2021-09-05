module.exports = {
  outputDir: './app/public',
  assetsDir: './assets',
  runtimeCompiler: true,
  devServer: {
    host: 'localhost'
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
