const user1 = fetch(
  "https://api.github.com/search/repositories?q=user:hemanth06912"
).then(response => response.json());
const user2 = fetch(
  "https://api.github.com/search/repositories?q=user:mahertawila"
).then(response => response.json());
const user3 = fetch(
  "https://api.github.com/search/repositories?q=user:nazaqat"
).then(response => response.json());

function getAllRepositories() {
  Promise.all([user1, user2, user3]).then(repositoriesInfo => {
    const newUl = document.createElement("ul");
    document.body.appendChild(newUl);
    for (let i = 0; i < repositoriesInfo.length; i++) {
      const newLi = document.createElement("li");
      newLi.innerHTML = repositoriesInfo[i].items[i].owner.login;
      newUl.appendChild(newLi);
      const newUlNested = document.createElement("ul");
      newLi.appendChild(newUlNested);
      for (let j = 0; j < repositoriesInfo[i].items.length; j++) {
        const newLiNested = document.createElement("li");
        newLiNested.innerHTML = `${repositoriesInfo[i].items[j].name}: ${
          repositoriesInfo[i].items[j]["html_url"]
        }`;
        newUlNested.appendChild(newLiNested);
      }
    }
  });
}
getAllRepositories();
