import React from 'react';
import ReactDOM from 'react-dom';
import PieComponent from './PieComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PieComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});