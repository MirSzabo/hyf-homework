let spiritAnimal = [
  "Butterfly- The change maker",
  "Spider- The Creative Man",
  "Crow- The magical Man",
  "Owl- The illusionst",
  "Hummingbird - The happy Man",
  "Hawk- The wisdom Man",
  "Grasshopper- The innovative Man",
  "Eagle- Who listen to heart",
  "Cat- The clever Man",
  "Fish- Tha smart Man"
];

document
  .getElementById("button")
  .addEventListener("click", spiritAnimalNameGen);
const userName = document.getElementById("userName");

function spiritAnimalNameGen() {
  const randomNumber = Math.floor(Math.random() * spiritAnimal.length);
  const animalName = spiritAnimal[randomNumber];
  !userName.value
    ? alert("Missing name")
    : (document.getElementById(
        "animalName"
      ).innerHTML = `${userName.value} - ${animalName}`);
}

userName.onkeypress = function(event) {
  if (event.keyCode === 13) {
    spiritAnimalNameGen();
  }
  return false;
};

const select = document.querySelector("select");
userName.addEventListener("mouseover", function() {
  select.value === "hover" ? spiritAnimalNameGen() : event.stopPropagation();
});

select.addEventListener("change", function() {
  if (select.value === "click") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
