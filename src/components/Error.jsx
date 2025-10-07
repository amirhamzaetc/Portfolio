import React, { useState, useEffect } from "react";
import githubApi from "../data/GithubApi";

function Error() {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        githubApi().then(data => {
            setUserData(data);
        });
    });
    return (
        <>
            <div className="flex center medel">
                <div className="textCenter w80">
                    <i className="fa-solid fa-bug"></i>
                    <h2>Api Not Found!</h2>
                    <p>
                        <div className="wS">
                            {userData?.message || "GitHub Api is not Working!"}
                        
                        <br />
                        <br />
                        <a href={userData?.documentation_url || "https://github.com/nahidhk"}> <i class="fa-solid fa-arrow-up-right-from-square"></i> Documentation </a>
                        <br />
                        <br />
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}
export default Error