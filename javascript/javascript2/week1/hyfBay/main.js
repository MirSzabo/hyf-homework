console.log("Script loaded");

const products = getAvailableProducts();
console.log(products); // logs out

const newUl = document.querySelector("section.products > ul");
//Optional ships to rendering.

function renderProducts(products) {
  const newLi = document.createElement("li");
  newUl.appendChild(newLi);

  //for each item create new nested ul
  products.forEach(function(product) {
    const newUlNested = document.createElement("ul");
    newLi.appendChild(newUlNested);

    //for each nested ul create nested li with classes
    const keys = Object.keys(product);
    //console.log(keys); //["id", "name", "price", "rating", "shipsTo"]

    for (let i = 1; i < keys.length - 1; i++) {
      const newLiNested = document.createElement("li");
      newLiNested.innerHTML = product[keys[i]];
      newLiNested.setAttribute("class", keys[i]);
      newUlNested.appendChild(newLiNested);
    }

    //for shipsTo create new nested ul with li of countries
    const countryLi = document.createElement("li");
    countryLi.setAttribute("class", "ships-to");
    const newUlNested2 = document.createElement("ul");
    countryLi.appendChild(newUlNested2);
    newUlNested.appendChild(countryLi);

    product.shipsTo.forEach(function(country) {
      const newLiNested2 = document.createElement("li");
      newLiNested2.innerHTML = country;
      newUlNested2.appendChild(newLiNested2);
    });
  });
}

renderProducts(products);
