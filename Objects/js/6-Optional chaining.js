function example1(){
    let user = {}; //a user object without an address</span>

    try{
        alert(user.address.street);//attempt to grab that non-existent address. FAIL!!</span>
    }catch(err){
        alert(err.message)

    }
}

function example2(){
    let user = {}; // user has no address
    alert( user?.address?.street ); // undefined (no error)
}

function example3(){
    let user = null;
    let x = 0;
    

    user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

    alert(x); // 0, value not incremented
}

function example4(){
    let userAdmin = {
        admin() {
            alert("I am admin");
        }
    };
    
    let userGuest = {};
    userAdmin.admin?.(); // I am admin
    userGuest.admin?.(); // nothing happens (no such method)
}

function example5(){
    let key = "firstName";

    let user1 = {
        firstName: "John"
    };

    let user2 = null;

    alert( user1?.[key] ); // John
    alert( user2?.[key] ); // undefined
}