import React from "react";
import "./listing.scss";
import { FaUserShield } from "react-icons/fa";
import img2 from "../../../Assets/dinner.jpeg";
import img3 from "../../../Assets/anina.jpg";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img2} alt="" />
          <h3>Annnual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img2} alt="" />
          <h3>Annnual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="" />
          <h3>Annnual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="" />
          <h3>Annnual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img3} alt="User Image" />
              <img src={img3} alt="User Image" />
              <img src={img3} alt="User Image" />
              <img src={img3} alt="User Image" />
              
             </div>
             <div className="cardText">
              <span>
                14.556 plant sold <br />
                <small>
                  21 sellers <span className="date">
                    7 Days
                  </span>
                </small>
              </span>
            </div>
            

          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img3} alt="User Image" />
              <img src={img3} alt="User Image" />
              <img src={img3} alt="User Image" />
              <img src={img3} alt="User Image" />
             
            </div>
            <div className="cardText">
              <span>
                28,556 plant sold <br />
                <small>
                  54 sellers <span className="date">
                    31 Days
                  </span>
                </small>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
