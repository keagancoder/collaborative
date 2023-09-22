import React from 'react';
import ReactDOM from 'react-dom';
import StackLineComponent from './StackLineComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StackLineComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});