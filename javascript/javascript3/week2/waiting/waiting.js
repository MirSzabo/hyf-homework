function fetchData(url) {
  return fetch(url).then(response => response.json());
}

setTimeout(() => {
  fetchData("http://api.open-notify.org/astros.json").then(data => {
    renderInfo(data);
  });
}, 3000);

function renderInfo(data) {
  console.log(JSON.stringify(data));
}

//Optional Now do all of these things using chaining
fetch("http://api.open-notify.org/astros.json")
  .then(response => response.json())
  .then(data => {
    setTimeout(function() {
      console.log(JSON.stringify(data));
    }, 3000);
  });
