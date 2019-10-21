//JxBnTikksaUtXbIF7Pb9YDS6iJk0Xx36
//api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
/*problem breakdown
- create the link we can use for search
- fetch the data 
- render the data we need from JSON file
- add event listener to the button
- make css
- add some optional functionalities fx reset page...
*/

function fetchJSON(url) {
  return fetch(url).then(response => response.json());
}

function renderSearchResults(giphyList) {
  const outputGifs = document.querySelector("#gifs_output");
  outputGifs.innerHTML = "";

  giphyList.forEach(function(x) {
    const obj = x.images;
    const line = document.createElement("li");
    const image = document.createElement("img");

    for (let key in obj) {
      if (key === "original") {
        image.setAttribute("src", obj[key].url);
        image.setAttribute("alt", x.title);

        line.appendChild(image);
        outputGifs.appendChild(line);
      }
    }
  });
}
const searchButton = document.querySelector(".get_gifs");

searchButton.addEventListener("click", () => {
  const KEY = "JxBnTikksaUtXbIF7Pb9YDS6iJk0Xx36";
  const searchGif = document.getElementById("search_column").value;
  const numberOfGifs = document.getElementById("number_column").value || 3;
  const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${searchGif}&api_key=${KEY}&limit=${numberOfGifs}`;
  if (searchGif === "") {
    alert("Please enter the key world");
  }
  resetView();

  fetchJSON(searchUrl).then(data => {
    renderSearchResults(data.data);
  });
});

function resetView() {
  const searchGif = document.getElementById("search_column");
  searchGif.value = "";

  const numberOfGifs = document.getElementById("number_column");
  numberOfGifs.value = "";
}
