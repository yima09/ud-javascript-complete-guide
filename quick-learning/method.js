'use strict';

{
  const person = {
    name: 'Yoshipi',
    age: 26,
    // greet: function () { // オブジェクトの値が関数をメソッドで以下が省略記法。
    greet () {
      console.log('Hello');
    },
  };

  person.greet();
}
