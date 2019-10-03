const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findShortestWord(words) {
  const shortestWord = (first, second) => first.length <= second.length ? first : second;
  return words.reduce(shortestWord); 
}
findShortestWord(danishWords); // returns 'ø'

//DOM
document.querySelector("button").addEventListener("click", function(){
  document.getElementById("word").innerHTML = findShortestWord(danishWords);
});