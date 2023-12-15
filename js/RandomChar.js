class RandomChar {
  constructor() { throw new Error('not have instance');}
  
  static get newRandomChar() {
    return RandomChar.#randomNumber();
  }

  static #randomNumber() {
    return '' + Math.round(Math.random() * 9);
  }
};

export default RandomChar;