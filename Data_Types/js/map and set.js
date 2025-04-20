function example1(){
    let map = new Map();

    map.set('1', 'str1');   // a string key
    map.set(1, 'num1');     // a numeric key
    map.set(true, 'bool1'); // a boolean key
    // remember the regular Object? it would convert keys to string
    // Map keeps the type, so these two are different:

    alert( map.get(1)   ); // 'num1'
    alert( map.get('1') ); // 'str1'

    alert( map.size ); // 3
}

function example2(){    
    let john = { name: "John" };

    //for every user, let's store their visits count:
    let visitsCountMap = new Map;

    //john is the key for the map
    visitsCountMap.set(john, 123);

    alert(visitsCountMap.get(john));
}

function example3(){
    let ben = { name: "Ben" };
    let john = { name: "John" };

    let visitsCountObj = {}; //our example object

    //lets attempt to assign objects as keys:
    visitsCountObj[ben] = 134;
    visitsCountObj[john] = 231;

    //and show what the output is when the object is then referenced via the "object" key:
    alert(`Here's what we get when we call visitsCountObj[ben]: ${visitsCountObj[ben]}`);
    alert(`Here's what we get when we call visitsCountObj[john]: ${visitsCountObj[john]}`);
    
    //OK this next bit is a little cheeky, given we havent done the JSON tutorial yet...
    alert(JSON.stringify(visitsCountObj));

}