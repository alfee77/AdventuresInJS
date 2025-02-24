"use strict"

function isPrime(){
    let range = prompt("Enter the range of numbers to check:");
    let rangeIsPrime = true;
    let primeList = "";

    for(let presentNumberInRange=2; presentNumberInRange < range; presentNumberInRange++){
        let presentNumberInRangeIsPrime = true;
        if (range % presentNumberInRange == 0){
            rangeIsPrime = false;
        }

        for (let j=2; j<presentNumberInRange; j++){
            if(presentNumberInRange % j == 0){
                presentNumberInRangeIsPrime = false;
                j=2;
                break;
            }
        }

        if(presentNumberInRangeIsPrime){
            primeList += presentNumberInRange + "<br>";
        }
        // Check to see if presentNumberInRange is a prime
    }

    if(rangeIsPrime){
        document.getElementById("demo").innerHTML = `${range} is a prime!`;
    }else if(!rangeIsPrime){
        document.getElementById("demo").innerHTML = `${range} is NOT a prime!`;
    }
    document.getElementById("demo1").innerHTML = `List of primes: <br> ${primeList}`
}