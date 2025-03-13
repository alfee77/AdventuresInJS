function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

function example1() {
    setTimeout( () => { document.getElementById("output").innerHTML = "Ready...."; }, 1000);
    setTimeout( () => { document.getElementById("output").innerHTML += "Steady...."; }, 2000);
    setTimeout( () => { document.getElementById("output").innerHTML += "Go!"; }, 3000);
    setTimeout( () => { document.getElementById("output").innerHTML = "And they are off!"; }, 3500);
  
}

//Ask the browser to return an object representing the HTML &lt;button&gt;
//element that matches the button description (OK) below</span>
let okay = document.querySelector('button.OK');

//Now register a callback function to be invoked when the user
//clicks that button.</span>
okay.addEventListener('click', applyUpdate);

function applyUpdate(){
    alert('Update applied!');
    console.log(`Fuckin genius Al!`)
}

function getCurrentVersionNumber(versionCallback){ //note callback argument
    //Make scripted HTTP request to backend version API

    let request = new XMLHttpRequest();
    request.open("GET", "http://www.example.com/api/version");
    request.send();

    //Register a call back that will be invoked when the response arrives
    request.onload = function() {
        alert(`Sumfink back`);
        if(request.status === 200){
            //If HTTP status is good, get version number and callback
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null, currentVersion);
            console.log("I'm back!");
        } else {
            //otherwise report an error to the callback
            versionCallback(this.response.statusText, null);
            alert("It's fucked!");
        }
    };



}

getCurrentVersionNumber(applyUpdate);

window.addEventListener('load', pageLoaded());

    function pageLoaded() {
        let long;
        let lat;
        let temperatureDescription = document.querySelector(".temperature-description");
        let temperatureDegree = document.querySelector(".temperature-degree");
        let location = document.querySelector(".location");
        let dateTime = document.querySelector(".date-time");


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);

            async function success(myPosition) {
                // console.log(myPosition);
                long = myPosition.coords.longitude;
                lat = myPosition.coords.latitude;
                console.log(Date(myPosition.timestamp));

                const apicall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9220f1568b4e8b1b2fe4c044af2c541f`;

                let prom = await fetch(apicall);
                let response;

                if (prom.ok) {
                    response = await prom.json();
                }

                const desc = response.weather[0].description;
                const temp = Math.round(response.main.temp - 273.15);
                const loc = response.name;
                const dateTimeInfo = Date(myPosition.timestamp);            

                //set DOM Elements from the API call
                temperatureDescription.textContent += desc;
                temperatureDegree.textContent += temp;
                location.textContent += loc;
                dateTime.textContent += dateTimeInfo;
                
                console.log(location);


            }
        }
    }
