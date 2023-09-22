import React from 'react';
import ReactDOM from 'react-dom';
import StackComponent from './StackComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StackComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});