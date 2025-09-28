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
                     <div className="desktop-show">
                       <button className="btn navbtn active flex center medel">
                        <i class="fa-regular fa-house big-x"></i>
                        <span>Home</span>
                      </button>
                     </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;