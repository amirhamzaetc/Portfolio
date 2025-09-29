import react from "react";
import { useNavigate } from "react-router-dom";


function Sidemenu() {
    const navigate = useNavigate();
    const isActive = (path) => {
        return window.location.pathname === path;
    };
    console.log(isActive("/"));


    const toggleSidemenu = () => {
        const myMenu = document.getElementById("sidemenu");
        myMenu.classList.toggle("sidemenu-show-in-mobile");
        const menuIcon = document.getElementById("menu-icon");
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");
    }



    return (
        <>

            {/* This is a Desktop Version 1.0.1 */}
            <div>
                {/* Only for mobile show this data */}
                <div className="mobile-show">
                    <button onClick={() => toggleSidemenu()} className="btn navbtn noactive center medel flex">
                        <i id="menu-icon" className="fa-solid fa-bars big-x"></i>
                    </button>
                </div>
                <div id="sidemenu" className="desktop-show-flex">
                    {/* Home button */}
                    <button onClick={() => navigate("/")} className={"btn navbtn noactive flex center medel" + (isActive("/") ? " active" : "noactive")}>
                        <i className="fa-regular fa-gem big-x"></i>
                        <span className="left-space">Overview</span>
                    </button>
                    {/* About button */}
                    <button onClick={() => navigate("/about")} className={"btn navbtn noactive flex center medel" + (isActive("/about") ? " active" : "noactive")}>
                        <i className="fa-regular fa-user big-x"></i>
                        <span className="left-space">About</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidemenu;