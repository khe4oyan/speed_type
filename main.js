import RandomChar from './js/RandomChar.js';

const chars = [];
const currentCharIndex = 10;
const statuses = {
  def: 'default',
  fail: 'fail',
  done: 'done',
}

randomFill(chars);
showCharsInDOM(chars);

document.addEventListener('keydown', (e) => {
  const pressedKey = e.key;
  if (pressedKey === 'Shift') { return; }

  if (pressedKey == chars[currentCharIndex].value) {
    chars[currentCharIndex].status = statuses.done;
  } else {
    chars[currentCharIndex].status = statuses.fail;
  }
  
  leftShift(chars);
  showCharsInDOM(chars);
});

function leftShift(chars) {
  for (let i = 0; i < chars.length - 1; ++i) {
    chars[i] = chars[i + 1];
  }
  chars[chars.length - 1] = {value: RandomChar.newRandomChar, status: statuses.def};
}

function randomFill(chars) {
  for (let i = 0; i < 10; ++i) {
    chars[i] = {value: null, status: statuses.def};
  }
  for (let i = 10; i < 21; ++i) {
    chars[i] = {value: RandomChar.newRandomChar, status: statuses.def}
  }
}

function showCharsInDOM(chars) {
  const charsBox = document.querySelector('.charsBox');
  charsBox.innerText = '';

  let i = 0;

  const prevChars = document.createElement('div');
  prevChars.classList.add('prevChars');
  for (i; i < 10; ++i) {
    const char = document.createElement('p');
    char.classList.add('char');
    if (chars[i].status === statuses.done) {
      char.classList.add('charDone');
    }
    if (chars[i].status === statuses.fail) {
      char.classList.add('charFail');
    }

    char.innerText = chars[i].value;
    prevChars.appendChild(char);
  }
  charsBox.appendChild(prevChars);

  const currentChar = document.createElement('div');
  currentChar.classList.add('currentChar');
  {
    const char = document.createElement('p');
    char.classList.add('char');
    char.innerText = chars[i++].value;
    currentChar.appendChild(char);
  }
  charsBox.appendChild(currentChar);

  const nextChars = document.createElement('div');
  nextChars.classList.add('nextChars');

  for (i; i < chars.length; ++i) {
    const char = document.createElement('p');
    char.classList.add('char');
    char.innerText = chars[i].value;
    nextChars.appendChild(char);
  }
  charsBox.appendChild(nextChars);
}