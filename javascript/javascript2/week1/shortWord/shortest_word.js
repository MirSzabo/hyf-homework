const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findShortestWord(words) {
  const shortestWord = (a, b) => a.length <= b.length ? a : b;
  return words.reduce(shortestWord); 
}
findShortestWord(danishWords); // returns 'ø'

//DOM
document.querySelector("button").addEventListener("click", function(){
  document.getElementById("word").innerHTML = findShortestWord(danishWords);
});