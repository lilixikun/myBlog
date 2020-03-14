
# 安装依赖

```js
npm install express --save
```

# 添加react 依赖 添加 babel

```js
npm install react react-dom react-router-dom --save
npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react
```

# 安装 webpack

```js
npm install -D webpack webpack-cli webpack-merge
```

使用 react-dom /renderToString 方法 把组件输出成字符串给客户端渲染

使用 webpack 打包前端js 给 SSR 加载 完成同构

客户端使用路由 BrowserRouter
服务端使用路由 StaticRouter 传入 location 当前服务器访问 url

设置前端代理服务器

```js
npm install --save-dev http-proxy-middleware
```

集成redux

```js
npm i react-redux redux redux-saga --save
```

处理 CSS 样式问题

```js
npm install --save-dev css-loader style-loader
```

服务端加载css
```js
npm install --save-dev isomorphic-style-loader
```

解决服务端渲染 Css抖动问题 StaticRouter context

获取样式
style._getCss()

区分是客户端还是服务端
this.props.staticContext 在客户端是 undefined 服务端是 {}

添加css 到 style里面



