import React from "react";
import icons from "../../Assets/Social Media Icons.png";
import phone from "../../Assets/Phone Mockup.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="mt-20">
        <div className="flex items-start md:items-center justify-between flex-col-reverse md:flex-row gap-4">
          <div className="text-start">
            <h2 className="font-extrabold text-4xl my-2 w-[35rem]">
              Curate your feed from dozens of resources.
            </h2>
            <p className="w-[34rem] text-gray-500 my-2">
              We cover all major platforms where one could want to curate their
              feed from. Reddit, ProductHunt, IndieHackers, and so much more.
            </p>
            <p className="text-purple-900 font-bold">
              See full list of resources
            </p>
          </div>
          <div>
            <img src={icons} alt="social media icons" className="w-96" />
          </div>
        </div>

        <div className="flex items-start md:items-center justify-between mt-20 md:mt-40 flex-col md:flex-row gap-4">
          <div>
            <img src={phone} alt="phone mockup" className="w-[40rem]" />
          </div>
          <div className="text-start">
            <h2 className="font-extrabold text-4xl my-2 w-[35rem]">
              Access your feed from the comfort of your phone.
            </h2>
            <p className="w-[34rem] text-gray-500 my-2">
              With native apps for both iOS and Android, accessing your curated
              content has never been easier.
            </p>
            <Link to="/signup">
              <p className="text-purple-900 font-bold">
                Sign up for the waitlist
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
