const { createProxyMiddleware } = require('http-proxy-middleware');
// console.log(1);
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:3030",
      changeOrigin: true
    })
  )
}
