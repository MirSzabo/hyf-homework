const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findShortestWord(words) {
  const shortestWord = (first, second) => first.length <= second.length ? first : second;
  return words.reduce(shortestWord); 
}
findShortestWord(danishWords); // returns 'ø'

//DOM
const shortestWord = findShortestWord(danishWords);
const btn = document.querySelector("button")
const output = document.getElementById("word")
btn.addEventListener("click", function(){
output.innerHTML = shortestWord;
});