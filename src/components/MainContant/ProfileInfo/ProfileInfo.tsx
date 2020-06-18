import React from 'react';
import st from "./ProfileInfo.module.css";
import photo2 from "../../../photo/photo2.jpeg";
import logo2 from "../../../photo/logo2.png";



function ProfileInfo() {
    return (
        <div>
            <div className= {st.thisPhoto}><img src={photo2} alt="bigPhoto"/></div>
            <div className={st.description}>
                <div className= {st.thisLogo}>><img src={logo2} alt="Avatar"/></div>
                <div>Info about me</div>
            </div>
        </div>




    )

}


export default ProfileInfo;