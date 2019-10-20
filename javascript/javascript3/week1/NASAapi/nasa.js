//https://api.nasa.gov/#main-content
//https://api.nasa.gov/planetary/apod?api_key=Gylwx14uRh5flaedPrBa3R7hmi097pUdGPI8ZxN0

/*I decided to show Astronomy Picture of the Day but we can get more information from this API for example 
- Mars Weather Service API, 
- Mars Rover Photos,
- NASA Image and Video Library*/

/*{
"date": "2019-10-20",
"explanation": "The night side of Pluto spans this shadowy scene, a stunning spacebased view with the Sun 4.9 billion kilometers (almost 4.5 light-hours) behind the dim and distant world. It was captured by far flung New Horizons in July of 2015. The spacecraft was at a range of some 21,000 kilometers from Pluto, about 19 minutes after its closest approach. A denizen of the Kuiper Belt in dramatic silhouette, the image also reveals Pluto's tenuous, surprisingly complex layers of hazy atmosphere. The crescent twilight landscape near the top of the frame includes southern areas of nitrogen ice plains now formally known as Sputnik Planitia and rugged mountains of water-ice in the Norgay Montes.",
"hdurl": "https://apod.nasa.gov/apod/image/1910/PIA20727PlutoNight.jpg",
"media_type": "image",
"service_version": "v1",
"title": "Pluto at Night",
"url": "https://apod.nasa.gov/apod/image/1910/PIA20727PlutoNight1024c.jpg"
}*/

const URL =
  "https://api.nasa.gov/planetary/apod?api_key=Gylwx14uRh5flaedPrBa3R7hmi097pUdGPI8ZxN0";

function fetchJSON(url) {
  return fetch(url).then(response => response.json());
}

fetchJSON(URL).then(data => {
  renderImage(data);
});

function renderImage(data) {
  const outputImage = document.querySelector("#nasa_image");
  outputImage.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.explanation}</p>
    <div><img src="${data.url}"</div>
    `;
}
