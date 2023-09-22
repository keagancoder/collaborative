import React from 'react';
import ReactDOM from 'react-dom';
import HorizonBarComponent from './HorizonBarComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HorizonBarComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});