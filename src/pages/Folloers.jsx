import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Followers() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                // Main user data fetch
                const data = await githubApi();
                setUserData(data);

                // Followers fetch
                if (data?.followers_url) {
                    const res = await fetch(data.followers_url);
                    const followersData = await res.json();
                    setFollowers(followersData);
                }
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);
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
            <div className='flex center medel w100 test'>
               <div className='flex around medel'>
                   <div>Pre</div>
                   <div>Next</div>
               </div> 
            </div>
        </>
    );

}

export default Followers;
