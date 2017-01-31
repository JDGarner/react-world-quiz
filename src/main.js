import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/views/App';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('main')
  );
});
