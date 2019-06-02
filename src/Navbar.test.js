import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Navbar } from 'components';

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
    ReactDOM.render(<Navbar />, container);
  });
});

it('has three buttons', () => {
  act(() => {
    ReactDOM.render(<Navbar />, container);
  });
  const buttons = container.querySelectorAll('.button');
  expect(buttons.length).toBe(3);
});
