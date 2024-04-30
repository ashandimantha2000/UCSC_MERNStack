function printResult(result) {
    console.log("The result is: " + result);
  }
  
  function printResult2(result) {
      console.log("The is a different function: " + result);
  }
  
  function calculateSum(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum); // The callback function is called immediately with the result.
  }
  
  calculateSum(5, 7, printResult); // The result is: 12
  calculateSum(1, 2, printResult2); // The result is: 12