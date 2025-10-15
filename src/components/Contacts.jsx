import React from "react";
import username from "../data/username.json";
import LinkUrl from '../data/LinkUrl.json';


// icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


function Contacts() {
    return (
        <>
            <div className="flex center medel">
                {
                    username.telegram_username ? (
                        <button onClick={() => window.location.href = LinkUrl.telegram_url + username.telegram_username} className="btn navbtn noactive center medel flex telegram">
                            <FaTelegramPlane className="socalIcon" />
                        </button>
                    ) : ("")
                }
                {
                    username.facebook_id_username ? (
                        <button onClick={() => window.location.href = LinkUrl.facebook_url + username.facebook_id_username} className="btn navbtn noactive center medel flex facebook">
                            <FaFacebookF className="socalIcon" />
                        </button>
                    ) : ("")
                }
                {
                    username.linkedIn_username ? (
                        <button onClick={() => window.location.href = LinkUrl.linkedin_url + username.linkedIn_username} className="btn navbtn noactive medel flex center linkedin">
                            <FaLinkedinIn className="socalIcon" />
                        </button>
                    ) : ("")
                }
                {
                    username.whatsapp_number ? (

                        <button onClick={() => window.location.href = LinkUrl.whatsapp_api + username.whatsapp_number} className="btn noactive navbtn medel center flex wa">
                            <FaWhatsapp className="socalIcon" />
                        </button>
                    ) : ("")
                }

                {
                    username.snapchat_username ? (
                        <button onClick={() => window.location.href = LinkUrl.snapchat_url + username.snapchat_username} className="btn navbtn noactive flex medel center snapchat">
                            <FaSnapchat className="socalIcon" />
                        </button>
                    ) : ("")
                }
                {
                    username.twitter_X_username ? (
                        <button onClick={() => window.location.href = LinkUrl.x_url + username.twitter_X_username} className="btn navbtn noactive medel center flex x">
                            <FaXTwitter className="socalIcon" />
                        </button>
                    ) : ("")
                }
            </div>
        </>
    )
}

export default Contacts;