
function githubApi() {
  const githuburl = "https://api.github.com/users/nahidhk";
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

