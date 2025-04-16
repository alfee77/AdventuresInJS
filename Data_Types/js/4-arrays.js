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