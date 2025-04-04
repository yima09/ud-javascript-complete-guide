// || 左が Truthy で左
ok = true || false;
console.log(ok); // true
ok = false || true;
console.log(ok); // true
ok = 'A' || 'B';
console.log(ok); // A
ok = 0 || 'B';
console.log(ok); // B

// && 左が Falsy で左
ok = true && false;
console.log(ok); // false
ok = false && true;
console.log(ok); // false
ok = 'A' && 'A';
console.log(ok); // A
ok = 'A' && 'B';
console.log(ok); // B
ok = 0 && 'B';
console.log(ok); // 0

// ?? 左が null undefined でなければ左。&& || と同時に使えない。
let username = null ?? 'User';
console.log(username); // User
username = undefined ?? 'User';
console.log(username); // User

username = true ?? 'User';
console.log(username); // true
username = true || 'User';
console.log(username); // true
username = true && 'User';
console.log(username); // User
username = '' ?? 'User';
console.log(username); //  
username = '' || 'User';
console.log(username); // 'User'
username = '' && 'User';
console.log(username); //  
