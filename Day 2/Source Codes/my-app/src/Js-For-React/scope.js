console.log('Component rendering...');

var a = 10;
let b = 20;
const c = 30;

if (true) {
    var a = 40; // Re-declared in the same function scope
    let b = 50; // Block-scoped, different from the outer 'b'
    const c = 60; // Block-scoped, different from the outer 'c'
    console.log('Inside the function');
    console.log(a); // Outputs: 40
    console.log(b); // Outputs: 50
    console.log(c); // Outputs: 60
}

console.log('Outside the function');
console.log(a); // Outputs: 40 ('var' is function-scoped)
console.log(b); // Outputs: 20 (outer 'b' is unchanged)
console.log(c); // Outputs: 30 (outer 'c' is unchanged)
