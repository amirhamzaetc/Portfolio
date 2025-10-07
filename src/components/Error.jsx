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
            <div className="darkBox flex center medel">
                <div className="textCenter">
                    <i className="fa-solid fa-bug"></i>
                    <h1>Api Not Found!</h1>
                    <p>
                        {userData?.message}
                        <br />
                        <a href={userData?.documentation_url}> {userData?.documentation_url} </a>
                        <br />
                        <br />
                        <button className="btn active">About</button>
                    </p>
                </div>
            </div>
        </>
    )
}
export default Error