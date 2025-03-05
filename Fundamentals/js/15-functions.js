'use strict'

function checkAges(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function testCheckAges(){
    alert(checkAges(+prompt(`What age are you?`)));
}

function checkAge(age){
    return (age > 18) || confirm('Did maw and paw let ye?');
}

function testCheckAge() {
    alert(checkAge(+prompt("What age are you?")));
}

function min(a, b){
    return (a < b) ? a : b;
}

function testMin(){
    let firstNo = +prompt("Insert first number:");
    let secondNo = +prompt("Insert second number:");
    alert(`The smaller of the two is: ${min(firstNo, secondNo)}`);
}
    

function outerFruit(){
    let fruit = "banana";
    
    eatFruit();

    
    function eatFruit(){
        let vegetable = `tomato`;
        alert(`I like ${fruit}!`);
        alert(`Is ${vegetable} really a vegatable? Or is it a fruit?`);
    }

    alert(`out here you can still see ${fruit}.`);

    try{
        alert(`Not so sure about ${vegetable}`);
    }catch(err){
        alert(`Just not possible! A ${err.name} has been thrown. ${err.message}`);
    }
}



function pow(x, n){
    let result = x;

    for(let i=1; i < n; i++){
        result *=x;
    }

    return result;
}

function testPow(){
    let xval = +prompt("Enter a value for x: ");
    let expval = +prompt("Enter an exponent: ");

    if (expval < 1){
        alert(`${expval} is not a valid exponent`);
    } else {
        alert(pow(xval, expval));
    }
}

function demoAnnounce(){
    announce(prompt(`Enter title: `, `Mr`), prompt(`Enter name`, `Jones`));

}

function announce(title, name){
    alert(`Welcome ${title} ${name}`);
 }