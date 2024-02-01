import { it, expect } from 'vitest';
import { validateString } from './validate.js';

it('ska returnera ett felmeddelande om fältet är tomt', () => {
  // Arrange...
  const input = '';
  // Act...
  // const validateFn = validateString(input);
  const validateFn = () => validateString(input);
  // Assert...
  expect(validateFn).toThrow();
});

it('Ska returnera medskickat felmeddelande', () => {
  // Arrange...
  const input = '';
  const errorMessage = 'Det gick inte så bara va?';
  // Act...
  const validateFn = () => validateString(input, errorMessage);
  // Assert...
  expect(validateFn).toThrow(errorMessage);
});
