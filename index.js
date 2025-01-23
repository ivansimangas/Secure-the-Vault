let code1;

code1 = 7 + 3;

const code2 = 100 - 120 / 2;

const code3 = 38 + (41 % 2);

const message = "The vault has been secured. The combination is";

// "10-40-39"
const codeA = code1 + "-" + code2 + "-" + code3;

// "10-40-39"
const codeB = `${code1}-${code2}-${code3}`;

console.log(message);
console.log(codeA);
console.log(codeB);
