import React, { useEffect, useState } from "react";

function MyRepos() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const MY_URL = "https://api.github.com/users/MirSzabo/repos";
    (async () => {
      try {
        const myData = await fetch(MY_URL);
        const myRepo = await myData.json();
        setRepos(myRepo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>My Repos</h2>
      {repos.map(repo => {
        return (
          <div key={repo.id}>
            <a href={repo.html_url} target="_">
              {repo.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default MyRepos;
