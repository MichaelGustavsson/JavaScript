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

it('Ska returnera ett felmeddelande som innehåller texten (Information saknas)', () => {
  // Arrange...
  const input = '';
  // Act...
  const validateFn = () => validateString(input);
  // Assert...
  expect(validateFn).toThrow(/Information saknas/i);
});
