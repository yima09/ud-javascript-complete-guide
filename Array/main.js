'use strict';

{
  let arrayLikeObject = {
    0: 'apple',
    1: 'banana',
    length: 2,
  };
  arrayLikeObject.__proto__ = Array.prototype;

  let fruits = ['apple', 'banana'];
  fruits[2] = 'grape';
  fruits[10] = 'orange';
  delete fruits[10];
  fruits['hello'] = 'hello';
  fruits.length = 100;
  fruits.length = 2;

  fruits = ['apple', , 'banana', , , 'grape', ,];
  for (const fruit of fruits) {
    // console.log(fruit);
  }
  fruits = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  fruits = new Array('apple', 'banana', 'grape');
  fruits = new Array(1, 2, 3);
  fruits = new Array(5);
  fruits = new Array('hello');
  fruits = Array('apple', 'banana', 'grape');
  fruits = Array(1, 2, 3);
  fruits = Array(5);
  fruits = Array('hello');
  fruits = Array.of('apple', 'banana', 'grape');
  fruits = Array.of(1, 2, 3);
  fruits = Array.of(5);
  fruits = Array.of('hello');

  fruits = ['apple', 'banana', 'grape'];
  const newFruits = ['peach', ...fruits, 'mango'];
  fruits.push('orange');
  let sum = (...nums) => {
    console.log(nums);
  };
  let nums = [1, 2, 3, 4];
  // sum(...nums, 5, ...[6, 7, 8], 9);

  const yoshipi = [
    'yoshipi',
    20,
    ,
    ['music', 'travel'],
    { first: 'yoshi', last: 'pi' },
    'tokyo',
    'hello!',
  ];
  let [
    ,
    ,
    gender = 'man',
    [music, travel],
    { first: firstName },
    // email = 'test@test.com',
    ...rest
  ] = yoshipi;

  const sayYoshipi = ([
    ,
    ,
    gender = 'man',
    [music, travel],
    { first: firstName },
    // email = 'test@test.com',
    ...rest
  ]) => {
    console.log(gender, music, travel, firstName, /*email*/ rest);
  };
  // sayYoshipi(yoshipi);
  // let name;
  // [name] = yoshipi; // name = yoshipi[0]
  let user = {};
  [user.name] = yoshipi; // user.name = yoshipi[0]

  let userObject = { name: 'yoshipi', age: 20 };
  let name;
  ({ name } = userObject);
  // console.log(name);

  for (const [key, value] of Object.entries(userObject)) {
    // console.log(key, value);
  }

  let items = [0, 1, 2];
  items.push(3, 4);
  items.pop();
  items.unshift(-2, -1);
  items.shift();

  arrayLikeObject = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4,
    hello: 'hello',
  };
  // arrayLikeObject.__proto__[1] = 1;
  // Array.prototype.shift.call(arrayLikeObject);
  const realArray = Array.from(arrayLikeObject);

  items = [0, 1, 2];
  items.splice(1, -1); // (1,0)

  items = [0, 1, 2, 3, 4];
  items.fill(0);
  items.fill(1, -1, 1); // (1,4,1)

  items = [0, 1, 2, 3, 4];
  items.copyWithin(2);

  items = [0, 1, 2, 3, 4];
  items.reverse();

  items = [10, undefined, , 0, , , , undefined, 1, 2];
  items.sort((a, b) => {
    return a - b;
  });
  // console.log(items);

  items = [0, 1, 2, 3, 4];
  let result = items.slice(-3, -1); //(2,4)

  items = [0, 1, 2];
  result = items.concat([3, 4, 5], 6, [7, 8, 9], 10);

  items = ['a', 'b', 'c'];
  result = items.join('');

  items = ['apple', 'banana', 'grape', 'banana', 5];
  result = items.indexOf(5);
  result = items.lastIndexOf('banana', -3);
  result = items.includes('banana', 4);
  result = items.indexOf('banana', 4) !== -1;

  items = [0, 1, , 2]; // [0, 10, 20]
  result = items.map((item, index, array) => {
    // console.log(item, index, array);
    return item * 10;
  });

  items = [0, , [2, [3, [4]]]];
  result = items.flat(3);
  items = [0, 1, 2];
  result = items.map((item) => [item, item * 10]);
  result = result.flat();
  result = items.flatMap((item) => [item, item * 10]);

  items = [0, 1, 2, , , 3, , , , 4, 5, 6];
  result = items.filter((item) => {
    return item % 2 === 0;
  });

  items = [1, 2, 3];
  result = items.reduceRight((previousItem, item) => {
    return previousItem + item;
  }, 0);

  items = ['apple', 'banana', 'grape', 'banana'];
  result = items.find((item) => {
    // console.log(item);
    return item === 'banan';
  });

  items = [0, 1, 2];
  result = items.some((item) => {
    return item < 0;
  });

  items = ['apple', 'banana', 'grape'];
  items.forEach(
    function (item, index, array) {
      // console.log(this);
      // console.log(item, index, array);
      return;
    },
    { hello: 'hello' }
  );

  items = ['apple', 'banana', 'grape'];

  items = [0, 1, 2, 3, 4, 5];
  const obj = Object.groupBy(items, (item) => {
    if (item % 2 === 0) {
      return 'even';
    }
    return 'odd';
  });
  console.log(obj);
}
