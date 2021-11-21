// function that reverses the word order in the
// given input string while preserving the
// location of non-alphanumeric characters.

function nonAlphaReverse(data) {
  let wordsReversed = data
    .split(/[-!$%^@&*()_+|~=`{}\[\]:";'<>?,.\/]+/)
    .reverse()
    .filter((n) => n);

  let symbols = data.split(/[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+/);

  let output = [];

  for (var i = 0; i < symbols.length; i++) {
    output.push(symbols[i]);
    output.push(wordsReversed[i]);
  }

  return output.join('');
}

// put input string there
let input = '_One..Two...Three;;;;Four_Five_';

// log out the output
console.log(nonAlphaReverse(input));

// expected output:
//_Five..Four...Three;;;;Two_One_
