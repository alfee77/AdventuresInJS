'use strict';
let myCar = {
    manufacturer: "Kia",
    model: "Niro",
    Date_of_registration: 30/9/2021,
    tootHorn(){
        alert(`Beep beep! said the ${this.manufacturer} ${this.model}`);
    }
}

function example1(){
    myCar.tootHorn();
}

function example2() {
    let str = "Hello";

    alert( str.toUpperCase() ); // HELLO
}

function task1(){
    let hello = "hi";
    hello.test = 5;

    alert(hello.test);
}