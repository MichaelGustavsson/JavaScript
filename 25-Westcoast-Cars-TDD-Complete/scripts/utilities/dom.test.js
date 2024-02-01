import { it, expect, vi } from 'vitest';
import { Window } from 'happy-dom';
import fs, { write } from 'fs';
import path from 'path';
import { displayMessage } from './dom.js';
import { getByLabelText, getByRole } from '@testing-library/dom';
import exp from 'constants';

/********************************************************/
//ALLT DETTA BARA FÖR SKAPA EN VIRTUELL DOM
/********************************************************/
// Skapa en sökväg till index.html...
const docPath = path.join(process.cwd(), 'index.html');
// Läs in allt som finns i index.html filen...
const content = fs.readFileSync(docPath).toString();
// Skapa en instans av window objektet i DOM(Happy-DOM)...
const window = new Window();
// Hämta in root dokumentet(body delen av html filen)
const document = window.document;
// Skriver innehållet till minnet (virtuella dom objektet)
document.write(content);

// Mappa vårt document till vitests globala document objekt...
vi.stubGlobal('document', document);
/********************************************************/
//SLUT PÅ DEN VIRTUELLA MAPPNINGEN
/********************************************************/

it('ska vid uppstart av index.html inte ha något paragraf element', () => {
  const msgElement = document.querySelector('#message');
  const paragraph = msgElement.firstElementChild;

  expect(paragraph).toBeNull();
});

it('ska visa meddelandet i ett paragraf element', () => {
  const message = 'Sparat bilen';

  displayMessage(message);

  const msgElement = document.querySelector('#message');
  const paragraph = msgElement.firstElementChild;

  expect(paragraph.textContent).toBe(message);
});

it('ska lägga till ett paragraf element i meddelande elementet', () => {
  const msgElement = document.querySelector('#message');
  const paragraph = msgElement.firstElementChild;

  expect(paragraph).not.toBeNull();
});

it('ska ha ett inmatningsfält som har etiketten manufacturer', () => {
  const input = getByLabelText(document, 'Bilmärke');
  expect(input).not.toBeNull();
});
