import Chars from './js/Chars.js';
import Statistic from './js/Statistic.js';

Chars.init();
Statistic.init();
Statistic.showValuesInDom();

document.addEventListener('keydown', (e) => {
  const pressedKey = e.key;

  if (pressedKey === 'Shift') { return; }
  
  const chars = Chars.chars;
  const currentCharIndex = Chars.currentCharIndex;

  if (pressedKey == chars[currentCharIndex].value) {
    chars[currentCharIndex].statusDone();
    Statistic.incrementDone();
  } else {
    chars[currentCharIndex].statusFail();
    Statistic.incrementFail();
  }
  
  Chars.nextChar();
});