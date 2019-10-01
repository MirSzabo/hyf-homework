//Create an array called testProductNames that contains test product names.
const testProductNames = ["t-shirt", "jeans", "skirt"];
const newUl = document.querySelector("section.products > ul");

testProductNames.forEach(renderProducts); // Should add 3 li's to the ul under the products section*/
function renderProducts(productName) {
  const newLi = document.createElement("li");
  newLi.textContent = productName;
  newUl.appendChild(newLi);
};

console.log("Script loaded");

//const products = getAvailableProducts();
//console.log(products) // logs out

