import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo.svg";
import mockup from "../../Assets/Feed Mockup.png";
import avatars from "../../Assets/User Avatars.svg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <header className="relative">
        <nav className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <div
            className={
              nav
                ? "flex flex-col md:flex-row gap-4 items-center absolute left-2 p-4 rounded-md w-full md:w-auto top-20 bg-gray-500 md:static md:bg-transparent"
                : "flex flex-col md:flex-row gap-4 items-center absolute left-2 p-4 rounded-md w-full md:w-auto top-[-100%] bg-gray-500 md:static md:bg-transparent"
            }
          >
            <Link to="/pricing">Pricing</Link>
            <Link to="/support">Support</Link>
            <Link to="/signup">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white rounded-md">
                Get Started - <span className="text-gray-200">it's free</span>
              </button>
            </Link>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </nav>

        <section className="flex justify-between items-center mt-10 flex-col-reverse lg:flex-row">
          <div className="text-start md:w-full">
            <h1 className="font-extrabold text-6xl my-2 w-80 md:w-[34rem]">
              Your weekly personal feed digest.
            </h1>
            <p className="my-2 w-80 md:w-[34rem] text-gray-400">
              With IndieBrew, get personal feeds from resources all around the
              web, including Reddit, HackerNews, IndieHackers, and much more.
            </p>
            <Link to="/signup">
              <button className="my-2 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white rounded-md">
                Get Started - <span className="text-gray-200">it's free</span>
              </button>
            </Link>
            <img src={avatars} alt="" className="my-2" />
            <p className="text-gray-500">
              Join <span className="text-purple-900 font-black">32,642</span>{" "}
              IndieBrewers in curating their personal digest.
            </p>
          </div>
          <div>
            <img
              src={mockup}
              alt="mockup of social media feed"
              className="w-[40rem]"
            />
          </div>
        </section>
      </header>
    </>
  );
}
