import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';        // !important
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';           // !important
import './style/reset.css';
import './style/base.scss';
import './style/iconfont/iconfont.css';

console.log(process.env.NODE_ENV)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
