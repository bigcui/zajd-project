# publicSecuriy 

> A Vue.js project

## 生成相对地址 修改2处

`output: {
            publicPath: './',`

 1.安装 postcss-loader postcss-assets
    npm install postcss-loader postcss-assets --save-dev
2.增加修改

`output： { publicPath： '/' }
postcss： function() {
  return [
    require('postcss-assets')({
      relative: true,
      // 配置图片所在位置， 例如我的图片存在与 static 文件夹里面
      loadPaths: [path.resolve(__dirname, '../static')],
    }),
  ]
}
`

### 如何与RD点对点联调：
>
```
  // 根目录/config/index.js
  proxyTable: {
      '/koubei/': {
          target: 'http://10.46.69.24:8888', // 为RD的IP及端口号
          filter: (pathname, req) => {
              return req.headers['x-requested-with'];
          },
          pathRewrite: {'^/koubei/': '/'}
      }
  }


  // 根目录/src/main.js
  Vue.config.productionTip = false;
  // 只拦截ajax请求，注意位置这行代码的位置
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  interceptors(axios.interceptors);
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## history 修改 参考https://juejin.im/post/5b39e8ac6fb9a00e406aa7d1