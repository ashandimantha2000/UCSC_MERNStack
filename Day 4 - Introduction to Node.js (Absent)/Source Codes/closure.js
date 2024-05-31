function outerFunction() {
  let outerVariable = "I am outer variable";
  return function innerFunction() {
    console.log(outerVariable);
  };
}

let myClosure = outerFunction();
myClosure();
