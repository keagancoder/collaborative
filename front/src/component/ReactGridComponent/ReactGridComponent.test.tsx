import ReactDOM from 'react-dom';
import ReactGridComponent from './ReactGridComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactGridComponent domElements={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});