import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './Potato';

ReactDOM.render(
  <React.StrictMode>
    {/* component, <App />형태로 써야함, JSX라고함. JSX는 javascript안의 HTML */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);