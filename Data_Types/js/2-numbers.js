function task1(){
    let a = +prompt("Enter first number: ");
    let b = +prompt("Enter second number: ");

    alert(typeof(a));
    alert(typeof(b));

    alert(a+b);
}



document.getElementById("noField").innerHTML += 6.35.toFixed(20)+".";

function task3(){
    function readNumber(){
        let userNo;

        do {
            userNo = prompt("Enter a number: ", 0);
        }while(!isFinite(userNo))
    
        return userNo;  
    }


    alert(`Number entered: ${readNumber()}`);

}
function task4(){
    let i=9.6;
    for(let n=0; n<3; n++){
        i += 0.2;
        console.log(i);
    }
}

function task5(){
    function random(min, max){
        return Math.random()*(max-min)+min;
    }


    alert(random(1, 5))

}

function task6(){
    function randomInt(min, max){
        return Math.round(Math.random()*(max-min)+min);
    }

    alert(randomInt(1, 5))
}