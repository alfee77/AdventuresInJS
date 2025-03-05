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
            "<a href='1-helloWorld.html'>1-Hello, world!</a><br>" +
            "<a href='2-codeStructure.html'>2-Code structure - show an alert task</a><br>" +
            "<a href='4-variables.html'>4-Variables</a><br>" +
            "<a href='5-dataTypes.html'>5-Data types</a><br>" +
            "<a href='6-interaction.html'>6-Interaction: alert, prompt & confirm</a><br>" +
            "<a href='7-typeConversions.html'>7-Type conversions</a><br>" +
            "<a href='8-basicOperators.html'>8-Basic operators, maths</a><br>" +
            "<a href='9-comparisons.html'>9-Comparisons</a><br>" +
            "<a href='10-conditionals.html'>10-Conditional branching: if, '?'</a><br>" +
            "<a href='11-logicalOperators.html'>11-Logical operators</a><br>" +
            "<a href='12-nullishCoalescingOperator.html'>12-Nullish coalescing operator '??'</a><br>" +
            "<a href='13-loops.html'>13-Loops: while and for</a><br>" +
            "<a href='14-switches.html'>14-The 'switch' statement</a><br>" +
            "<a href='15-functions.html'>15-Functions</a><br>" +
            "<a href='16-functionExpressions.html'>16-Function expressions</a><br>" +
            "<a href='17-arrowFunctions.html'>17-Arrow functions</a><br>" +
        "</ol>";
}

if (folder =="Code_Quality"){
    document.getElementById("column side left").innerHTML =
    "<h2>JavaScript.info - " + folder + "</h2>" +
    "<ol>" +
        "<a href='0-index.html'>1-Home</a><br>" +
        "<a href='1-codeStyle.html'>2-Coding Style</a><br>" +
    "</ol>";
}

if (folder =="Objects"){
    document.getElementById("column side left").innerHTML =
    "<h2>JavaScript.info - " + folder + "</h2>" +
    "<ol>" +
        "<a href='0-index.html'>Home</a><br>" +
        "<a href='1-the basics.html'>1-Objects - the basics</a><br>" +
        "<a href='4-Object methods...this.html'>4-Object methods and the <code>this</code> keyword</a><br>" +
        "<a href='5-Constructor, operator new.html'>5-Constructor functions and the <code>new</code> operator</a><br>" +
        "<a href='6-Optional chaining.html'>6-Optional chaining; the <code>?.</code> construct</a><br>" +
        "<a href='7-Symbol type.html'>7-Symbol type</a><br>" +
    "</ol>";
}



document.getElementById("column side right").innerHTML =
    "<div class='image-container-right'> <img src='..\\root-images\\me.png' alt='me!'></div>"


document.getElementById("footer").innerHTML =
    "<p>These are my notes based on the <a href='https://javascript.info/'>JavaScript.info</a> tutorial.</p>"
