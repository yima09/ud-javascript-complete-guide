// 明示的に型を変換する方法 (Number, String)
const userInput = '10.9';
let calcResult;

calcResult = Number(userInput) + 10;
console.log(calcResult); // 20.9
calcResult = parseInt(userInput) + 10;
console.log(calcResult); // 20
calcResult = parseFloat(userInput) + 10;
console.log(calcResult); // 20.9
calcResult = +userInput + 10;
console.log(calcResult); // 20.9

const tenNumber = 10;
let stringResult = '';

stringResult = '10' + String(tenNumber);
console.log(stringResult); // 1010
stringResult = '10' + tenNumber.toString();
console.log(stringResult); // 1010
