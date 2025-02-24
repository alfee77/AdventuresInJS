function theCode1(){
    let x = Number(prompt("Enter a value for x:"));
    let y = Number( prompt("Enter a value for y:"));
    alert(sum(x, y));
}

let sum = (a, b) => a + b;


let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

function theCode2(){
    ask("Do you agree?", 
        () => alert("You agreed :)"), 
        () => alert("Not today then!"))
}