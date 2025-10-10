import React from "react";

// icons
import { GiScales } from "react-icons/gi";
import { TbHistoryToggle } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { MdDataUsage } from "react-icons/md";
import { PiGithubLogoLight } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";

function Repo() {
    return (
        <>
            <div className="infoGlass fillSet">
                <div className="wHaf">
                    <div className="flex medel">
                        <span className="subTitle">
                            This-is-repo-name
                        </span>
                        <span className="mark">
                            Pubilc
                        </span>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda asperiores laudantium dolores mollitia soluta repudiandae repellat? Aut, iste molestias.
                        </p>
                        <div className="flex wrap">
                            <span className="mark">
                                <MdDataUsage /> 270 MB
                            </span>
                            <span className="mark">
                                <FaRegStar /> 120k
                            </span>
                            <span className="mark">
                                <GiScales /> MIT License
                            </span>
                            <span className="mark">
                                <TbHistoryToggle />  10/10/25 10:20 AM
                            </span>

                            <span className="mark">
                              <TbWorldWww />  Live
                            </span>

                            <span className="mark">
                               <PiGithubLogoLight /> GitHub
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Repo;