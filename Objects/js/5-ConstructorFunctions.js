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

function task1(){

    let obj = {};
    function A() { return obj }
    function B() { return obj }

    let a = new A();
    let b = new B();

    alert( a == b ); // true
}

function task2(){
    let calculator = new Calculator();
    calculator.read();

    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );


    function Calculator(){
        this.read = function(){
            this.a = +prompt("Enter a value for a: ", "0");
            this.b = +prompt("Enter a value for b: ", "0");
        }
        this.sum = function(){
            return this.a + this.b;

        }
        this.mul = function(){
            return this.a * this.b;
        }
    }
}

function task3(){
    let accumulator = new Accumulator(1); // initial value 1

    accumulator.read(); // adds the user-entered value
    accumulator.read(); // adds the user-entered value

    alert(accumulator.value); // shows the sum of these values

    function Accumulator(startingValue){
        
        this.value = +startingValue;

        this.read = function(){
            this.value += +prompt("How much to add? ", 0);
        };
    }

}