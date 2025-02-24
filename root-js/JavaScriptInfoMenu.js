document.getElementById("header").innerHTML =
    "<h1>Adventures in JavaScript</h1>";

document.getElementById("topnav").innerHTML =
    "<a href='../Fundamentals/0-index.html'>Fundamentals</a>" +
    "<a href='../Code_Quality/0-index.html'>Code Quality</a>" +
    "<a href='../Objects/0-index.html'>Objects</a>";

let loc = window.location.pathname;
let dir = loc.substring(0, loc.lastIndexOf('/'));
let folder = dir.substring(dir.lastIndexOf('/') + 1);

if (folder == "Fundamentals"){
        document.getElementById("column side left").innerHTML =
        "<h2>JavaScript.info - " + folder + "</h2>" +
        "<ol>" +
            "<a href='0-index.html'>Home</a><br>" +
            "<a href='1-helloWorld.html'>Hello, World!</a><br>" +
            "<a href='2-taskShowanAlert.html'>Code Structure - show an alert task</a><br>" +
            "<a href='3-taskShowanAlertextJS.html'>Code Structure - show an alert task(external .js file)</a><br>" +
            "<a href='4-variables.html'>Variables tasks</a><br>" +
            "<a href='5-interaction.html'>Simple interaction task</a><br>" +
            "<a href='6-conditionals.html'>Conditional branching: if, '?'</a><br>" +
            "<a href='7-switches.html'>Switch statement</a><br>" +
            "<a href='8-logicalOperators.html'>Logical Operators - Check age range</a><br>" +
            "<a href='9-loginLogic.html'>Logical Operators - Login Logic</a><br>" +
            "<a href='10-loops.html'>Loops: while and for</a><br>" +
            "<a href='11-functions.html'>Functions</a><br>" +
            "<a href='12-functionExpressions.html'>Function expressions</a><br>" +
            "<a href='13-arrowFunctions.html'>Arrow functions</a><br>" +
        "</ol>";
}

if (folder =="Code_Quality"){
    document.getElementById("column side left").innerHTML =
    "<h2>JavaScript.info - " + folder + "</h2>" +
    "<ol>" +
        "<a href='0-index.html'>Home</a><br>" +
        "<a href='1-codeStyle.html'>Coding Style</a><br>" +
    "</ol>";
}

if (folder =="Objects"){
    document.getElementById("column side left").innerHTML =
    "<h2>JavaScript.info - " + folder + "</h2>" +
    "<ol>" +
        "<a href='0-index.html'>Home</a><br>" +
        "<a href='1-the basics.html'>Objects - the basics</a><br>" +
        "<a href='4-Object methods...this.html'>Object methods and the <code>this</code> keyword</a><br>" +
        "<a href='5-Constructor, operator new.html'>Constructor functions and the <code>new</code> operator</a><br>" +
    "</ol>";
}



document.getElementById("column side right").innerHTML =
    "<div class='image-container-right'> <img src='..\\root-images\\me.png' alt='me!'></div>"


document.getElementById("footer").innerHTML =
    "<p>These are my notes based on the <a href='https://javascript.info/'>JavaScript.info</a> tutorial.</p>"
