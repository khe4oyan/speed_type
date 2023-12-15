import Chars from './js/Chars.js';

Chars.init();

document.addEventListener('keydown', (e) => {
  const pressedKey = e.key;

  if (pressedKey === 'Shift') { return; }
  
  const chars = Chars.chars;
  const currentCharIndex = Chars.currentCharIndex;

  if (pressedKey == chars[currentCharIndex].value) {
    chars[currentCharIndex].statusDone();
  } else {
    chars[currentCharIndex].statusFail();
  }
  
  Chars.nextChar();
});