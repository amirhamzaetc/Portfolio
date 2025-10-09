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
          <div className="flex">
            <div className="fb-bg-cover-pto-system flex mobile-column medel center">
              <div className="center">
                <Error/>
              </div>
            </div>
          </div>


          :
          <div className="flex">
            <div className="fb-bg-cover-pto-system flex mobile-column medel center">
              <div className="center">
                <img
                  id="randomcolorSet"
                  src={userData?.avatar_url || usererrorimg}
                  className="userimg cercel border"
                />
              </div>
              <div className="infoGlass">
                <div className="title">
                  Hello i'am {userData?.name}
                </div>
                <div>
                  <p>
                    {userData?.bio}
                  </p>
                  <p className="flex bedel">
                    <i className="fa-brands fa-github big-xxl"></i>
                    <a href={userData?.html_url}>{userData?.login}</a>
                  </p>
                  <p className="flex medel big-x">
                    <span>
                      <i className="fa-solid fa-users big-xxl"></i>
                    </span>
                    <span>
                      <span className="point">{formatNumber(userData?.followers || 0)}</span> Followers
                      <br />
                      <span className="point">{formatNumber(userData?.following || 0)}</span> Following
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
                  <p className="flex medel">
                    <i className="fa-solid fa-book-bookmark big-xxl"></i>
                    Repositories &nbsp; <span className="point">{userData?.public_repos}</span>
                  </p>
                  <p className="flex medel">
                    <span>
                      <i className="fa-regular fa-building big-xxl"></i>
                    </span>
                    <span>
                      {userData?.company}
                    </span>
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
