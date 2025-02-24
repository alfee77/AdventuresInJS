"use strict"
function login(){
    let username = prompt("Enter username: ");

    if (username == "Admin"){
        let password = prompt("Enter password: ");
        if (password=="TheMaster"){
            document.getElementById("demo").innerHTML = "Welcome!";
        } else if (password == null || password == ""){
            document.getElementById("demo").innerHTML = "Login cancelled";
        } else {
            document.getElementById("demo").innerHTML = "Wrong Password!";
        }
    } else if (username == null || username =="") {
        alert("Login cancelled");
    } else {
        alert(`I don't know anyone by the name of ${username}`);
    }
}