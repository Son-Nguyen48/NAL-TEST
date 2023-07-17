const arrCheck = ["aw", "aa", "dd", "ee", "oo", "ow", "w"];
function detectVnLetter(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    const startWithW = input[i] === "w";
    let checkedLetter = startWithW ? input[i] : input[i] + input[i + 1];
    if (arrCheck.includes(checkedLetter)) {
      result.push(checkedLetter);
    }
  }

  return new Set(result);
}

const input = "hfdawhwhcoomddoow";
const result = detectVnLetter(input);
console.log(`${result.size} (${[...result].join(", ")})`);
