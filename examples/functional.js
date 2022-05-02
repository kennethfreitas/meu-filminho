const sum = function (a, b) {
  return a + b;
};

let name;

console.log(sum(2, 2));

function greaterThan(base) {
  return number => number > base;
}

greaterThan(10)(11);

const greaterThan10 = greaterThan(10);

console.log(greaterThan10(50));

function getRequestUrl(host, resource, id) {
  return `${host}/${resource}/${id}`;
}

const genRequestUrl = host => resource => id => getRequestUrl(host, resource, id);

const amazonUrl = genRequestUrl('www.amazon.com');
const amazonProduct = amazonUrl('product');

console.log(amazonProduct('id'));
