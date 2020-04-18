import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter, Switch } from 'react-router-dom'
import renderRoutes from './router'
import { ConfigProvider } from "antd"
import zhCN from 'antd/es/locale/zh_CN';
import { routes } from './config';
import store from './store'
import * as serviceWorker from './serviceWorker';
//import './reset.css'
import './index.less'
// 去style 目录下选择自己喜欢的样式
import 'highlight.js/styles/monokai-sublime.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </ConfigProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
