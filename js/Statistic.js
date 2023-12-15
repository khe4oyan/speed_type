import DOM from "./dom.js";

class Statistic {
  static #doneKeys = 0;
  static #failKeys = 0;

  constructor() { throw new Error('not have instance'); }

  static init() {
    // reset values
    Statistic.#doneKeys = 0;
    Statistic.#failKeys = 0;
  }

  static incrementDone() {
    ++Statistic.#doneKeys;
    Statistic.showValuesInDom();
  }

  static incrementFail() {
    ++Statistic.#failKeys;
    Statistic.showValuesInDom();
  }

  static showValuesInDom() {
    const fail = DOM.GE('.value.valueFail');
    fail.innerText = 'Fails: ' + Statistic.#failKeys;

    const done = DOM.GE('.value.valueDone');
    done.innerText = 'Dones: ' + Statistic.#doneKeys;
  }
};

export default Statistic;
