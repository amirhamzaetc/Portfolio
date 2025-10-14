
import apigithuburl from "../data/username.json";

function githubApi() {
  const githuburl = "https://api.github.com/users/" + apigithuburl.github_username;
  return fetch(githuburl)
    .then(response => response.json())
    .then(data => {
     return data;
    })
    .catch(error => {
      return null;
    });
}

export default githubApi;

