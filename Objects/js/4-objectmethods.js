function example1() {

  let user = {
    name: "John",
    age: 30
  };


  user.sayHi = function () {
    alert("Hi!");
  }

  user.sayHi();

}


function example2() {
  let user = {
    name: "John",
    age: 30
  };


  function sayHi() {
    alert("Hi!");
  }

  user.sayHi = sayHi;

  user.sayHi();


}

function example3() {
  let user = {
    name: "John",
    age: 30,
    sayHi: function () {
      alert("Hi!");
    }
  }

  user.sayHi();
}

function example4() {
  let user = {
    name: "John",
    age: 30,
    sayHi() {
      alert("Hi!");
    }
  }

  user.sayHi();
}

function example5() {
  let user = {
    name: "John",
    age: 30,
    sayHi() {
      alert(`Hi ${this.name}!`);
    }
  }

  user.sayHi();
}

function task1() {
  function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }

  let user = makeUser();

  alert(user.ref.name); // What's the result?
}

function task2() {
  let calculator = {
    read() {
      this.a = +prompt("Enter a value for a: ", 1);
      this.b = +prompt("Enter a value for b: ", 2);
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },

  }

  calculator.read();
  alert(`${calculator.a} + ${calculator.b} = ${calculator.sum()}`);
  alert(`${calculator.a} * ${calculator.b} = ${calculator.mul()}`);
}
