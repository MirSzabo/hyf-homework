console.log("Script loaded");

const products = getAvailableProducts();

console.log(products); // logs out

const newUl = document.querySelector("section.products > ul");
//Optional ships to rendering
function renderProducts(products) {
  newUl.innerHTML = "";
  const newLi = document.createElement("li");
  newUl.appendChild(newLi);

  //for each item create new nested ul
  products.forEach(function(product) {
    const newUlNested = document.createElement("ul");
    newLi.appendChild(newUlNested);

    //Shopping cart - optional
    //create the button- Add to cart
    const addButton = document.createElement("button");
    addButton.innerHTML = "Add to cart";
    newUlNested.appendChild(addButton);

    //listen to click
    addButton.addEventListener("click", () => {
      const cartUl = document.querySelector("section.cart > ul");
      const newLiCart = document.createElement("li");
      newLiCart.innerHTML = `
        <div class="name">${product.name}</div>
        <div class="price">${product.price}</div>
    `;
      productInput.value = "";

      //create the button- Delete
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      newLiCart.appendChild(deleteButton);
      deleteButton.addEventListener("click", () => {
        newLiCart.style.display = "none";
        deleteButton.style.display = "none";
      });
      cartUl.appendChild(newLiCart);
    });

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

//.addEventListener on an element
const productInput = document.querySelector("input[type=text]");
productInput.addEventListener("keyup", searchForProducts);

//.filter on the products array
function searchForProducts() {
  if (!productInput.value) {
    renderProducts(products);
  } else {
    const filterProduct = products.filter(
      product => product.name === productInput.value
      //product => {product.name.toLowerCase().includes(productInput.value)}
    );
    return renderProducts(filterProduct);
  }
}

//Showing products that ships to country
const selected = document.querySelector(".country > select");

function searchByCountry() {
  const matchingCountries = products.filter(product => {
    const selectedCountry = selected.value;
    const productCountry = product.shipsTo;
    const productCountry_lower = productCountry.map(country =>
      country.toLowerCase()
    );

    if (productCountry_lower.includes(selectedCountry)) {
      return true;
    }
  });
  renderProducts(matchingCountries);
}
selected.addEventListener("change", searchByCountry);

//Sort the products
const sort = document.querySelector("div.sort > select");

function sortProducts() {
  const sortType = sort.value;
  if (sortType === "cheap") {
    const cheapProducts = products.sort((a, b) => a.price - b.price);
    renderProducts(cheapProducts);
  } else if (sortType === "expensive") {
    const expensiveProducts = products.sort((a, b) => b.price - a.price);
    renderProducts(expensiveProducts);
  } else {
    const byNameProducts = products.sort((a, b) => (a.name > b.name ? 1 : -1));
    renderProducts(byNameProducts);
  }
}
sort.addEventListener("change", sortProducts);

sortProducts(products);

//Price analytics
const price = products.map(product => {
  return product.price});
serverResponse = () => {
  return "Prices received";
};

function sendPricesToServer(priceArray, callback) {
  const server = {
    prices: () => {
      return priceArray;
    },
  };
  console.log (callback (), server.prices ());
}
sendPricesToServer(price, serverResponse);