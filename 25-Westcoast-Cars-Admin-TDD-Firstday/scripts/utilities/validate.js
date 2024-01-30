export function validateString(value) {
  if (value.trim().length === 0) {
    throw new Error('Information saknas');
  }
}
