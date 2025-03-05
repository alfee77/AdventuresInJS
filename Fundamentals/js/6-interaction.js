'use strict'

function example1(){
    let name = prompt("What is your name?:", "Sione Tuipulotu");
    alert(`You are ${name}`);

    // Easter egg code follows:

    if (name=="Sione Tuipulotu") {
        document.getElementById("st").innerHTML = "<p>And right there is your first easter egg!:<br><br><img src='./images/st.jpeg' alt='Sione!'></p>";
    }
}

