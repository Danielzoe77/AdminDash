import React, { useState } from "react";

import "../../App.scss";
import video from "../../LoginAsset/Forest_trees_video_footage(1080p60).mp4";
import logo from "./../../LoginAsset/my lo.png";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { FaUserShield } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineSwapRight } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi";
import axios from "axios";
import Validation from "../Validation";

const Register = () => {
  // useState to hold inputs
  const [femail, setEmail] = useState({ email: "" });
  const [fuserName, setUserName] = useState({ username: "" });
  const [fpassword, setPassword] = useState({ password: "" });
  const [message, setMessage] = useState("");
  

  const [errors, setErrors] = useState({});
  

  function handleInputUserName(event) {
    const newObj = { ...fuserName, [event.target.name]: event.target.value };
    setUserName(newObj);
  }
  function handleInput(event) {
    const newObj = { ...femail, [event.target.name]: event.target.value };
    setEmail(newObj);
  }

  function handleInputPassword(event) {
    const newObj = { ...fpassword, [event.target.name]: event.target.value };
    setPassword(newObj);
  }

  const navigateTo = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    setErrors(Validation(femail, fuserName, fpassword));
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/register",
        {
          email: femail.email,
          username: fuserName.username,
          password: fpassword.password,
        }
      );
      console.log(response.data);

      if (response.status === 201) {
        // User created successfully
        navigateTo("/login");
        setEmail("");
        setUserName("");
        setPassword("");
      } else if (response.status === 400) {
        // Bad request error
        setMessage("Invalid request. Please check your input.");
      }
    } catch (error) {
      if(error.response.data.error==="email already exists"){
        setMessage("Email already exists, please login");
      }else{
        console.error(error);
        setMessage("User creation failed.");
      }
     
      setTimeout(() => {
        setMessage();
      }, 4000);
    }
  };

  const loginWithGoogle = () => {
    window.open("http://localhost:3001/auth/google/callback", "_self");
  };

  return (
    <div className="registerPage flex ">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoplay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create and sell Extraordinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Already have an account?</span>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
        <div
          className="formDiv flex"
          style={{ marginBottom: "150px", gap: "0rem" }}
        >
          <div className="headerDiv">
            <img src={logo} alt="" />
            <h2>Welcome Back!</h2>
          </div>
          <form
            action=""
            className="form grid "
            // onSubmit={handleValidation}
            style={{ marginBottom: "3px" }}
          >
            <span className="showMessage">{message}</span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder=" Enter Username"
                  // onChange={(e)=>{
                  // (setUserName(e.target.value))
                  // }}
                  onChange={handleInputUserName}
                />
              </div>
              {errors.username && (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.username}
                </span>
              )}
            </div>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdOutlineMail className="icon" />
                <input
                  type="email"
                  id="useremail"
                  name="email"
                  placeholder=" Enter Email"
                  // onChange={(e)=>{
                  // (setEmail(e.target.value))
                  // }}
                  onChange={handleInput}
                />
              </div>
              {errors.email && (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.email}
                </span>
              )}
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <HiOutlineLockClosed className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder=" Enter Password"
                  name="password"
                  // onChange={ e =>
                  //  setPassword(e.target.value)
                  // }
                  onChange={handleInputPassword}
                />
              </div>
              {errors.password && (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.password}
                </span>
              )}
            </div>
            <button type="submit" onClick={createUser} className="btn flex">
              {/* <button type="submit" className="btn flex"> */}
              <span> Sign Up</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            <br />

            {/* <a href="/dashboard"> Dashboard</a> */}
{/* 
            <span className="forgotPassword">
              Forgot your Password? <a href="">Click Here</a>
            </span> */}
          </form>
          <button className="btn" onClick={loginWithGoogle}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
