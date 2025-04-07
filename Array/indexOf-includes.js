'use strict';

{
  const items = ['apple', 'banana', 'grape', 'banana', 5];
  let result = items.indexOf('banana'); // 1 index 求める値。
  result = items.indexOf('banana', 2); // 2, 第２引数は開始 index。
  result = items.indexOf('hello'); // -1, 不在は -1。
  result = items.indexOf('5'); // -1, 型違い。
  result = items.includes('banana'); // true
  result = items.indexOf('banana') !== -1; // true, includesと同。「banana は -1(不在)では無いか？」

  console.log(result);
}
