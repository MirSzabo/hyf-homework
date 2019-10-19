//1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

//2. calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function logOut(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
logOut(2, "This is printed after 2 seconds delay");
logOut(4, "This is printed after 4 seconds delay");
logOut(6, "This is printed after 6 seconds delay");

//3. Create a button in html. When clicking this button: Called after 5 seconds 5 seconds after the button is clicked.
const logOutButton = document.getElementById("button");
logOutButton.addEventListener("click", () => {
  logOut(5, "5 seconds after button is clicked");
});

//4.Try call the third function once with the Earth function and once with the Saturn function.
let earthLogger = function() {
  console.log("Earth");
};

let saturnLogger = function() {
  console.log("Saturn");
};

let planetLogger = function(planetLogFunction) {
  planetLogFunction();
};

planetLogger(earthLogger);
planetLogger(saturnLogger);

//5. Create a button with the text called "Log location". location (latitude, longitude) of the user should be logged out using api
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
const locationButton = document.getElementById("locationButton");
locationButton.addEventListener("click", getLocation);

function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(`This is the latitude ${position.coords.latitude}`);
    console.log(`This is the longitude ${position.coords.longitude}`);
  });
}

//6. Optional Now show that location on a map using fx the Google maps api
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

//7. Try and call this function with different delays and different callback functions
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}

runAfterDelay(3, function() {
  console.log("Should be logged after 3 seconds");
});
runAfterDelay(7, function() {
  console.log("Should be logged after 7 seconds");
});

//8. If a double click has been detected, log out the text: "double click!"
//https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
window.addEventListener("dblclick", () => {
  console.log("double click!");
});

//9. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  function logFunnyJoke() {
    console.log("Question: How long does the loop last? Answer: For a while");
  }
  function logBadJoke() {
    console.log("Want to hear a javascript joke? I'll callback later.");
  }

  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}
jokeCreator(true);
jokeCreator(false);

//10. Function as a variable
//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
let arrayOfFunctions = [
  function() {
    console.log("First function");
  },
  function() {
    console.log("Second function");
  },
  function() {
    console.log("Third function");
  }
];
//first option
for (let key in arrayOfFunctions) {
  arrayOfFunctions[key]();
}
//second option
for (let i = 0; i < arrayOfFunctions.length; ++i) {
  arrayOfFunctions[i]();
}

//Create a function as a const and try creating a function normally. Call both functions.
const myConstFunction = function() {
  console.log("const");
};
function normalFunction() {
  console.log("normal");
}
myConstFunction();
normalFunction();

//Create an object that has a key whose value is a function. Try calling this function.
let objectOfFunction = {
  key: function() {
    console.log("function in object");
  }
};
objectOfFunction.key();
