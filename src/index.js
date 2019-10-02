const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let i, j, a, b;
  let letterLength = 10;
  let subArray = [];
  let subLetter = [];
  let dot = '10';
  let dash = '11';
  let result = [];
  let key;

  for (i=0, j = expr.length; i < j; i += letterLength) {
    subArray = expr.slice(i, i + letterLength);

    if (subArray[0] === '*') {
      result.push(' ');
      continue;
    }

    let letter = [];

    for(a = 0; a < 9; a += 2) {
      subLetter = subArray.slice(a, a + 2);

      if (subLetter === dot) {
        letter.push('.');
      }

      if (subLetter === dash) {
        letter.push('-');
      }
    }
    key = letter.join('');
    result.push(MORSE_TABLE[key]);
  }
  return result.join('');
}

module.exports = {
    decode
}
