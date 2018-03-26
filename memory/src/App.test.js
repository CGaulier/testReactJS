import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppTest from './AppTest'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppTest />, div);
  ReactDOM.unmountComponentAtNode(div);
});

