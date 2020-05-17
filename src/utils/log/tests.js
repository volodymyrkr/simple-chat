function parseArguments(data) {
  let result = [...arguments].map(function (item) {
    return `${item}`;
  }).reduce((result, item) => `${result} ${item}`);
  return result;
}

function d() {
  return parseArguments(...arguments)
}

console.log(d({"zxc":"asd"}, 1, 2, "asd"));

