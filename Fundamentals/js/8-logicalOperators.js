"use strict"

function checkAgeAnd(){
    let age = prompt("Enter your age: ", 0);


    if (!(age >= 14 && age <= 90)){
        document.getElementById("demo").innerHTML = `The age ${age} is NOT between 14 and 90`;
    } else{
        document.getElementById("demo").innerHTML = `The age ${age} is between 14 and 90`;
    }
}

function checkAgeOr(){
    let age = prompt("Enter you age: ", 0);
    
    if (age < 14 || age > 90){
        document.getElementById("demo1").innerHTML = `The age ${age} is NOT between 14 and 90`;
    } else{
        document.getElementById("demo1").innerHTML = `The age ${age} is between 14 and 90`;
    }
    
}
