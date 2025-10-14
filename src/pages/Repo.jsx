import React, { useEffect, useState } from "react";
import githubApi from "../data/GithubApi";
import { filesize } from "filesize";

// components

import Error from "../components/Error";
import Loading from "../components/Loading";

// icons
import { GiScales } from "react-icons/gi";
import { TbHistoryToggle, TbWorldWww } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { MdDataUsage } from "react-icons/md";
import { PiGithubLogoLight } from "react-icons/pi";
import { PiGitForkDuotone } from "react-icons/pi";
import { FiEye } from "react-icons/fi";


function getLangIcon(lang) {
    const lower = lang?.toLowerCase();
    switch (lower) {
        case "javascript": return "devicon-javascript-plain colored";
        case "python": return "devicon-python-plain colored";
        case "php": return "devicon-php-plain colored";
        case "html": return "devicon-html5-plain colored";
        case "css": return "devicon-css3-plain colored";
        case "java": return "devicon-java-plain colored";
        case "c++": return "devicon-cplusplus-plain colored";
        case "c": return "devicon-c-plain colored";
        case "typescript": return "devicon-typescript-plain colored";
        case "react": return "devicon-react-original colored";
        case "dart": return "devicon-dart-plain colored";
        case "makefile": return "devicon-java-plain colored";
        default: return null;
    }
}

function Repo() {
    const [userData, setUserData] = useState(null);
    const [userRepo, setUserRepo] = useState([]);

    useEffect(() => {
        async function repoData() {
            try {
                const data = await githubApi();
                setUserData(data);

                if (data?.repos_url) {
                    const repos = await fetch(
                        `${data.repos_url}?per_page=100&sort=updated&direction=desc`
                    );
                    const userTheRepo = await repos.json();
                    setUserRepo(userTheRepo);
                }
            } catch (err) {
                console.error(err);
            }
        }

        repoData();

        githubApi().then(data => {
            setUserData(data);
        });

    }, []);

    return (
        <>
            {userData?.message ? (
                <Error />
            ) : (
                < div >
                    {userData ? (
                        <>
                            {
                                userRepo.map((f) => (
                                    <div key={f.id}>
                                        <div className="infoGlass fillSet">
                                            <div className="wHaf">
                                                <div className="flex medel wrap">
                                                    <span className="subTitle">{f.name}</span>
                                                    {f.language && (
                                                        <span className="mark flex center medel px">
                                                            <i className={`${getLangIcon(f.language)} px `}></i>
                                                            {f.language}
                                                        </span>
                                                    )}
                                                    <span className="mark">
                                                        {f.default_branch}
                                                    </span>
                                                </div>

                                                <div>
                                                    <p>{f.description}</p>
                                                    <div className="flex wrap">
                                                        <span className="mark center flex medel">
                                                            <MdDataUsage className="px" /> {filesize(f.size * 1024)}
                                                        </span>
                                                        <span className="mark center flex medel">
                                                            <FaRegStar className="px" /> {f.stargazers_count}
                                                        </span>

                                                        {f.license && (
                                                            <span className="mark center flex medel">
                                                                <GiScales className="px" /> {f.license?.name}
                                                            </span>
                                                        )}
                                                        <span className="mark center flex medel">
                                                            <PiGitForkDuotone className="px" />
                                                            {f.forks}
                                                        </span>

                                                        <span className="mark center flex medel">
                                                            <FiEye className="px" />
                                                            {f.watchers_count}
                                                        </span>




                                                        {/* into top */}
                                                        <span className="mark center flex medel">
                                                            <TbHistoryToggle className="px" />
                                                            {new Date(f.updated_at).toLocaleString()}
                                                        </span>



                                                        {f.homepage && (
                                                            <span
                                                                onClick={() => (window.location.href = f.homepage)}
                                                                className="mark center flex medel pointer"
                                                            >
                                                                <TbWorldWww className="px" /> Live
                                                            </span>
                                                        )}

                                                        <span
                                                            onClick={() => (window.location.href = f.html_url)}
                                                            className="mark center flex medel pointer"
                                                        >
                                                            <PiGithubLogoLight className="px" /> GitHub
                                                        </span>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    ) : (
                        <Loading />
                    )}
                </div >
            )}
        </>
    );
}

export default Repo;
