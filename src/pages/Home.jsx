import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";

function Home() {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    githubApi().then(data => {
      setUserData(data)
    })
  }, [])

}

export default Home;
