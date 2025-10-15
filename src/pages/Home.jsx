import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";
import usererrorimg from "../assets/user_error.webp"
import formatNumber from "../script/formatNuber";
import Loading from "../components/Loading";
import Error from "../components/Error";
import GitHubStars from '../data/GitHubStars';
import Contacts from '../components/Contacts';
import dateFormat, { masks } from "dateformat";


// icons
import { FaRegStar } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

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
          <Error />
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
                    <VscGithub className="big-xxl" />
                    <a href={userData?.html_url}>{userData?.login}</a>
                  </p>
                  <p className="flex medel big-x">
                    <span>
                      <LuUsersRound className="big-xxl" />
                    </span>
                    <span>
                      <span className="point">{formatNumber(userData?.followers || 0)}</span> Followers
                      <br />
                      <span className="point">{formatNumber(userData?.following || 0)}</span> Following
                    </span>
                  </p>

                  {
                    userData?.location ? (
                      <p className="flex medel">
                        <span className="flex medel">
                          <IoLocationOutline className="big-xxl" /> {" "}
                          {userData?.location}
                        </span>
                      </p>
                    ) : (
                      ""
                    )
                  }

                  <p className="flex medel">
                    <RiGitRepositoryLine className="big-xxl" />
                    Repositories &nbsp; <span className="mark">{userData?.public_repos}</span>
                  </p>
                  {
                    userData?.company ? (
                      <p className="flex medel">
                        <span>
                          <BsBuildings className="big-xxl" />
                        </span>
                        <span>
                          {userData?.company}
                        </span>
                      </p>
                    ) : ("")}
                  <p className="flex medel">
                    <FaRegStar className="big-xxl" />
                    Stars
                    &nbsp;
                    <span className="mark">
                      <GitHubStars username={userData?.login} />
                    </span>
                  </p>
                  <p className="flex medel">
                    <MdDateRange className="big-xxl" />
                    Joined
                    <span className="mark">
                      {dateFormat(userData?.created_at, "d mmm yyyy")}
                    </span>
                  </p>
                  <div className="flex center medel">
                    <Contacts />
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </div >
  )

}

export default Home;
