import React from 'react';
import 'assets/styles/index.less';
// import 'assets/styles/antd.less'
import { render } from 'react-dom';
import { store } from 'store/app.store';
import { App } from 'pages/app';

const targetHTMLElement = document.getElementById('root');

render(<App store={store} />, targetHTMLElement);
