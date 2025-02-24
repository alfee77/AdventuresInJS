function example1() {
    function User(name) {
        this.name = name;
        this.isAdmin = false;
    }

    let user1 = new User("Thomas");
    let user2 = new User("Fiona");

    alert(`${user1.name} says hi! ${user2.name} says howdy!`);
}

function example2() {
    function User(name="Alistair", age=32, occupation="JSMonkey") {
        this.name = name;
        this.age = age;
        this.occupation = occupation;

        this.sayHi = function () {
            alert(`My name is: ${this.name}, and I'm ${this.age} years old. I fill my day working as a(n) ${this.occupation}`);
        };
    }

    let john = new User("John", 47, "Electrical Engineer");

    john.sayHi(); // My name is: John</span>
        
    /*
    john = {
        name: "John",
        sayHi: function() { ... }
    }
    */
}