console.log("Script loaded");

const products = getAvailableProducts();
console.log(products) // logs out

const newUl = document.querySelector("section.products > ul");
//Improving the renderProducts function
function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerHTML = products[i].name;
    newUl.appendChild(newLi);
    //console.log(newLi);
    }
};
renderProducts(products); 