module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: true,
    clientLogLevel: 'info',
    proxy: {
      '/cors': {
        target: 'http://120.77.224.230:9090',
        changeOrigin: true,
        pathRewrite: {
          '^/cors': 'piling'
        }
      }
    },
    before(app) {
      app.get('/api/goods', function(req, res) {
        res.json({
          code: 0,
          list: [{ id: '1', text: 'vue', price: '1000' }, { id: '2', text: 'react', price: '1200' }]
        });
      });
    }
  }
};
