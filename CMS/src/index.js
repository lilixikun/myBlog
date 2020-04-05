import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { ConfigProvider } from "antd"
import zhCN from 'antd/es/locale/zh_CN';
import routers from './router';
import store from './store'
import * as serviceWorker from './serviceWorker';
import './index.less'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Switch>
          {renderRoutes(routers)}
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
