console.log("Script loaded");

const products = getAvailableProducts();
console.log(products) // logs out

const newUl = document.querySelector("section.products > ul");
//Showing more details to the user
function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${products[i].name} | ${products[i].price} | ${products[i].rating} | ${products[i].shipsTo}`;
    newUl.appendChild(newLi);
    //console.log(newLi);
    }
};
renderProducts(products); 