import React from "react";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
                <div className="bg-cover">
      <Header />
      <div className="hero-row container">
        <div className="hero-col-left">
          <div className="hero-col-left-title">We Take Care of the Future</div>
          <div className="hero-col-left-desc">
            We know how large objects will act, but things on a small scale.
          </div>
          <div className="hero-col-left-buttons">
            <button className="hero-col-left-buttons-button yellow-btn">
            Get Quote Now
            </button>
            <button className="hero-col-left-buttons-button transparent-btn">
            Get Quote Now
            </button>
          </div>
        </div>
        <div className="hero-col-right">
            <h3 className="hero-col-right-title">
            Book Appointment
            </h3>
            <form  className="hero-col-right-form">
                <label htmlFor="fullName" className="hero-col-right-form-label">
                    Name *
                    <input placeholder="Full Name" className="hero-col-right-form-label-input" id="fullName" type="text" />
                </label>
                <label htmlFor="email" className="hero-col-right-form-label">
                    Email *
                    <input placeholder="name@mail.com" className="hero-col-right-form-label-input" id="email" type="email" />
                </label>
                <label htmlFor="department" className="hero-col-right-form-label">
                    Department *
                    <select id="department" className="hero-col-right-form-label-selectbox">
                        <option className="" disabled selected>Please Select</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </label>
                <label htmlFor="time" className="hero-col-right-form-label">
                    Time *
                    <select id="time" className="hero-col-right-form-label-selectbox">
                        <option className="" disabled selected>Please Select</option>
                        <option>13:00 Avaible</option>
                        <option className="" disabled>15:00 Unavailable</option>
                        <option>17:00 Avaible</option>
                    </select>
                </label>
            </form>
            <button className="hero-col-right-form-button">
                Book Appointment
                </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
