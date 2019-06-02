import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    ReactDOM.render(<App />, container);
    ReactDOM.unmountComponentAtNode(container);
  });
});

it('renders Select User as default value of drop-down list', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });

  const select = container.querySelector('select');
  expect(select.value).toBe('Select User');
});
