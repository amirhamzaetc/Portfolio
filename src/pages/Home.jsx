import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";
import usererrorimg from "../assets/user_error.webp"
import formatNumber from "../script/formatNuber";
import Loading from "../components/Loading";
import Error from "../components/Error";


function Home() {

  const [userData, setUserData] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    githubApi().then(data => {
      setUserData(data);
      setloading(false);
    });
  });

  // const followers = userData?.followers;


  if (loading) {
    return <Loading />
  }

  return (
    <div>
      {
        userData?.message ?
          <Error/>
          :
          <div className="flex">
            <div className="fb-bg-cover-pto-system flex mobile-column medel center">
              <div className="center">
                <img
                  id="randomcolorSet"
                  src={userData?.avatar_url}
                  className="userimg cercel border"
                />
              </div>
              <div className="infoGlass">
                <div className="title">
                  {userData?.name}
                </div>
                <div>
                  <p>
                    {userData?.bio}
                  </p>
                  <p className="flex bedel">
                    <i class="fa-brands fa-github big-xxl"></i>
                    <a href={userData?.html_url}>{userData?.login}</a>
                  </p>
                  <p className="flex medel big-x">
                    <span>
                      <i class="fa-solid fa-users big-xxl"></i>
                    </span>
                    <span>
                      {formatNumber(userData?.followers || 0)} Followers
                      <br />
                      {formatNumber(userData?.following || 0)} Following
                    </span>
                  </p>
                  <p className="flex medel">
                    {
                      userData?.location ? (
                        <span className="flex medel">
                          <i className="fa-solid fa-location-dot big-xxl"></i>{" "}
                          {userData?.location}
                        </span>
                      ) : (
                        ""
                      )
                    }
                  </p>

                </div>
              </div>
            </div>
          </div>
      }
    </div >
  )

}

export default Home;
