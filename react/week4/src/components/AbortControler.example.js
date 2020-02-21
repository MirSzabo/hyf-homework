//I found this example in js which looks like can be used but I didn't have time to make it in react
//I will try next week
const SEARCH_URL = `https://api.github.com/search/users?q=${input}`;

const inputField = document.getElementById("form");
let controller;

inputField.addEventListener("keydown", () => {
  if (controller) {
    controller.abort();
  }
  if (AbortController) {
    controller = new AbortController();
    var signal = controller.signal;
  }

  fetch(SEARCH_URL, { signal })
    .then((response) => {
      console.log("response", response);
      response.json().then(data => {
        
      });
    })
    .catch((e) => {
      if (e.code === 20) {
        console.log("Waiting");
      } else {
        setError(error.message);
        console.log(error);
      }
    });
});
