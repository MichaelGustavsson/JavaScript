export function displayMessage(message) {
  const messageContainer = document.querySelector('#message');
  const messageParagraph = document.createElement('p');

  messageParagraph.textContent = message;

  messageContainer.appendChild(messageParagraph);
}
