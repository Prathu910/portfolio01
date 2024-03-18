import React from "react";
import {
  FaEnvelopeOpenText,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaCalendar,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedinIn,
} from "react-icons/fa";
import { personalInfo } from "../data";
import downloadImg from "../../public/images/icons/dowanload.png";

const PersonalInfo = () => {
  return (
    <div className="lg:hidden">
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        {/* <!-- profile image  --> */}
        <img
          src="public/images/about/avatar.jpg"
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
          alt="about"
        />
        <div className="pt-[100px] pb-8">
          <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
            {personalInfo.name}
          </h2>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
            {personalInfo.profession}
          </h3>

          <div className="flex justify-center space-x-3">
            {/* <!-- facebook icon and link --> */}
            <a
              href={personalInfo.socialMedia[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#1773EA]">
                <FaFacebookF />
                {/* <i className="fa-brands fa-facebook-f"></i> */}
              </span>
            </a>
            {/* <!-- twitter icon and link --> */}
            <a
              href={personalInfo.socialMedia[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#1C9CEA]">
                <FaTwitter />
                {/* <i className="fa-brands fa-twitter"></i> */}
              </span>
            </a>
            {/* <!-- dribbble icon and link --> */}
            <a
              href={personalInfo.socialMedia[2]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#e14a84]">
                <FaDribbble />
                {/* <i className="fa-brands fa-dribbble"></i> */}
              </span>
            </a>
            {/* <!-- linkedin icon and link --> */}
            <a
              href={personalInfo.socialMedia[3]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1]">
                <FaLinkedinIn />
                {/* <i className="fa-brands fa-linkedin-in"></i> */}
              </span>
            </a>
          </div>

          {/* <!-- personal info start --> */}
          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                <FaMobileAlt />
                {/* <i className="fa-solid fa-mobile-screen-button"></i> */}
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Phone
                </p>
                <p className="dark:text-white">{personalInfo.phone}</p>
              </div>
            </div>

            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                <FaEnvelopeOpenText />
                {/* <i className="fa-solid fa-envelope-open-text"></i> */}
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Email
                </p>
                <p className="dark:text-white">{personalInfo.email}</p>
              </div>
            </div>

            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                <FaMapMarkerAlt />
                {/* <i className="fa-solid fa-location-dot"></i> */}
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Location
                </p>
                <p className="dark:text-white">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                <FaCalendar />
                {/* <i className="fa-solid fa-calendar-days"></i> */}
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Birthday
                </p>
                <p className="dark:text-white">{personalInfo.birthday}</p>
              </div>
            </div>
          </div>
          {/* <!-- personal info end --> */}

          {/* <!-- dowanload button --> */}
          <button className="dowanload-btn">
            <img className="mr-3" src={downloadImg} alt="icon" /> Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
