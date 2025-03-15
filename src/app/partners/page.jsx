"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Events() {
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
          src="//logoo.png"
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
          <li onClick={Home} className="hover:text-red-500 text-red-500">
            <a>Home</a>
          </li>
          <li onClick={Events} className="hover:text-red-500">
            <a>Events</a>
          </li>
          <li onClick={Speaker} className="hover:text-red-500">
            <a>Speaker Roster</a>
          </li>
          <li onClick={Elite} className="hover:text-red-500">
            <a>Elite Sponsors</a>
          </li>
          <li onClick={Sponsors} className="hover:text-red-500">
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
        <h1 className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          OUR PARTNERS
        </h1>
        <div className="flex justify-center mx-auto">
          <hr className="border-black w-11/12" />
        </div>

        {/* First Partner */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-black">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
              src="/check-pic5.png"
            />
          </div>
          <div className="w-full md:w-2/4 text-md text-center md:text-left">
            <h1 className="text-xl font-bold">TUNNELS TO TOWERS</h1>
            <p className="text-sm">
              The Tunnel to Towers Foundation honors the sacrifice of
              firefighter Stephen Siller who laid down his life to save others
              on September 11, 2001. They also honor our military and first
              responders who continue to make the supreme sacrifice of life and
              limb for our country. Over $250 Million Dollars donated to various
              programs. The MTU is honored to be working alongside this
              foundation.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className="border-black w-11/12" />
        </div>

        {/* Second Partner */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-black">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
              src="/The Legacy Alliance.png"
            />
          </div>
          <div className="w-full md:w-2/4 text-md text-center md:text-left">
            <h1 className="text-xl font-bold">THE LEGACY ALLIANCE</h1>
            <p className="text-sm">
              At The Legacy Alliance, we appreciate that true satisfaction lies
              not only in personal accomplishments but also in the positive
              influence we exert on others. Our mastermind tribe provides a
              unique opportunity for you to make the transition from success to
              significance. By aligning with other ambitious individuals who
              resonate with your values, you’ll receive steadfast support,
              motivation, and guidance as you aim to leave a lasting imprint on
              the world.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center bg-[#767676] h-auto md:h-28 items-center mt-8 text-center gap-6 md:gap-40 p-6">
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

export default Events;
