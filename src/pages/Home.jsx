import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";
import usererrorimg from "../assets/user_error.webp"
import formatNumber from "../script/formatNuber";
import Loading from "../components/Loading";
import haike1 from "../assets/1haike.svg"
import haike2 from "../assets/2haike.svg"
import haike3 from "../assets/3haike.svg"
import haike4 from "../assets/4haike.svg"
import haike5 from "../assets/5haike.svg"
import haike6 from "../assets/6haike.svg"
import haike7 from "../assets/7haike.svg"
import haike8 from "../assets/8haike.svg"
import haike9 from "../assets/9haike.svg"

function Home() {
  const borderStyleCode = [haike1, haike2, haike3, haike4, haike5, haike6, haike7, haike8, haike9];
  const [randomShow, setBorderStyle] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    githubApi().then(data => {
      setUserData(data);
      setloading(false);
    });

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * borderStyleCode.length);
      setBorderStyle(borderStyleCode[randomIndex]);
    }, 4000);

    // cleanup
    return () => clearInterval(interval);
  }, []);
  const followers = userData?.followers;


  if (loading) {
    return <Loading/>
  }

  return (
    <div>
      <div className="flex">
        <div className="fb-bg-cover-pto-system flex mobile-column medel">

          <div className="mobileCenter">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Home;
