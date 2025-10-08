import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";
import Sidemenu from "./Sidemenu";

function Nav() {

  const [userData, setUserData] = useState(null)
  useEffect(() => {
    githubApi().then(data => {
      setUserData(data)
    })
  }, [])



  return (
    <div>
      <nav className="nav">
        <div className="flex around medel">
          <div className="flex center medel logoBox sizeppo">
            <img className="githublogo" src="https://avatars.githubusercontent.com/u/9919?v=4" alt="avatar" />
            <h3>{userData?.name || "Nahid TD"}</h3>
          </div>
          <div className="sizeppo flex center medel">
            <Sidemenu />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;