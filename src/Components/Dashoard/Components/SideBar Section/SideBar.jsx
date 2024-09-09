import React from "react";
import "./sidebar.scss";
import logo from "../../Assets/my lo.png";
import { FaUserShield } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md"
import { BsTrophy } from "react-icons/bs"
import { FaChartLine } from "react-icons/fa6"
import { FaPeopleLine } from "react-icons/fa6";
import { FaQ } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
const navigateTo = useNavigate()

axios.defaults.withCredentials = true;
const handleLogout = () => {
  axios.get("http://localhost:3001/api/users/logout")
    .then((response) => {
      window.localStorage.removeItem("token");
      navigateTo('/login')
    //  if (response.data.status) {
    //     navigateTo('/login')

    //   }
      console.log(response);
    
})
.catch((error) => {
  console.error(error);
});
}

  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Planti.</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDashboard className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">Orders</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <FaChartLine className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <FaPeopleLine className="icon" />
              <span className="smallText">Customers</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <FaQ className="icon" />
              <span className="smallText">FAQ's</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#"  className="menuLink flex">
              <IoMdLogOut className="icon" />
              <span className="smallText" onClick={handleLogout} >Logout</span>
            </a>
          </li>
        </ul>
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
  );
};

export default Sidebar;
