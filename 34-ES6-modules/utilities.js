function adjustNaming(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function adjustCapitalization(value) {
  return value
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

// Default export
// export default adjustNaming;

// Namngiven export
export { adjustCapitalization, adjustNaming };
