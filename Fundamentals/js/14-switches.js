"use strict"
function switchDemo(){
    let a = +prompt('Input 0, 1, 2 or 3: ', '');

    switch(a) {
        case 0:
            alert (0);
            break;
    
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert('2,3');
            break;

    }
}

function ifElseDemo(){
    let browser = prompt("What's your favourite browser?", "Edge");

    if (browser == "Edge"){
        alert("You've got the edge!");
    } else if (browser == "Chrome" ||
            browser == "Firefox" ||
            browser == "Safari" ||
            browser == "Opera"){
                alert("OK we support these browsers too!");
    } else {
        alert("Hopefully this looks OK!?!?");
    }
}   
