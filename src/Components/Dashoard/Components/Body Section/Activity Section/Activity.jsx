import React from 'react'
import './activity.scss'
import { FaUserShield } from "react-icons/fa";
import img3 from "../../../Assets/images (31).jpeg";
import { BsArrowRightShort } from "react-icons/bs";
const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Daniel Ehis</span>
            <small>Order a new item</small>
          </div>
          <div className="duration">
              2 mins ago
          </div>

        </div>
        <div className="singleCustomer flex">
          <img src={img3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Daniel Ehis</span>
            <small>Order a new item</small>
          </div>
          <div className="duration">
              2 mins ago
          </div>

        </div>
        <div className="singleCustomer flex">
          <img src={img3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Daniel Ehis</span>
            <small>Order a new item</small>
          </div>
          <div className="duration">
              2 mins ago
          </div>

        </div>
        <div className="singleCustomer flex">
          <img src={img3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Daniel Ehis</span>
            <small>Order a new item</small>
          </div>
          <div className="duration">
              2 mins ago
          </div>

        </div>
        <div className="singleCustomer flex">
          <img src={img3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Daniel Ehis</span>
            <small>Order a new item</small>
          </div>
          <div className="duration">
              2 mins ago
          </div>

        </div>

      </div>
   
    </div>
  )
}

export default Activity