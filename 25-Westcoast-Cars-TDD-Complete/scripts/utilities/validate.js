export function validateString(value, errorMessage) {
  if (value.trim().length === 0) {
    throw new Error(errorMessage);
  }
}
