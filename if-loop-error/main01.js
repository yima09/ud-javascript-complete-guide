// && 左が Truthy で右
ok = true && false;
console.log(ok); // false
ok = false && true;
console.log(ok); // false
ok = "A" && "A";
console.log(ok); // A
ok = "A" && "B";
console.log(ok); // B
ok = 0 && "B";
console.log(ok); // 0

// || 左が Truthy で左
ok = true || false;
console.log(ok); // true
ok = false || true;
console.log(ok); // true
ok = "A" || "B";
console.log(ok) // A
ok = 0 || "B";
console.log(ok); // B