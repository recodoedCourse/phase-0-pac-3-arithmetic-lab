function add(a,b) {
    let result = a + b;
    return result
}

function subtract(a,b) {
    let result = a - b;
    return result
}

function multiply(a,b) {
    let result = a * b;
    return result
}

function divide(a,b) {
    let result = a / b;
    return result
}

function increment(n) {
    n += 1;
    return n
}

function decrement(n) {
    n -= 1;
    return n
}

function makeInt(string) {
    return parseInt(string, 10);
}

function preserveDecimal(string) {
    return parseFloat(string, 10);
}