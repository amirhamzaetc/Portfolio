import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";
import usererrorimg from "../assets/user_error.webp"

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
        <div className="w300px">
          {
            userData?.avatar_url === null ?
              <img className="userimg cercel border" src={usererrorimg} alt="Avater" />
              :

              <img className="userimg cercel border" src={userData?.avatar_url} alt="Avater" />
          }
          <br />
          {
            userData?.name === null ?
              " "
              :
              <span className="title">
                {userData?.name}
                <br />
                <i class="fa-brands fa-github big-x"></i>(
                {
                  <a href={userData?.html_url}>{userData?.login}</a>
                }
                )
              </span>
          }
          <br />
          <br />
          {
            <p>
              {
                userData?.bio
              }
            </p>
          }
          {
            userData?.location === null ?
            ""
            :
           <p>
            <i class="fa-solid fa-location-dot big-xxl"></i>
            {
              userData?.location
            }
           </p>
          }
        </div>
        <div className="overbox">
        </div>
      </div>
    </div>
  )

}

export default Home;
