import React from 'react';
import ReactDOM from 'react-dom';
import ThirdLevelComponent from './ThirdLevelComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThirdLevelComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});