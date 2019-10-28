console.log("script loaded");

const movies = movieList();
console.log(movies);

//movies with a short title
const shortTitle = movies.filter(movie => movie.title.length <= 5);
console.log(shortTitle);
console.log(`There is ${shortTitle.length} movies with short title.`);

//long movie titles
const longTitle = movies.filter(movie => movie.title.length >= 50);
console.log(longTitle);
console.log(`There is ${longTitle.length} movies with long title.`);

//number of movies made between 1980-1989
const specificYears = movies.filter(
  movie => movie.year >= 1980 && movie.year <= 1989
);
console.log(specificYears);
console.log(
  `There is ${specificYears.length} movies made between 1980-1989 including both of the years.`
);

//extra key called tag based on the rating
let movieDatabaseWithTag = JSON.parse(JSON.stringify(movies))
movieDatabaseWithTag = movies.map(movie => {
  let movieTag;
  if (movie.rating >= 7) {
    movieTag = "Good";
  } else if (movie.rating >= 4) {
    movieTag = "Average";
  } else {
    movieTag = "Bad";
  }
  return { ...movie, tag: movieTag };
});

console.log(JSON.stringify(movieDatabaseWithTag));
console.log(JSON.stringify(movies));

//Using chaining, filter array to contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const highRatedMovies = movies
  .filter(movie => movie.rating > 6)
  .map(movie => movie.rating);
console.log(highRatedMovies);

//Count the total number of movies containing any of following keywords:
const keywords = ["Surfer", "Alien", "Benjamin"];

const moviesWithKeywords = movies.filter(movie =>
  doesMovieContainKeyword(movie.title)
);

function doesMovieContainKeyword(title) {
  //console.log(title);
  let titleWithKeyword = false;
  keywords.forEach(keyword => {
    // console.log(title.includes(keyword));
    if (title.toLowerCase().includes(keyword.toLowerCase())) {
      titleWithKeyword = true;
    }
  });
  return titleWithKeyword;
}

console.log(
  `There is ${moviesWithKeywords.length} movies with keywords Surfer, Alien or Benjamin.`
);

//Create an array of movies where a word in the title is duplicated.
const duplicatedTitles = [];
const regex = /[^A-Za-z0-9\s']/g;

const titleSplit = movies
  .map(movie =>
    movie.title
      .replace(regex, "")
      .toLowerCase()
      .split(" ")
  )
  .forEach(title =>
    title.filter((item, index) =>
    title.indexOf(item) != index
        ? duplicatedTitles.push(title.join(" "))
        : false
    )
  );

console.log(duplicatedTitles);

//Find the word that is mostly duplicated using sort
function sortByFrequency(movies) {
  let moviesTitlesInArray = movies.map(({ title }) => title.split(" "));
  moviesTitlesInArray = moviesTitlesInArray.reduce((a, b) => a.concat(b), []);
  const count = moviesTitlesInArray.reduce((accumulator, word) => {
    accumulator[word] = (accumulator[word] || 0) + 1;
    return accumulator;
  }, {});
  keysSorted = Object.keys(count).sort(function(a, b) {
    return count[b] - count[a];
  });
}
sortByFrequency(movies);
console.log(`Most duplicated word is ${keysSorted[0]}`);

//Calculate the average rating of all the movies using reduce
const average =
  movies.reduce((total, currentValue) => total + currentValue.rating, 0) /
  movies.length;
console.log(`Average rating of all the movies is ${average}.`);

//Count the total number of Good, Average and Bad movies using reduce
const movieDatabaseWithTag2 = movies.map(movie =>
  movie.rating >= 7
    ? (movie.tag = "Good")
    : movie.rating >= 4
    ? (movie.tag = "Average")
    : (movie.tag = "Bad")
);
const countedRating = movieDatabaseWithTag2.reduce((total, movie) => {
  total[movie] = (total[movie] || 0) + 1;
  return total;
}, {});
console.log(countedRating);

//DOM
const selectElement = document.querySelector(".displayResults");

selectElement.addEventListener("change", event => {
  const result = document.querySelector(".display");
  if (event.target.value === "shortTitle") {
    result.textContent = `${shortTitle.length}`;
  } else if (event.target.value === "longTitle") {
    result.textContent = `${longTitle.length}`;
  } else if (event.target.value === "givenYear") {
    result.textContent = `${specificYears.length}`;
  } else if (event.target.value === "moviesKey") {
    result.textContent = `There is ${moviesWithKeywords.length} movies with keywords Surfer, Alien or Benjamin.`;
  } else if (event.target.value === "dupWord") {
    result.textContent = `${duplicatedTitles}`;
  } else if (event.target.value === "mostDupWord") {
    result.textContent = `${keysSorted[0]}`;
  } else if (event.target.value === "rating") {
    result.textContent = `${average}`;
  } else if (event.target.value === "good") {
    result.textContent = `${countedRating.Good}`;
  } else if (event.target.value === "average") {
    result.textContent = `${countedRating.Average}`;
  } else if (event.target.value === "bad") {
    result.textContent = `${countedRating.Bad}`;
  } else {
  }
});
