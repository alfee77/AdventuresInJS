function pow(x, n) {
    if (n <= 0) {
        alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
        return;
    }
    
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("Enter a value for x:");
let n = prompt("Enter a value for n:");

alert(pow(x, n));
