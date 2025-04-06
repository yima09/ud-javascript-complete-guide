'use strict';

{
  function add(a, b, callback) {
    console.log(callback(a + b));
  }
  add(3, 4, (sum) => sum * 10);

  /* 仮引数持ちコールバック関数を渡すと、呼び出した関数の処理結果を受け取りコールバック関数の処理が行われる。
   */

  function val() {
    const sum = 3 + 4;
    const cb = sum * 10;
    console.log(cb);
  }
  val();
}
