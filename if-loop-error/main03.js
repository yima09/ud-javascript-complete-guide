// 74. try catch

// console.log(chocolate); // 未定義エラーで止まる。
try {
  console.log(chocolate); // 未定義エラーだが無視される。
} catch {}

try {
  console.log('1'); // 1
  console.log(chocolate); // エラーでスキップ。
  console.log('2'); // 飛ばされる。
  // console.log( // SyntaxError は通常通りエラーで止まる。
} catch {
  try {
    console.log(chocolate); // エラーでスキップ。
  } catch {
  console.log('3'); // 3
  }
  console.log('4'); // 4
}
console.log('5'); // 5

try {
  console.log('try'); // try
  console.log(chocolate); // エラーでスキップ。
} catch {
  console.log('catch'); // catch
} finally {
  console.log('finally'); // finally
}

try {
  console.log('try'); // try
} catch {
  console.log('catch'); // エラーが無いのでスルー。
} finally {
  console.log('finally'); // finally
}
