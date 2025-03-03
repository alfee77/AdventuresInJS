function example1(){
    let id1 = Symbol("id");
    let id2 = Symbol("id");
    
    alert(id1 === id2); // false
}

function example2(){
    let id = Symbol("id");
    let user = {
        name: "John",
        age: 30,
        [id]: 123
    };
    for (let key in user) alert(key); // name, age (no symbols)
    // the direct access by the symbol works
    alert( "Direct: " + user[id] ); // Direct: 123
}

function example3(){
    let id = Symbol("id");
    let user = {
        [id]: 123
    };
    let clone = Object.assign({}, user);
    alert( clone[id] ); // 123
}