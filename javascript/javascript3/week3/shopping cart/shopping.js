class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  async convertToCurrency(currency) {
    const url =
      "http://data.fixer.io/api/latest?access_key=329bff339ec583180e2217f6b21a869d&symbols=USD,PLN,DKK"; //base is EUR
    const response = await fetch(url);
    const latestRates = await response.json();
    const currencyRateUSD = latestRates.rates.USD;
    const currencyRatePLN = latestRates.rates.PLN;
    const currencyRateDKK = latestRates.rates.DKK;
    if (currency === "dollars" || currency === "USD") {
      return this.price * currencyRateUSD;
    } else if (currency === "zloty" || currency === "PLN") {
      return this.price * currencyRatePLN;
    } else if (currency === "danish krone" || currency === "DKK") {
      return this.price * currencyRateDKK;
    } else {
      console.log("This currency is not supported");
    }
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    if (!(product instanceof Product)) throw "addProduct only accepts Product";
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  searchProduct(productName) {
    this.products.filter(product => {
      if (product.name === productName) {
        return true;
      }
    });
  }

  getTotal() {
    const totalPrice = this.products.reduce((total, product) => {
      return total + product.price;
    }, 0);
    return totalPrice;
  }

  async getUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const userInfo = await response.json();
    const userName = userInfo.username;
    const userInfoDiv = document.createElement("div");
    document.body.appendChild(userInfoDiv);
    userInfoDiv.innerHTML = `User name: ${userName}`;
  }

  /*getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(userInfo => {
        const userName = userInfo.username;
        const userInfoDiv = document.createElement("div");
        document.body.appendChild(userInfoDiv);
        userInfoDiv.innerHTML = `User name: ${userName}`;
      })
      .catch(error => {
        console.log(error);
      });
  }*/

  renderProducts() {
    const newUl = document.createElement("ul");
    document.body.appendChild(newUl);
    for (let i = 0; i < this.products.length; i++) {
      const newLi = document.createElement("li");
      newLi.innerHTML = `${this.products[i].name}: ${this.products[i].price} EUR`;
      newUl.appendChild(newLi);
    }
  }

  renderTotalPrice() {
    const totalPriceDiv = document.createElement("div");
    document.body.appendChild(totalPriceDiv);
    totalPriceDiv.innerHTML = `Total price of the products: ${this.getTotal()} EUR`;
  }
}

const flatscreen = new Product("flat-screen", 5000);
const shoppingCart = new ShoppingCart([flatscreen]);
const mobile = new Product("mobile-phone", 1000);
const camera = new Product("camera", 3000);
const watch = new Product("watch", 500);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(camera);
shoppingCart.addProduct(watch);
shoppingCart.removeProduct(mobile);
shoppingCart.getUser();
shoppingCart.renderProducts();
shoppingCart.renderTotalPrice();
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollars"));
console.log(plant.convertToCurrency("danish krone"));
console.log(plant.convertToCurrency("CAD"));