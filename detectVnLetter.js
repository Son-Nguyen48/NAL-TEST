function detectVnLetter(input) {
  const arrCheck = ["aw", "aa", "dd", "ee", "oo", "ow", "w"];

  let count = 0;
  let result = [];

  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i] + input[i + 1];
    if (arrCheck.includes(input[i])) {
      count++;
      result.push(input[i]);
    }
    if (arrCheck.includes(currentLetter)) {
      count++;
      result.push(currentLetter);
      i++;
    }
  }

  return { count, result };
}

const input = "hfdawhwhcoowdd";
const result = detectVnLetter(input);
console.log(result.count, result.result);
