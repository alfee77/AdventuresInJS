document.getElementById("header").innerHTML =
  "<a href=https://alfee77.github.io/AdventuresInJS/><h1>Adventures in JavaScript</h1></a>";

document.getElementById("topnav").innerHTML =
  "<a href='https://alfee77.github.io/AdventuresInJS/Fundamentals/0-index.html'>Fundamentals</a>" +
  "<a href='https://alfee77.github.io/AdventuresInJS/Code_Quality/0-index.html'>Code Quality</a>" +
  "<a href='https://alfee77.github.io/AdventuresInJS/Objects/0-index.html'>Objects</a>" +
  "<a href='https://alfee77.github.io/AdventuresInJS/Data_Types/0-index.html'>Data Types</a>" +
  "<a href='https://alfee77.github.io/AdventuresInJS/Asynchrony/0-index.html'>Asynchrony</a>";

let loc = window.location.pathname;
let dir = loc.substring(0, loc.lastIndexOf("/"));
let folder = dir.substring(dir.lastIndexOf("/") + 1);

if (folder == "Fundamentals") {
  document.getElementById("column side left").innerHTML =
    "<h2>" +
    folder +
    "</h2>" +
    "<ol>" +
    "<li><a href='1-helloWorld.html'>Hello, world!</a></li>" +
    "<li><a href='2-codeStructure.html'>Code structure - show an alert task</a></li>" +
    "<li><a href='4-variables.html'>Variables</a></li>" +
    "<li><a href='5-dataTypes.html'>Data types</a></li>" +
    "<li><a href='6-interaction.html'>Interaction: alert, prompt & confirm</a></li>" +
    "<li><a href='7-typeConversions.html'>Type conversions</a></li>" +
    "<li><a href='8-basicOperators.html'>Basic operators, maths</a></li>" +
    "<li><a href='9-comparisons.html'>Comparisons</a></li>" +
    "<li><a href='10-conditionals.html'>Conditional branching: if, '?'</a></li>" +
    "<li><a href='11-logicalOperators.html'>Logical operators</a></li>" +
    "<li><a href='12-nullishCoalescingOperator.html'>Nullish coalescing operator '??'</a></li>" +
    "<li><a href='13-loops.html'>Loops: while and for</a></li>" +
    "<li><a href='14-switches.html'>The 'switch' statement</a></li>" +
    "<li><a href='15-functions.html'>Functions</a></li>" +
    "<li><a href='16-functionExpressions.html'>Function expressions</a></li>" +
    "<li><a href='17-arrowFunctions.html'>Arrow functions</a></li>" +
    "</ol>";
}

if (folder == "Code_Quality") {
  document.getElementById("column side left").innerHTML =
    "<h2>" +
    folder +
    "</h2>" +
    "<ol>" +
    "<li><a href='1-codeStyle.html'>Coding Style</a></li>" +
    "</ol>";
}

if (folder == "Objects") {
  document.getElementById("column side left").innerHTML =
    "<h2>" +
    folder +
    "</h2>" +
    "<ol>" +
    "<li><a href='1-the basics.html'>Objects - the basics</a></li>" +
    "<li><a href='4-Object methods...this.html'>Object methods and the <code>this</code> keyword</a></li>" +
    "<li><a href='5-Constructor, operator new.html'>Constructor functions and the <code>new</code> operator</a></li>" +
    "<li><a href='6-Optional chaining.html'>Optional chaining; the <code>?.</code> construct</a></li>" +
    "<li><a href='7-Symbol type.html'>Symbol type</a></li>" +
    "</ol>";
}

if (folder == "Data_Types") {
  document.getElementById("column side left").innerHTML =
    "<h2>" +
    folder +
    "</h2>" +
    "<ol>" +
    "<li><a href='1-methodsOfPrimitives.html'>Methods of primitives</a></li>" +
    "<li><a href='2-numbers.html'>Numbers</a></li>" +
    "<li><a href='3-strings.html'>Strings</a></li>" +
    "<li><a href='4-arrays.html'>Arrays</a></li>" +
    "<li><a href='5-array methods.html'>Array methods</a></li>" +
    "<li><a href='6-iterables.html'>Iterables</a></li>" +
    "<li><a href='7-map and set.html'>Map and Set</a></li>" +
    "<li><a href='8-weakmap and weakset.html'>WeakMap and WeakSet</a></li>" +
    "<li><a href='9-Objects.keys, values, entries.html'>Objects.keys, values, entries</a></li>" +
    "<li><a href='10-Destructuring assignment.html'>Destructuring assignment</a></li>" +
    "<li><a href='11-date and time.html'>Date and time</a></li>" +
    "<li><a href='12-JSON methods, toJSON.html'>JSON methods, toJSON</a></li>" +
    "</ol>";
}

if (folder == "Asynchrony") {
  document.getElementById("column side left").innerHTML =
    "<h2>" +
    folder +
    "</h2>" +
    "<ol>" +
    "<li><a href='1-introduction.html'>Introduction</a></li>" +
    "</ol>";
}

document.getElementById("column side right").innerHTML =
  "<div class='image-container-right'> <img src='../root-images/me.png' alt='me!'></div>";

if (document.querySelector("#docname")) {
  document.getElementById("column side right").innerHTML =
    "<div class='image-container-right'> <img src='./root-images/me.png' alt='me!'></div>";
} else {
}

document.getElementById("footer").innerHTML =
  "<p>These are my notes based on the <a href='https://javascript.info/'>JavaScript.info</a> tutorial.</p>";
