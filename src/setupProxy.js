const proxy = require('http-proxy-middleware');

module.exports = function(app) {
app.use(proxy('/api', {
       target:'https://www.dxracer.cn/mall/pc/',
       changeOrigin: true,
       pathRewrite: {
        '^/api':'/'
       },
    }));
};
