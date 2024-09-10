import React, {useEffect, useState} from "react";
import "./Login.css";
import "../../App.scss";
import video from "../../LoginAsset/Forest_trees_video_footage(1080p60).mp4";
import logo from "./../../LoginAsset/my lo.png";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md"; 
import { AiOutlineSwapRight } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi";
import axios, { Axios } from "axios";
import Validate from "./Validate";


const Login = () => {
  // const [loginEmail,setLoginEmail] = useState('')
  // const [loginPassword,setloginPassword] = useState('')
  const [femail, setEmail] = useState({email:""});
  const [fpassword, setPassword] = useState({password:""});
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  function handleInput(event) {
    const newObj = { ...femail,  [event.target.name]: event.target.value };
    setEmail(newObj);
  }


  function handleInputPassword(event) {
    const newObj = { ...fpassword,  [event.target.name]: event.target.value };
    setPassword(newObj);
  }

  const navigateTo = useNavigate()
 
 
  const loginUser = async (e) => {
    e.preventDefault();
    setErrors(Validate(femail, fpassword));
    try {
      const response = await axios.post("https://admin-dash-mauve.onrender.com/login", {
        email:femail.email,
        password:fpassword.password,
      }
      );


      if (response.status === 201) {
        // login successfully
        const token = response.data.token
    
        localStorage.setItem('token', token);
        navigateTo('/dashboard')
        setEmail('')
        setPassword('')
      } else if (response.status === 400) {
        // Bad request error
        setMessage("Invalid request. Please check your input.")
      }
    } catch (error) {
      console.error(error);
      setMessage("User creation failed.");
      setTimeout(() => {
        setMessage()
      }, 4000);
    }
  };



  const loginWithGoogle = () => {
    window.open("/auth/google/callback", "_self");
  };

  return (
    <div className="loginPage flex ">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoplay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create and sell Extraordinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to="/register">
            <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="" />
            <h2>Welcome Back!</h2>
          </div>
          <form  className="form grid " >
          <span className="showMessage">{message}</span>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdOutlineMail className="icon" />
                <input
                  type="email"
                  id="useremail"
                  name="email"
                  placeholder=" Enter Email"
                  // onChange={(event)=>
                  //  console.log( setLoginEmail(event.target.value))
                  // } 
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
                  name="password"
                  placeholder=" Enter Password"
                  // onChange={(e)=>{
                  //   setloginPassword(e.target.value)
                  // }}
                  onChange={handleInputPassword}
                />
              </div>
              {errors.password && (
                <span style={{ color: "red", fontSize: "13px" }}>
                  {errors.password}
                </span>
              )}
            </div>

            <button type="submit" onClick={loginUser} className="btn flex">
              <span> Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

          

            <span className="forgotPassword">
           <Link to="/forgotPassword">Forgot Password? </Link>
             {/* Forgot your Password? <a href="">Click Here</a> */}
            </span>
          </form>
          <button className="btn" onClick={loginWithGoogle}>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
