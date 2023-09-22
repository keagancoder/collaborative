import React from 'react';
import ReactDOM from 'react-dom';
import VerticalBarComponent from './VerticalBarComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VerticalBarComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});