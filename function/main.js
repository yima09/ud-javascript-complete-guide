const person = {
  name: 'Yoshipi',
  sayHi: function () {
    return { // 戻り値がオブジェクトの場合、
      a: 'a',
      sayHello: function () {
        'Hello'
      },
    };
  },
};

console.log(person.sayHi().sayHello); // 更に .キー で扱える。
