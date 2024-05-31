function createCounter(){
    let count = 0;
    return function increment(){
        count++;
        return count;
    }
}

let inc = createCounter();
console.log(inc())
console.log(inc())