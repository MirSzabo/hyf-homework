document.getElementById("button-first").addEventListener("click", changePageOne);
function changePageOne() {
    var buttonOne = document.getElementById("button-first");
  document.querySelector(".first").style.display =buttonOne.click ? "none" : "block";
  document.querySelector(".second").style.display =buttonOne.click ? "block" : "none";
}
document.getElementById("button-second").addEventListener("click", changePageTwo);
function changePageTwo() {
  var buttonTwo = document.getElementById("button-second");
  document.querySelector(".second").style.display =buttonTwo.click ? "none" : "block";
  document.querySelector(".third").style.display =buttonTwo.click ? "block" : "none";
}
document.getElementById("button-third").addEventListener("click", changePageThree);
function changePageThree() {
  var buttonThree = document.getElementById("button-third");
  document.querySelector(".third").style.display =buttonThree.click ? "none" : "block";
}
document.getElementById("button-second-back").addEventListener("click", changePageOneBack);
function changePageOneBack() {
  var buttonTwoBack = document.getElementById("button-second-back");
  document.querySelector(".first").style.display =buttonTwoBack.click ? "block" : "none";
  document.querySelector(".second").style.display =buttonTwoBack.click ? "none" : "block";

}
document.getElementById("button-third-back").addEventListener("click", changePageTwoBack);
function changePageTwoBack() {
  var buttonThreeBack = document.getElementById("button-second-back");
  document.querySelector(".second").style.display =buttonThreeBack.click ? "block" : "none";
  document.querySelector(".third").style.display =buttonThreeBack.click ? "none" : "block";
}
