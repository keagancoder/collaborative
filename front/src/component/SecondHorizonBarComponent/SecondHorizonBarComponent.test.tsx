import React from 'react';
import ReactDOM from 'react-dom';
import SecondHorizonBarComponent from './SecondHorizonBarComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecondHorizonBarComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});