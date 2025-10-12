import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";
import Loading from "../components/Loading";
import Error from "../components/Error";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Followers() {

    const [userData, setUserData] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {

                const data = await githubApi();
                setUserData(data);


                if (data?.followers_url) {
                    const res = await fetch(`${data.followers_url}?per_page=100&page=${page}`);
                    const followersData = await res.json();
                    setFollowers(followersData);

                }
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();

        githubApi().then(data => {
            setUserData(data);
        });
    }, [page]);

    return (
        <>
            {userData?.message ? (
                <Error />
            ) : (
                <div>
                    {userData ? (
                        <div className="followersList">
                            <div className="flex center medel w100">
                                <div className="flex around medel">
                                    <button
                                        className="btn navbtn noactive flex center medel"
                                        disabled={page === 1}
                                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                    >
                                        <FaChevronLeft className="big-x" /> &nbsp;
                                        Previous
                                    </button>
                                    <div>
                                        <span className="infoGlass flex fillSet">
                                            <span  className="flex column">
                                                <span>
                                                    Total Followers :
                                                </span>
                                                <span >
                                                    Show Followers :
                                                </span>
                                            </span>
                                            <span className="flex column">
                                                <b>{userData?.followers}</b>
                                                <b>100</b>
                                            </span>
                                        </span>
                                    </div>
                                    <button
                                        className="btn navbtn flex center medel noactive"
                                        onClick={() => setPage((p) => p + 1)}
                                    >

                                        Next
                                        &nbsp;&nbsp;
                                        <FaChevronRight className="big-x" />
                                    </button>
                                </div>
                            </div>
                            {followers.map((f) => (
                                <div
                                    key={f.id}
                                    onClick={() => window.location.href = f.html_url}
                                    className="infoGlass fillSet flex medel pointer"
                                >
                                    <img src={f.avatar_url} alt={f.login} className="followImg cercel" />
                                    <div className="space">{f.login}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Loading />
                    )}
                </div>
            )}

        </>
    );
}

export default Followers;