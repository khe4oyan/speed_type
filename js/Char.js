const statuses = {
  def: 'default',
  fail: 'fail',
  done: 'done',
};

class Char {
  #value = '';
  #status = statuses.def;

  constructor(value) {
    this.#value = value;
  }
  
  get isDef() { return this.#status === statuses.def; }
  get isFail() { return this.#status === statuses.fail; }
  get isDone() { return this.#status === statuses.done; }
  get value () { return this.#value; }

  statusDef() { this.#status = statuses.def; }
  statusFail() { this.#status = statuses.fail; }
  statusDone() { this.#status = statuses.done; }
};

export default Char;
