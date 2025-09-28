import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";

function Nav(){

  const [userData, setUserData] = useState(null)
  useEffect(() => {
    githubApi().then(data => {
      setUserData(data)
    })
  }, [])
 


    return(
        <div>
            <nav className="nav">
                <div className="flex around">
                    <div className="flex center medel logoBox">
                        <img className="githublogo" height={"50px"} src="https://avatars.githubusercontent.com/u/9919?v=4" alt="avatar" />
                        <h1>{userData?.name}</h1>
                    </div>
                    <div>2</div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;