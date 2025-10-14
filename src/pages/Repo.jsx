import React, { useEffect, useState } from "react";
import githubApi from "../data/GithubApi";

// icons
import { GiScales } from "react-icons/gi";
import { TbHistoryToggle, TbWorldWww } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { MdDataUsage } from "react-icons/md";
import { PiGithubLogoLight } from "react-icons/pi";

function Repo() {
  const [userData, setUserData] = useState(null);
  const [userRepo, setUserRepo] = useState([]);

  useEffect(() => {
    async function repoData() {
      try {
        const data = await githubApi();
        setUserData(data);

        if (data?.repos_url) {
          const repos = await fetch(data.repos_url);
          const userTheRepo = await repos.json();
          setUserRepo(userTheRepo);
        }
      } catch (err) {
        console.error(err);
      }
    }

    repoData();
  }, []); // শুধুমাত্র একবার চালাবে

  return (
    <div>
      {userRepo.map((f) => (
        <div key={f.id}>
          <div className="infoGlass fillSet">
            <div className="wHaf">
              <div className="flex medel wrap">
                <span className="subTitle">{f.name}</span>
                <span className="mark">Public</span>
              </div>
              <div>
                <p>{f.description || "No description provided."}</p>
                <div className="flex wrap">
                  <span className="mark">
                    <MdDataUsage /> {Math.floor(Math.random() * 500)} MB
                  </span>
                  <span className="mark">
                    <FaRegStar /> {f.stargazers_count}
                  </span>
                  <span className="mark">
                    <GiScales /> {f.license?.name || "No License"}
                  </span>
                  <span className="mark">
                    <TbHistoryToggle />{" "}
                    {new Date(f.updated_at).toLocaleString()}
                  </span>

                  {f.homepage && (
                    <a href={f.homepage} target="_blank" rel="noreferrer" className="mark">
                      <TbWorldWww /> Live
                    </a>
                  )}

                  <a href={f.html_url} target="_blank" rel="noreferrer" className="mark">
                    <PiGithubLogoLight /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repo;
