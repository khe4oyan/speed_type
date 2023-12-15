import RandomChar from "./RandomChar.js";
import DOM from './dom.js';
import Char from "./Char.js";

class Chars {
  static #chars = [];
  static #currentCharIndex = 10;

  constructor() { throw new Error('not have instance'); }

  static get chars() {
    return Chars.#chars;
  }
  static get currentCharIndex() {
    return Chars.#currentCharIndex;
  }

  static init() {
    // reset values
    Chars.#chars = [];

    // init values
    Chars.#randomFill();
    Chars.showCharsInDOM();
  }

  static nextChar() {
    Chars.#leftShift();
    Chars.showCharsInDOM();
  }

  static #randomFill() {
    for (let i = 0; i < 10; ++i) {
      Chars.#chars[i] = new Char(null);
    }
    for (let i = 10; i < 21; ++i) {
      Chars.#chars[i] = new Char(RandomChar.newRandomChar);
    }
  }

  static #leftShift() {
    for (let i = 0; i < Chars.#chars.length - 1; ++i) {
      Chars.#chars[i] = Chars.#chars[i + 1];
    }
    Chars.#chars[Chars.#chars.length - 1] = new Char(RandomChar.newRandomChar);;
  }
  static showCharsInDOM() {
    const charsBox = DOM.GE('.charsBox');
    charsBox.innerText = '';

    let i = 0;

    const prevChars = DOM.CE('div', 'prevChars');

    for (i; i < 10; ++i) {
      const char = DOM.CE('p', 'char');

      if (Chars.#chars[i].isDone) {
        char.classList.add('charDone');
      } else
      if (Chars.#chars[i].isFail) {
        char.classList.add('charFail');
      }

      char.innerText = Chars.#chars[i].value;
      prevChars.appendChild(char);
    }
    charsBox.appendChild(prevChars);

    const currentChar = DOM.CE('div', 'currentChar');

    const char = DOM.CE('p', 'char');
    char.innerText = Chars.#chars[i++].value;
    currentChar.appendChild(char);

    charsBox.appendChild(currentChar);

    const nextChars = DOM.CE('div', 'nextChars');

    for (i; i < Chars.#chars.length; ++i) {
      const char = DOM.CE('p', 'char');
      char.innerText = Chars.#chars[i].value;
      nextChars.appendChild(char);
    }
    charsBox.appendChild(nextChars);
  }
};

export default Chars;
