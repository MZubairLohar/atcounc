"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Navbar from "@/app/navbar";
import Link from "next/link";

function EliteSponsors() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function Home() {
    router.push("../../");
  }
  function Events() {
    router.push("../../events");
  }
  function Speaker() {
    router.push("../../speakerRoster");
  }
  function Elite() {
    router.push("../../eliteSponsors");
  }
  function Sponsors() {
    router.push("../../exhibitingSponsors");
  }
  function Aboutus() {
    router.push("../../aboutUs");
  }
  function Partners() {
    router.push("../../partners");
  }
  function Gallery() {
    router.push("../../gallery");
  }
  return (
    <>
      <div className="bg-[#C1C1C1] h-auto md:h-[210px] flex flex-row items-center justify-between px-8 md:px-20 lg:px-32 py-6 relative">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <img
          className="w-24 h-28 md:w-28 md:h-44"
          src="/logoo.png"
          alt="Logo"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute right-8 top-8 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Menu */}
      <div className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:flex`}>
        <ul className="menu text-black flex flex-col md:flex-row items-center text-xs">
          <li onClick={Home} className="hover:text-red-500 ">
            <a>Home</a>
          </li>
          <li onClick={Events} className="hover:text-red-500">
            <a>Events</a>
          </li>
          <li onClick={Speaker} className="hover:text-red-500">
            <a>Speaker Roster</a>
          </li>
          <li onClick={Elite} className="hover:text-red-500 text-red-500">
            <a>Elite Sponsors</a>
          </li>
          <li onClick={Sponsors} className="hover:text-red-500 ">
            <a>Exhibiting Sponsors</a>
          </li>
          <li onClick={Aboutus} className="hover:text-red-500">
            <a>About Us</a>
          </li>
          <li onClick={Partners} className="hover:text-red-500">
            <a>Partners</a>
          </li>
          <li onClick={Gallery} className="hover:text-red-500">
            <a>Gallery</a>
          </li>
        </ul>
      </div>
    </div>
      <div className="mt-14 space-y-10">
        <h1 className="text-black text-center text-4xl md:text-5xl font-bold">
          ELITE SPONSORS
        </h1>

        <div className="flex items-center  justify-center">
          <hr className="border-black w-full md:w-11/12" />
        </div>

        
        {[
//           {
//             img: "/pic23.jpeg",
//             title: "ELEVEN10 GEAR",
//             description: `Eleven 10®, based in Cleveland, Ohio, is a manufacturer of
//               high-quality self-aid/buddy-aid gear that is proudly made in the
//               USA. We were founded by 2 brothers: a former Reconnaissance Marine
//               and current tactical paramedic, the other is a longtime police
//               officer and an active SWAT commander. This gives us the unique
//               insight of MIL/LE Special Operations, trauma medicine, and the
//               street cop. We’ve taken our personal experiences and designed
//               medical carrying equipment based on the lessons learned from the
//               streets of America & the conflicts in the Middle East.
// `,
//             link: "https://1110gear.com/",
//           },
          {
            img: "/pic24.jpeg",
            title: "Benchmade Knives",
            description: ` For two decades Benchmade has been designing and manufacturing the
              world's finest knives and edged tools. Our products are developed
              and tested for extreme duty and are the preferred cutting tools
              for Elite Military Troops and Public Safety Professionals around
              the globe. You can count on your Benchmade to get the job done.
              USA Proud!`,
            link: "https://www.benchmade.com/",
          },
          // {
          //   img: "/pic25.png",
          //   title: "CIRCLESQUARED",
          //   description: `              Founded in 2014, Circle Squared Alternative Investments LLC (CSQ)
          //     is a privately held Real Estate Investment firm. Founder Jeff
          //     Sica’s vision and belief is that sophisticated investors want and
          //     deserve access to alternatives to the public markets. Working with
          //     accomplished real estate developers with track records and deep
          //     experience while creating strong investment partnerships, CSQ has
          //     connected family offices and high net worth individuals with real
          //     estate projects that have traditionally only been available to
          //     institutional investors. CSQ is dedicated to helping you bridge
          //     the gap between your investment goals and your ability to achieve
          //     them.`,
          //   link: "https://www.circlesquaredalts.com",
          // },
          {
            img: "/pic26.jpeg",
            title: "SHOREHAVEN",
            description: `  As your advocate and fiduciary, we will custom-build a financial
              plan for you – one that is designed to help you protect, grow, and
              transition your wealth.`,
            link: "https://www.shorehavenwealth.com/",
          },
        ].map((sponsor, index) => (
          <div key={index}>
            <div className="flex flex-col w-10/12 ml-16 mt-4 mb-6 md:flex-row items-center text-black text-center md:text-left space-y-2 -md:space-y-2">
              <div className="w-1/4 flex justify-center">
                <img
                  src={sponsor.img}
                  alt={sponsor.title}
                  className="w-82 h-full mr-4  object-contain"
                />
              </div>

              <div className="w-full flex flex-col justify-start items-center md:items-start">
                <h1 className="text-xl md:text-2xl font-bold">
                  {sponsor.title}
                </h1>
                <p className="text-sm md:text-md leading-relaxed">
                  {sponsor.description}
                  <a
                    href={sponsor.link}
                    className="text-blue-500 w-10 ml-12 underline block md:inline mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sponsor.link}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <hr className="border-black w-full md:w-11/12" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex  justify-center bg-[#767676] h-28 items-center text-center mt-10 gap-40">
      <div className="text-lg font-bold">
          <div className="flex ">
            {/* <span className="flex "> */}
          <img 
            src="/location.png"
            className="w-[20px] h-[20px] mt-1"
            />
             Office:
             {/* </span> */}
             </div>
          <span className="text-lg font-light">
           
            New York, NY - Undisclosed Location
          </span>
        </div>
        <div className="text-lg font-bold">
          <div className="flex ">
            {/* <span className="flex "> */}
          <img 
            src="/call.png"
            className="w-[20px] h-[20px] mt-1"
            />
             Call:
             {/* </span> */}
             </div>
          <span className="text-lg font-light">
            (914) 760 - 9853
          </span>
        </div>
        <div className="text-lg font-bold">
          <div className="flex ">
            {/* <span className="flex "> */}
          <img 
            src="/mail.png"
            className="w-[20px] h-[20px] mt-1"
            />
             Email:
             {/* </span> */}
             </div>
          <span className="text-lg font-light">
          diane.barton@atcouncil.us
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-80 bg-[#E93D3D]">
        <img
          className="h-40 w-28"
          src="/logoo.png"
          alt="ATC Logo"
        />
        <h1 className="mt-4 text-xl font-bold">
          Copyright 2024. All rights reserved
        </h1>
      </div>
    </>
  );
}

export default EliteSponsors;
