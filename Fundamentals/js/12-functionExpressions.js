'use strict'

function sayHi(){
    alert(`Hi!`);
}

let sayHello = function(){
    alert(`Hello!`);
}

function retContentsofSayHifunc(){
    document.getElementById("demo").innerHTML = sayHi;
}

function retContentsofSayHellofunc(){
    document.getElementById("demo1").innerHTML = sayHello;
}



function ask(question, yes, no) {
    let answer = confirm(question);
    if (answer) yes()
    else no();    
}
  
function clickedOk() {
    alert( "You agreed." );
}
  
function clickedCancel() {
    alert( "You canceled the execution." );
}

  // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);
  
