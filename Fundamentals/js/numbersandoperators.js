'use strict'

let a = prompt("First number", 1);
let b = prompt("Second number", 1);

document.getElementById("demo").innerHTML = `a+b without type conversion: ${a+b}`;
document.getElementById("demo1").innerHTML = `a+b with type conversion: ${Number(a)+Number(b)}`;
