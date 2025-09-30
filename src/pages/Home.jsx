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
      <div className="flex">
        <div>
          <img src={userData?.avatar_url} alt="" className="userimg cercel border" id="randomBorder" />
          <h1 className="userName">{userData?.name}</h1>
          <h3 className="userBio">{userData?.bio}</h3>
          <h3 className="userLocation">{userData?.location}</h3>
          <h3 className="userLink"><a href={userData?.html_url} target="_blank" rel="noreferrer">{userData?.html_url}</a></h3>
        </div>
        <div className="overbox">

        </div>
      </div>
    </div>
  )

}

export default Home;
