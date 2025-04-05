'use strict';

{
  const sayThis = () => {
    console.log(this);
  };

  const logging = (cb) => {
    console.log(cb());
  };

  const car = {
    color: 'red',
    sayThis,
    changeColor: function (color) {
      // logging(function () {
        // return this.color; // undefined エラー。
      logging(() => {
        return this.color; // red
      });
      this.color = color;
    },
  };
  car.sayThis(); // アロー関数なので this を持たずアウターを参照してグローバルオブジェクトが返る。

  car.changeColor('white');
}
