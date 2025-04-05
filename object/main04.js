'use strict';

// レキシカル環境で、最初にグローバルオブジェクトを作り、その時に this も登録されている。
// this はキーと VALUE のセットでグローバルオブジェクトとは別に this も元からアクセスできる一つのキーワードでグローバルオブジェクトになってる。
// それぞれのレキシカル環境ごとに this も付いている。

{
  console.log(this); // グローバルオブジェクトを指す。
  const sayThis = function () {
    console.log(this); // strict モードだと fn 内では undefined 。
  };
  sayThis();

  // this の呼ばれ方が普通の関数の呼び出しではなく、オブジェクトに登録されたメソッドとして呼び出される時の this はそのメソッド自体を指す。
  const car = {
    color: 'red',
    // sayThis: sayThis,
    sayThis, // car オブジェクト自体が返る。

    changeColor: function (color) {
      this.color = color;
      // car.color = color; // これだと car2.changeColor('white'); なのに car.color の方が white に。
    },
  };
  car.sayThis();

  const car2 = { ...car };
  car2.changeColor('white');
  console.log(car2); // >{color: 'white', ...} // 逆で c: red
  console.log(car); // >{color: 'red', ...} // 逆で c: white
}
