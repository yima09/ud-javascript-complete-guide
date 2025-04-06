'use strict';

{
  const person = {
    name: 'Yoshipi',
    age: 26,
    gender: 'male',
  };
  // let old = person.age;
  // let gender = person.gender;
  let { age: old, gender } = person;
  console.log(old);
  console.log(gender);
  let fruits = ['Apple', 'Banana', 'Grape'];
  // let A = fruits[0]
  // let B = fruits[1]
  let [A, B] = fruits;
  console.log(A);
  console.log(B);
  function myFunc({ age }) {
    console.log(age);
  }
  myFunc(person);
}
