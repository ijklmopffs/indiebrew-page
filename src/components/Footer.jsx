import React from "react";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="flex md:flex-wrap lg:flex-nowrap gap-8 mt-20 md:items-center text-start justify-between flex-col md:flex-row items-start">
        <div>
          <h2 className="font-bold text-2xl">IndieBrew</h2>
          <p className="w-80 mb-10 mt-2 text-gray-500">
            With IndieBrew, get personal feeds from resources all around the
            web, including Reddit, HackerNews, and much more.
          </p>
          <p className="w-96">
            Made with <AiFillHeart className="inline-block" /> in the UK.
          </p>
        </div>
        <div className="flex flex-col md:mb-14">
          <h2 className="md:mb-5 font-bold text-xl">Sitemap</h2>
          <a href="/" className="my-1">
            Homepage
          </a>
          <a href="/" className="my-1">
            Pricing
          </a>
        </div>
        <div className="flex flex-col md:mb-8">
          <h2 className="md:mb-5 font-bold text-xl">Resources</h2>
          <a href="/" className="my-1">
            Support
          </a>
          <a href="/" className="my-1">
            Contact
          </a>
          <a href="/" className="my-1">
            FAQ
          </a>
        </div>
        <div className="flex flex-col md:mb-7">
          <h2 className="md:mb-5 font-bold text-xl">Company</h2>
          <a href="/" className="my-1">
            About
          </a>
          <a href="/" className="my-1">
            Customers
          </a>
          <a href="/" className="my-1">
            Blog
          </a>
        </div>
        <div className="flex flex-col md:mb-7">
          <h2 className="md:mb-5 font-bold text-xl">Portfolios</h2>
          <a href="/" className="my-1">
            HackerNews
          </a>
          <a href="/" className="my-1">
            Reddit
          </a>
          <a href="/" className="my-1">
            Twitter
          </a>
        </div>
      </footer>
    </>
  );
}
