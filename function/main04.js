// 例
const hello = (callback) => {
  callback();
};

hello(() => console.log('Hello')); // Hello

// 例
const hi = (callback) => {
  callback('Hi!');
};

hi((e) => console.log(e)); // Hi!

// 例
const subtract = (a, b, callback) => {
  const result = a - b;
  callback(result);
};
subtract(9, 1, (e) => console.log(e)); // 8

subtract(6, 4, (e) => alert(e)); // 2
