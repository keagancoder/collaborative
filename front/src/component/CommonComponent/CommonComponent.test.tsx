import React from 'react';
import ReactDOM from 'react-dom';
import CommonComponent from './CommonComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommonComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});