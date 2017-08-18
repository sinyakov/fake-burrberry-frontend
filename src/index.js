import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lora:400,400i,500', 'Raleway:400,600,700']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
