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

const Sidebar = () => {
  return (
    <div class="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
      <div class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        {/* <!-- profile image --> */}
        <img
          src={personalInfo.avatar}
          class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
          alt="about"
        />
        <div class="pt-[100px] pb-8">
          <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
            {personalInfo.name}
          </h2>
          <h3 class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
            {personalInfo.profession}
          </h3>
          <div class="flex justify-center space-x-3">
            {/* <!-- facebook icon and link --> */}
            <a
              href={personalInfo.socialMedia[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="socialbtn text-[#1773EA]">
                <FaFacebookF />
              </span>
            </a>
            {/* <!-- twitter icon and link --> */}
            <a
              href={personalInfo?.socialMedia[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="socialbtn text-[#1C9CEA]">
                <FaTwitter />
              </span>
            </a>
            {/* <!-- dribbble icon and link --> */}
            <a
              href={personalInfo?.socialMedia[2]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="socialbtn text-[#e14a84]">
                <FaDribbble />
              </span>
            </a>
            {/* <!-- linkedin icon and link --> */}
            <a
              href={personalInfo?.socialMedia[3]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="socialbtn text-[#0072b1]">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
          {/* <!-- personal infomation start --> */}
          <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
              <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                <FaMobileAlt />
              </span>
              <div class="text-left ml-2.5">
                <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
                <p class="dark:text-white">{personalInfo.phone}</p>
              </div>
            </div>
            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span class="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                <FaEnvelopeOpenText />
              </span>
              <div class="text-left ml-2.5">
                <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
                <p class="dark:text-white">{personalInfo.email}</p>
              </div>
            </div>
            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span class="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                <FaMapMarkerAlt />
              </span>
              <div class="text-left ml-2.5">
                <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Location
                </p>
                <p class="dark:text-white">{personalInfo.location}</p>
              </div>
            </div>
            <div class="flex py-2.5">
              <span class="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                <FaCalendar />
              </span>
              <div class="text-left ml-2.5">
                <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Birthday
                </p>
                <p class="dark:text-white">{personalInfo.birthday}</p>
              </div>
            </div>
          </div>
          {/* <!-- personal infomation end--> */}
          {/* <!-- dowanload button --> */}
          <button class="dowanload-btn">
            <img
              class="mr-3"
              src="public/images/icons/dowanload.png"
              alt="icon"
            />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
