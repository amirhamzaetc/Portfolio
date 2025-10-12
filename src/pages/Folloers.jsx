import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Followers() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                // Main user data fetch
                const data = await githubApi();
                setUserData(data);

                // Followers fetch with pagination (50 per page)
                if (data?.followers_url) {
                    const res = await fetch(`${data.followers_url}?per_page=50&page=${page}`);
                    const followersData = await res.json();
                    setFollowers(followersData);
                }
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [page]); // page change hole reload hobe

    return (
        <>
            {userData?.message ? (
                <Error />
            ) : (
                <div>
                    {userData ? (
                        <div className="followersList">
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
            <div className="flex center medel w100">
                <div className="flex around medel w100">
                    <button
                        className="btn navbtn active flex center medel"
                        disabled={page === 1}
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    >
                        Previous
                    </button>
                    <button
                        className="btn navbtn flex center medel active"
                        onClick={() => setPage((p) => p + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default Followers;