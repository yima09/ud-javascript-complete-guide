'use strict';

{
  const interests = 'interests';
  const person = {
    name: 'Yoshipi',
    age: 30,
    greeting: function () {
      return 'hello';
    },
    const: 'const', // 予約語可。
    'current city': 'Tokyo',
    3: 3, // 数字のみ。
    3.1: 3.1, // 少数のみ。
    // -3: -3, // 演算子からは不可。
    [interests]: ['music', 'travel'],
  };

  console.log(person.name); // Yoshipi
  console.log(person['name']); // Yoshipi
  console.log(person['greeting']); // ƒ () { return 'hello'; }
  console.log(person['greeting']()); // hello
  console.log(person['current city']) // Tokyo
  console.log(person[3]) // 3
  console.log(person.interests) // (2) ['music', 'travel']
  console.log(person[interests]) // (2) ['music', 'travel']
}