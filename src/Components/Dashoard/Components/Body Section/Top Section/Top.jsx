import React, { useState, useEffect } from 'react'
import './top.scss';
import { FaUserShield } from "react-icons/fa";
import imge from "../../../Assets/anina.jpg"
import img2 from "../../../Assets/beanspag.jpeg"
import video from '../../../Assets/Forest_Background_Video_Effects___Video_Effects_HD_Free_Stock__25fps_video_Templates_Animation_1080p(720p).mp4'
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";

import axios from "axios";

const Top =  () => {
  // const token = localStorage.getItem("token");
  // const decodedToken = JSON.parse(atob(token.split(".")[1]));
  // const username = decodedToken.username;
  const [username, setUsername] = useState('');
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUsername(decodedToken.username);
    }
  }, [token]);
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome  to Super blog</h1>
          <p>Hello ,<strong>{username.toUpperCase()}</strong>, you are welcome Back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <FaSearch className="icon" />
        </div>
        <div className="adminDiv flex">
        <FiMessageSquare className="icon" />
        <IoNotificationsOutline className="icon" />
        <div className="adminImage">
          <img src={imge} alt="Admin Image" />
        

        </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extra-ordinary products</h1>
          <p>The world's fastest growing today are natural made products</p>
          <div className="buttons flex">
             <button className="btn">Explore More</button>
             <button className="btn transparent">Top Sellers</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>My Stat </h1>
              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>175 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Check my orders  <BsArrowRightShort className="icon" />
              </span>

              {/* <div className="flex">
                <span>
                  This Month <br /> <small>127 Orders</small>
                </span>
              </div> */}

            </div>

          <div className="imgDiv">
            <img src={img2} alt="Image Name" />
          </div>

          <div className="sideBarCard">
      <FaUserShield className="icon" />
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>

        <h3>Help Center</h3>
        <p>Having trouble in Planti, please contact us for more enquiries</p>
        <button className="btn">Go to Help Center</button>
      </div>

      </div>

          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Top