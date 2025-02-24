function example1(){
    function User(name){
        this.name = name;
        this.isAdmin = false;
    }

    let user1 = new User("Thomas");
    let user2 = new User("Fiona");

    alert(`${user1.name} says hi! ${user2.name} says howdy!`);
}