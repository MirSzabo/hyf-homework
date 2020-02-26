import React, { useEffect, useState } from "react";

function MyRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const MY_URL = `https://api.github.com/users/MirSzabo/repos`;
    (async () => {
      try {
        const myData = await fetch(MY_URL);

        const myRepo = await myData.json();
        setRepo(myRepo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  return (
    <div>
      <h2>My Repos</h2>
      {repo.map(list => {
        return (
          <div key={list.id}>
            <a href={list.html_url} target="_">
              {list.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default MyRepos;
