const user = (name, message = `${name}!`) => `Hi ${message}`; // デフォルトパラメータは後側で付ける。前側のパラメータを引数にできる。

console.log(user('Taro'));
