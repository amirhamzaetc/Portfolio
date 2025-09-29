import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";

function Home() {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    githubApi().then(data => {
      setUserData(data)
    })
  }, [])


  return (
    <div>

    <div>
      Check the web response
    </div>




    </div>
  )

}

export default Home;
