import React from 'react';
import ReactDOM from 'react-dom';
import BreadCrumbComponent from './BreadCrumbComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BreadCrumbComponent path={''} />, div);
  ReactDOM.unmountComponentAtNode(div);
});