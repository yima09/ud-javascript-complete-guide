// (...残余引数)
const sum = (a, ...nums) => {
  console.log(a); // 1
  console.log(nums); // 353, 配列の残りの扱いで、引数後方に付ける。
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
console.log(sum(1, 3, 5, 3));
