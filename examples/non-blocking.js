const one = () => console.log('one');
const two = () => console.log('two');

main();
// function main() {
//   console.log('vai');
//   one();
//   two();
//   console.log('foi');
// }

async function main() {
  console.log('vai');
  await new Promise(resolve => {
    setTimeout(() => {
      one();
      resolve('foi');
    }, 10000);
  });
  two();
  console.log('foi');
}
