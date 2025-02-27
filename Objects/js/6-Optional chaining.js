function example1(){
    let user = {}; //a user object without an address</span>

    try{
        alert(user.address.street);//attempt to grab that non-existent address. FAIL!!</span>
    }catch(err){
        alert(err.message)

    }
}