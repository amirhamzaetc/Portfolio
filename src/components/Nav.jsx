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
                <div className="flex around medel">
                    <div className="flex center medel logoBox">
                        <img className="githublogo"  src="https://avatars.githubusercontent.com/u/9919?v=4" alt="avatar" />
                        <h3>{userData?.name}</h3>
                    </div>
                    <div>
                     {/* This is a Desktop Version 1.0.1 */}
                     <div className="desktop-show-flex ">
                      {/* Home button */}
                       <button className="btn navbtn noactive flex center medel">
                        <i className="fa-regular fa-house big-x"></i>
                        <span>Home</span>
                      </button>
                      {/* About button */}
                      <button className="btn navbtn noactive flex center medel">
                        <i className="fa-regular fa-user big-x"></i>
                        <span>About</span>
                      </button>
                      

                     </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;