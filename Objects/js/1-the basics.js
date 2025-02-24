'use strict'

function objectCreation(){

    let user = {}
    user.name = `John`;
    user.surname = `Smith`;
    

    alert(user.name + " " + user.surname);

    user.name = `Pete`;

    alert(user.name + " " + user.surname);

    delete user.name;

    alert(user.name + " " + user.surname);
}

function isEmpty(obj){
    for(let prop in obj){//this for loop will only start if the object has stuff in it; ergo if it starts, the object isn't empty, and should return false.
       return false;
    }
    return true;//this stage is only reached if the for loop hasnt started; i.e. the object is empty therefor isEmpty() should return true
}

function todaysSchedule(){
    let schedule = {};

    alert(isEmpty(schedule) + ` - Your schedule is empty!`); // true

    schedule["8:30"] = "get up";

    alert(isEmpty(schedule) + ` - You've got shiz on!`); // false
}

function taskThree(){
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    let sum = 0;

    for(let key in salaries){
        sum += salaries[key];
    }

    alert(`The total wage bill is $${sum}`);
}

function taskFour(){
    let menu = {
        width: 200, 
        height: 300,
        title: "My Menu"
    };

    multiplyNumeric(menu);

    alert(`Width is now ${menu.width} and height is now ${menu.height}`);
}

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] == "number") obj[key] *= 2;
    }
}

