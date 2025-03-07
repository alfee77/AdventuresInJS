function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

function example1() {
    setTimeout(() => { document.getElementById("output").innerHTML = "Ready...."; }, 1000);
    setTimeout(() => { document.getElementById("output").innerHTML += "Steady...."; }, 2000);
    setTimeout(() => { document.getElementById("output").innerHTML += "Go!"; }, 3000);
    setTimeout(() => { document.getElementById("output").innerHTML = "And they are off!"; }, 3500);
}