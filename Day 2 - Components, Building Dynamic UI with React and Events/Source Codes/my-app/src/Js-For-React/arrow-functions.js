const hello = function () {
  return "Hello World";
};

const hello_arrow = () => {
  return "Hello World from Arrow";
};

const hello_para = function (name) {
  return `Hello ${name}`;
};

const hello_arrow_para = (name) => {
  return `Hello ${name}`;
};


console.log(hello());
console.log(hello_arrow());
console.log(hello_para("Ashan"));
console.log(hello_arrow_para("Dimantha"));

