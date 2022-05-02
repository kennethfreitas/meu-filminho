function sum(a, b, cb) {
  cb(a + b);
}

console.log('vai');
sum(1, 2, console.log);
console.log('foi');

function sumAsync(a, b, cb) {
  setTimeout(() => cb(a + b), 100);
}

console.log('vai');
sumAsync(1, 2, console.log);
console.log('foi');
