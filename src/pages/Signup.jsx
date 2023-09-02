import React from "react";
import logo from "../../Assets/Logo.svg";
import arrow from "../../Assets/Back Arrow.svg";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <nav className="flex justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="flex gap-4">
            <img src={arrow} alt="" />
            <p className="font-bold hidden md:block">Back to homepage</p>
          </Link>
        </div>
      </nav>
      <section className="flex flex-col lg:flex-row justify-between items-center mt-5">
        <div>
          <h1 className="font-extrabold text-4xl text-start my-6">
            Create your personalized feed
          </h1>
          <p className="w-[33rem] text-start my-4 font-medium text-xl">
            🎈 <span className="font-bold text-2xl">Over 20 resources. </span>
            With resources ranging from Reddit to IndieHackers, we've got all
            your needs covered.
          </p>
          <p className="w-[33rem] text-start my-4 font-medium text-xl">
            🗞️ <span className="font-bold text-2xl">Delivered weekly. </span>
            Every week at exactly Tuesday 12:00 P.M. EST - expect a value-packed
            digest right in your email.
          </p>
          <p className="w-[33rem] text-start my-4 font-medium text-xl">
            💡<span className="font-bold text-2xl">Unlimited ideas. </span>
            With all the ideas you'll be reading about, what's stopping you from
            creating a sustainable startup?
          </p>
        </div>
        <div className="bg-gray-300 p-16 rounded-md text-start">
          <h2 className="font-black text-2xl my-2">
            Create your IndieBrew account
          </h2>
          <form className="w-96">
            <div className="flex flex-col my-5">
              <label htmlFor="email" className="font-medium text-xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-gray-300 border-2 p-3 rounded-md my-2"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="font-medium text-xl">
                Full Name
              </label>
              <input
                placeholder="John Doe"
                type="text"
                id="name"
                className="border-gray-300 border-2 p-3 rounded-md my-2"
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="password" className="font-medium text-xl">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="At least 8 characters"
                minLength={8}
                className="border-gray-300 border-2 p-3 rounded-md my-2"
              />
            </div>
          </form>
          <div className="flex items-center gap-2 my-4">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              className="cursor-pointer "
            />
            <p className="w-80 font-medium text-xl ">
              By creating an account on IndieBrew, you agree to the
              <Link
                to="/"
                className="ml-1 underline font-extrabold text-xl text-purple-950"
              >
                Terms & Conditions.
              </Link>
            </p>
          </div>
          <div>
            <button className="bg-blue-700 mt-2 p-4 w-full text-white rounded-md font-bold text-xl">
              Create Fiber Account
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
