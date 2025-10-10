import React from "react";


// icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";


function Contacts() {
    return (
        <>
            <div className="flex center medel">
                <button className="btn navbtn noactive center medel flex telegram">
                    <FaTelegramPlane className="socalIcon"/>
                </button>
                <button className="btn navbtn noactive center medel flex facebook">
                    <FaFacebookF className="socalIcon"/>
                </button>
                <button className="btn navbtn noactive medel flex center linkedin">
                    <FaLinkedinIn className="socalIcon" />
                </button>
                <button className="btn noactive navbtn medel center flex wa">
                    <FaWhatsapp className="socalIcon"/>
                </button>
                <button className="btn navbtn noactive flex medel center snapchat">
                    <FaSnapchat className="socalIcon"/>
                </button>
            </div>
        </>
    )
}

export default Contacts;