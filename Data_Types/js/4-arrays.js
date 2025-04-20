function example1(){
    //mix of values
    let arr = ["Potato", { name: "Alistair"}, true, function() { alert("Hello!")}];

    //get the object at index 1, and then alert the value associated with the "name" key:
    alert(arr[1].name);

    //get the function at index 3 and run it:
    arr[3]();
}


function example2(){
    let vegetables = ["Potato", "Tomato", "Pepper"];

    alert(vegetables.pop());

    alert(vegetables);

}

function example3(){
    let vegetables = ["Potato", "Tomato", "Pepper"];

    alert(vegetables.push("Carrot"));

    alert(vegetables);
}

function example4(){
    let vegetables = ["Potato", "Tomato", "Pepper"];

    alert(vegetables.shift());

    alert(vegetables);

}

function example5(){
    let vegetables = ["Potato", "Tomato", "Pepper"];

    alert(vegetables.unshift("Artichoke"));

    alert(vegetables);
}

function task1(){
    let fruits = ["Apples", "Pear", "Orange"];

    // push a new value into the "copy"
    let shoppingCart = fruits;
    shoppingCart.push("Banana");

    // what's in fruits?
    alert( fruits.length ); // ?

}


function task2(){
    let styles = ["Jazz", "Blues"];
    alert(styles)

    styles.push("Rock-n-Roll");
    alert(styles);

    styles[Math.ceil(styles.length/2)-1] = "Classics";
    alert(styles);

    alert(styles.shift());
    alert(styles);

    styles.unshift("Rap", "Reggae");
    alert(styles);
}

function task3(){
    arr=[];

    function sumInput(){
        let input = +prompt(`Enter numbers one at a time: `, `0-10`);
        let runTot=0;
        while (!isNaN(input) && input){
            arr.push(input);
            input = 0;
            input = +prompt("Next number: ", `0-10 (remember non-numeric entry to stop!)`);
        }
        for(let i of arr){
            runTot += i;
        }
        return runTot;
    }

    
    console.log(arr);
    console.log(sumInput());
}