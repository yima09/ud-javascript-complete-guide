'use strict';

// クロージャでプライベート変数を作る
let generatePerson = (name) => {
  let age = 0;
  return {
    getName: () => name,
    getAge: () => age,
    incrementAge: () => {
      age += 1;
    },
  };
};

const yoshipi = generatePerson('Yoshipi');
console.log(yoshipi.getAge()); // 0
yoshipi.incrementAge();
console.log(yoshipi.getAge()); // 1
const tom = generatePerson('Tom');
tom.incrementAge();
console.log(tom.getAge()); // 1
