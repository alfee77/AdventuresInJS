"use strict"

function officialNameOfJS(){
    let nameOfJavaScript = prompt("What is the official name of JavaScript?", "ECMAScript");
    let outputResponse = `Code output:<br>
                          In response to your claim that the offical name of JavaScript is: "${nameOfJavaScript}"...<br> `


    if (nameOfJavaScript == "ECMAScript"){
        outputResponse += `Right! \"${nameOfJavaScript}\" is the actual name!`;
    } else{
        outputResponse +=  `The official name of JavaScript is not \"${nameOfJavaScript}\", it is ECMAScript!`;
    }

    document.getElementById("demo").innerHTML = outputResponse;

}

function checkNumber(){
    let numberEntered = prompt("Enter a number: ", 0);

    document.getElementById("demo1").innerHTML = 
        (numberEntered > 0) ? 1 :
        (numberEntered == 0) ? 0 :
        (numberEntered < 0 ) ? -1 :
        "Invalid number entered!";
}

function sumAandB(){
    let a = prompt("Enter a", 1);
    let b = prompt("Enter b", 4);
    
    let result = ((a+b) > 4)? "Above" : "Below";
        
    document.getElementById("demo2").innerHTML = result;    
}

function checkEmpStatus(){
    let login = prompt("What is your employee status?", "Director");

    let greeting = (login == "Employee") ? "Hello" :
            (login == "Director") ? "Greetings" :
            (login == "") ? "No login" :
            "confused";

    document.getElementById("demo3").innerHTML = greeting;
}