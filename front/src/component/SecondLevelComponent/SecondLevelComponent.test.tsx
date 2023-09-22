import React from 'react';
import ReactDOM from 'react-dom';
import SecondLevelComponent from './SecondLevelComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecondLevelComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});