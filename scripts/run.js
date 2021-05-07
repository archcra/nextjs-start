/* eslint-disable @typescript-eslint/no-var-requires */
// server.js
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

// const axios = require('axios');

// const SERVER_URL =
//   process.env.NODE_ENV === 'development'
//     ? 'http://127.0.0.1:1234'
//     : 'http://127.0.0.1:5678';

// 获取请求IP地址
// const getClientIp = (req) => {
//   return (
//     req.headers['x-forwarded-for'] ||
//     req.connection.remoteAddress ||
//     req.socket.remoteAddress ||
//     req.connection.socket.remoteAddress ||
//     ''
//   );
// };

// 接口请求代理
// const devProxy = {
//   '/ui-api': {
//     target: SERVER_URL,
//     // pathRewrite: {
//     //   '^/api': '/'
//     // },
//     changeOrigin: true
//   }
// };
const devProxy = null;

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // 正式环境使用nginx代理接口请求
    if (dev && devProxy) {
      Object.keys(devProxy).forEach((context) => {
        server.use(context, createProxyMiddleware(devProxy[context]));
      });
    }

    server.get('/', (req, res) => {
      handle(req, res);
    });

    server.get('/about', (req, res) => {
      handle(req, res);
    });

    // 开发环境静态资源转发，正式环境一般使用nginx
    if (dev) {
      server.all('*', (req, res) => {
        handle(req, res);
      });
    }

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
