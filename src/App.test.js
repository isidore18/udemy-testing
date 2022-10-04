import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

//////// REACT TESTING LIBRARY //////////////////
// render components into virtual Dom
// searching virtual dom
// interacting with virtual dom
// needs a test runner


// JEST 
// recommended by testing library
// watch mode 

// types of tests
// unit tests
// test one unit of code in isolation
// integration tests
// how multiple test units work together
//functional tests
// tests a particular function of software && it tests a behaviour
// acceptance / E2E tests
// use actual browser and server (cypress and selenium)

test('button changes color and is disabled when checkbox is clicked', () => {
  render(<App />);
  // find an el with a role of button and text of Change to blue
  const button = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  expect(button.textContent).toBe('Change to red')

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled()

});

test('initial conditions', () => {
  render(<App />)
  // checks that button is enabled and checkbox is not checked

  const button = screen.getByRole('button', 'Change to blue');

  expect(button).toBeEnabled()
  expect(button).toHaveStyle({ backgroundColor: 'red' })
  
})



