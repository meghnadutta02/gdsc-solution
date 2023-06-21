import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link as ScrolLink } from "react-scroll";
import { logout, reset } from "../redux/authSlice";
export default function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  
  return (
    <>
      {/* Sidebar */}
      <div className=" md:flex fixed flex-col top-[35%] right-0 z-10" >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-blue-600 px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              <FaLinkedin size={30} />
              Linkedin
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-red-600 px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              <HiOutlineMail size={30} /> Email
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-blue-600 px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              <FaFacebook size={30} /> Facebook
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#565f69] px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              <FaTwitter size={30} /> Twitter
            </a>
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <div className="bg-teal-700 shadow fixed z-10 w-full border-b-2 border-black drop-shadow-lg" >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-100"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14.5,16 C14.2238576,16 14,15.7761424 14,15.5 L14,9.5 C14,9.22385763 14.2238576,9 14.5,9 L16,9 C17.1045695,9 18,9.8954305 18,11 C18,11.4116588 17.8756286,11.7942691 17.6624114,12.1123052 C18.4414283,12.3856578 19,13.1275982 19,14 C19,15.1045695 18.1045695,16 17,16 L14.5,16 Z M15,15 L17,15 C17.5522847,15 18,14.5522847 18,14 C18,13.4477153 17.5522847,13 17,13 L15,13 L15,15 Z M15,12 L16,12 C16.5522847,12 17,11.5522847 17,11 C17,10.4477153 16.5522847,10 16,10 L15,10 L15,12 Z M12.9499909,4 L19.5,4 C20.8807119,4 22,5.11928813 22,6.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L13.5,22 C12.2700325,22 11.2475211,21.1117749 11.0389093,19.9417682 C10.8653433,19.9799013 10.6850188,20 10.5,20 L4.5,20 C3.11928813,20 2,18.8807119 2,17.5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L10.5,2 C11.709479,2 12.7183558,2.85887984 12.9499909,4 Z M13,5 L13,17.5 C13,18.3179089 12.6072234,19.0440799 12,19.5001831 C12.0000989,20.3285261 12.6716339,21 13.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,6.5 C21,5.67157288 20.3284271,5 19.5,5 L13,5 Z M8.56005566,11.4964303 C8.54036595,11.4987873 8.52032459,11.5 8.5,11.5 L6.5,11.5 C6.47967541,11.5 6.45963405,11.4987873 6.43994434,11.4964303 L5.96423835,12.6856953 C5.86168164,12.9420871 5.57069642,13.066795 5.31430466,12.9642383 C5.0579129,12.8616816 4.93320495,12.5706964 5.03576165,12.3143047 L7.03576165,7.31430466 C7.20339081,6.89523178 7.79660919,6.89523178 7.96423835,7.31430466 L9.96423835,12.3143047 C10.066795,12.5706964 9.9420871,12.8616816 9.68569534,12.9642383 C9.42930358,13.066795 9.13831836,12.9420871 9.03576165,12.6856953 L8.56005566,11.4964303 Z M8.16148352,10.5 L7.5,8.8462912 L6.83851648,10.5 L8.16148352,10.5 Z M10.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,17.5 C3,18.3284271 3.67157288,19 4.5,19 L10.5,19 C11.3284271,19 12,18.3284271 12,17.5 L12,4.5 C12,3.67157288 11.3284271,3 10.5,3 Z M6.5,18 C6.22385763,18 6,17.7761424 6,17.5 C6,17.2238576 6.22385763,17 6.5,17 L8.5,17 C8.77614237,17 9,17.2238576 9,17.5 C9,17.7761424 8.77614237,18 8.5,18 L6.5,18 Z M15.5,20 C15.2238576,20 15,19.7761424 15,19.5 C15,19.2238576 15.2238576,19 15.5,19 L17.5,19 C17.7761424,19 18,19.2238576 18,19.5 C18,19.7761424 17.7761424,20 17.5,20 L15.5,20 Z"
                  />
                </svg>
              </div>
            </Link>
            <div className="hover:cursor-pointer hidden sm:flex sm:items-center">
              <ScrolLink
                to="about"
                smooth={true}
                duration={500}
                className="text-white text-lg font-semibold hover:text-amber-400 mr-4"
              >
                About
              </ScrolLink>
              <ScrolLink
                to="contact"
                smooth={true}
                duration={500}
                className="text-white text-lg font-semibold hover:text-amber-400 mr-4"
              >
                Contact
              </ScrolLink>
              <ScrolLink
                to="campaigns"
                smooth={true}
                duration={500}
                className="text-white text-lg font-semibold hover:text-amber-400 mr-4"
              >
                Services
              </ScrolLink>
              <Link
                to="/"
                className="text-white text-lg font-semibold hover:text-amber-400"
              >
                Home
              </Link>
            </div>
            {user ? (
              <div className="relative">
                <button
                  onClick={handleDropdownToggle}
                  className="flex items-center text-white hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded-full p-1"
                >
                  <FaUser className="sm:block hidden w-6 h-6" />
                </button>
                {showDropdown && (
                  <div
                    className="absolute border-2 right-0 text-md text-gray-700 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <Link
                      to="/my-fundraisers"
                      className="block p-1 hover:bg-gray-300"
                      role="menuitem"
                    >
                      My Fundraisers
                    </Link>
                    <Link
                      to="/my-donations"
                      className="block p-1 hover:bg-gray-300 "
                      role="menuitem"
                    >
                      My Donations
                    </Link>
                    <Link
                      to="/my-events"
                      className="block p-1 hover:bg-gray-300"
                      role="menuitem"
                    >
                      My Events
                    </Link>
                    <Link
                      to="/my-profile"
                      className="block p-1 hover:bg-gray-300"
                      role="menuitem"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={() => {
                        dispatch(logout());
                        dispatch(reset());
                      }}
                      className="block w-full text-left p-1 hover:bg-indigo-500 hover:text-white"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex sm:items-center">
                <Link
                  to="/login"
                  className="text-white text-lg font-semibold hover:text-amber-400 mr-4"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="text-white text-lg font-semibold border px-4 py-2 rounded-lg hover:text-amber-400 hover:border-purple-600"
                >
                  Sign up
                </Link>
              </div>
            )}

            <div className="sm:hidden cursor-pointer">
              <div onClick={handleClick} className="md:hidden z-10 text-3xl">
                {!nav ? <FaBars style={{ color: "white" }} /> : <FaTimes />}
              </div>
            </div>
          </div>

          {/* Mobile screen navbar */}
          <div className={!nav ? "hidden" : "block sm:hidden bg-teal-700 py-2"}>
            <div className="flex flex-col text-white text-center text-lg font-semibold">
              <Link to="/about" className=" hover:text-amber-400 mb-1">
                About
              </Link>

              <ScrolLink
                to="contact"
                smooth={true}
                duration={500}
                className=" hover:text-amber-400 mb-1"
              >
                Contact
              </ScrolLink>

              <ScrolLink
                to="campaigns"
                smooth={true}
                duration={500}
                className="hover:text-amber-400 mb-1"
              >
                Services
              </ScrolLink>
              <Link to="/" className="hover:text-amber-400 mb-1">
                Home
              </Link>
              {user ? (
                <div className="flex justify-center items-center border-t-2 py-4 ">
                  <a href="/my-fundraisers" className="">
                    My Fundraisers
                  </a>
                  <a href="/my-donations" className="">
                    My Donations
                  </a>
                  <a href="/my-events" className="">
                    My Events
                  </a>
                  <button
                    onClick={() => {
                      dispatch(logout());
                      dispatch(reset());
                    }}
                    className="border px-4 py-2 rounded-lg hover:text-amber-400 hover:border-purple-600"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex justify-center items-center border-t-2 pt-2">
                  <Link to="/login" className="hover:text-amber-400 mr-4">
                    Sign in
                  </Link>
                  <Link to="/register" className="hover:text-amber-400 mr-4">
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
