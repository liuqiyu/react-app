import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './style/reset.css';
import './style/base.scss';
import './style/iconfont/iconfont.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
