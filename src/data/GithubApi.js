
import apigithuburl from "../data/github_username.json";

function githubApi() {
  const githuburl = apigithuburl.pubUserInfoLink + apigithuburl.username;
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

