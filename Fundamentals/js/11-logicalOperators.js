"use strict"

function checkAgeAnd(){
    let age = prompt("Enter your age: ", 0);


    if (!(age >= 14 && age <= 90)){
        document.getElementById("demo1").innerHTML = `The age ${age} is NOT between 14 and 90`;
    } else{
        document.getElementById("demo1").innerHTML = `The age ${age} is between 14 and 90`;
    }
}

function checkAgeOr(){
    let age = prompt("Enter you age: ", 0);
    
    if (age < 14 || age > 90){
        document.getElementById("demo2").innerHTML = `The age ${age} is NOT between 14 and 90`;
    } else{
        document.getElementById("demo2").innerHTML = `The age ${age} is between 14 and 90`;
    }
    
}

function login(){
    let username = prompt("Enter username: ");

    if (username == "Admin"){
        let password = prompt("Enter password: ");
        if (password=="TheMaster"){
            document.getElementById("demo3").innerHTML = "Welcome!";
        } else if (password == null || password == ""){
            document.getElementById("demo3").innerHTML = "Login cancelled";
        } else {
            document.getElementById("demo3").innerHTML = "Wrong Password!";
        }
    } else if (username == null || username =="") {
        alert("Login cancelled");
    } else {
        alert(`I don't know anyone by the name of ${username}`);
    }
}
