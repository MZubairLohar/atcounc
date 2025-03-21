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
      {/* <div className="navbar bg-[#C1C1C1] h-[232px]">
  <div className="flex-1 pl-10">
   <img className="w-32 h-48" src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal text-black px-1">
      <li onClick={Home} className="hover:text-red-500"><a>Home</a></li>
      <li onClick={Events} className="hover:text-red-500 text-red-500"><a>Events</a></li>
      <li onClick={Speaker} className="hover:text-red-500"><a>Speaker Roster</a></li>
      <li onClick={Elite} className="hover:text-red-500"><a>Elite Sponsors</a></li>
      <li onClick={Sponsors} className="hover:text-red-500"><a>Exhibiting Sponsors</a></li>
      <li onClick={Aboutus} className="hover:text-red-500"><a>About Us</a></li>
      <li onClick={Partners} className="hover:text-red-500"><a>Partners</a></li>
      <li onClick={Gallery} className="hover:text-red-500"><a>Gallery</a></li>
    </ul>
  </div>
</div> */}
      {/* <div className=" bg-[#C1C1C1] h-[204px] flex items-center justify-between px-48">
        <div className="">
          <img
            className="w-30 h-44  text-2xl"
            src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png"
          />
        </div>
        <div className="flex items-center">
          <ul className="menu menu-horizontal text-black  flex items-center">
            <li onClick={Home} className="hover:text-red-500">
              <a>Home</a>
            </li>
            <li onClick={Events} className="hover:text-red-500  text-red-500">
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
            <li onClick={Aboutus} className="hover:text-red-500 ">
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
      </div> */}
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
          <li onClick={Events} className="hover:text-red-500 text-red-500">
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
      {/* <div className="mt-14 space-x-20 space-y-10">
        <h1 className="text-black text-center text-6xl font-bold">EVENTS</h1>

        <hr className="border-black mx-auto flex justify-center" />
        <div className="flex  justify-between text-black ">
          <div className="w-1/3 text-2xl font-bold mx-auto">
            <h1>November 12, 2024</h1>
            <h1>6PM</h1>
          </div>
          <div className="w-2/3 text-2xl">
            <h1 className="text-2xl font-bold">ATC Focus Dinner</h1>
            <h1>Benjamin Prime Steakhouse</h1>
            <h1>
              23 E 40th St., Between Park and Madison Avenue, New York City, NY
              10016
            </h1>
            <button className="btn btn-error bg-red-500 text-xl text-white">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12" />
        </div>
        <div className="flex justify-between text-black">
          <div className="w-1/3 text-2xl font-bold">
            <h1>April 10-11, 2025</h1>
            <h1>8:00AM-4:00PM</h1>
          </div>
          <div className="w-2/3 text-2xl">
            <h1 className="text-2xl font-bold">
              Annual NYC Anti-Terrorism Symposium
            </h1>
            <h1>New York Downtown Marriott</h1>
            <h1>New York, NY 10006</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12" />
        </div>
      </div> */}
      <div className="mt-14 space-y-10 flex flex-col items-center px-4">
        {/* EVENTS Heading */}
        <h1 className="text-black text-center text-3xl md:text-5xl font-bold">
          EVENTS
        </h1>

        <div className="flex flex-col w-full md:w-11/12 pl-14 space-y-10">
          <hr className="border-black w-full md:w-11/12" />

          {/* First Event */}
          {/* <div className="flex flex-col md:flex-row items-center text-black w-full md:w-3/4 space-y-6 md:space-y-0"> */}
            {/* Date and Time */}
            {/* <div className="w-full md:w-1/3 text-xl md:text-2xl font-bold text-center md:text-left">
              <h1>November 12, 2024</h1>
              <h1>6PM</h1>
            </div> */}

            {/* Event Details */}
            {/* <div className="w-full md:w-2/3 text-lg md:text-xl text-center md:text-left">
              <h1 className="text-lg md:text-xl font-bold">
                ATC Focus Dinner
              </h1>
              <h1>Benjamin Prime Steakhouse</h1>
              <h1>
                23 E 40th St., Between Park and Madison Avenue, New York City,
                NY 10016
              </h1>
              <button className="btn btn-error bg-red-500 text-lg md:text-xl text-white px-4 md:px-4 py-2 mt-4">
                LEARN MORE
              </button>
            </div> */}
          {/* </div> */}

          {/* <hr className="border-black w-full md:w-11/12" /> */}

          {/* Second Event */}
          <div className="flex flex-col md:flex-row items-center text-black w-full md:w-3/4 space-y-6 md:space-y-0">
            {/* Date and Time */}
            <div className="w-full md:w-1/3 text-xl md:text-2xl font-bold text-center md:text-left">
              <h1>April 10-11, 2025</h1>
              <h1>8:00AM-4:00PM</h1>
            </div>

            {/* Event Details */}
            <div className="w-full md:w-2/3 text-lg md:text-xl text-center md:text-left">
              <h1 className="text-lg md:text-xl font-bold">
                Annual NYC Anti-Terrorism Symposium
              </h1>
              <h1>New York Downtown Marriott</h1>
              <h1>New York, NY 10006</h1>
            </div>
          </div>

          <hr className="border-black w-full md:w-11/12" />
        </div>
      </div>

      {/* <div className="flex justify-center bg-[#767676] h-28 items-center mt-8 text-center gap-40">
        <div className="text-xl font-bold">
          Office:
          <br />
          <span className="text-lg font-light">
            New York, NY - Undisclosed Location
          </span>
        </div>
        <div className="text-xl font-bold">
          Call:
          <br />
          <span className="text-lg font-light">(914) 760 - 9853</span>
        </div>
        <div className="text-xl font-bold">
          Email:
          <br />
          <span className="text-lg font-light">diane.barton@atcouncil.us</span>
        </div>
      </div> */}
      {/* <div className="flex flex-col md:flex-row justify-center bg-[#767676] h-auto md:h-28 items-center mt-8 text-center gap-6 md:gap-40 p-6">
        <div className="text-lg md:text-xl font-bold">
          Office:
          <br />
          <span className="text-base md:text-lg font-light">
            New York, NY - Undisclosed Location
          </span>
        </div>
        <div className="text-lg md:text-xl font-bold">
          Call:
          <br />
          <span className="text-base md:text-lg font-light">
            (914) 760 - 9853
          </span>
        </div>
        <div className="text-lg md:text-xl font-bold">
          Email:
          <br />
          <span className="text-base md:text-lg font-light">
            diane.barton@atcouncil.us
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-80 bg-[#E93D3D]">
        <img
          className="h-40 w-28"
          src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png"
          alt="ATC Logo"
        />
        <h1 className="mt-4 text-xl font-bold">
          Copyright 2024. All rights reserved
        </h1>
      </div> */}
       {/* First Section */}
       <div className="bg-[#767676] md:h-28 flex flex-wrap justify-center items-center text-center mt-10 gap-10 lg:gap-44 ">
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

      {/* Second Section */}
      <div className="flex flex-col justify-center items-center h-60 bg-[#E93D3D] px-5">
        <img
          className="h-36 w-24"
          src="/logoo.png"
          alt="ATC Logo"
        />
        <h1 className="mt-4 text-lg font-medium text-center">
          Copyright 2024. All rights reserved
        </h1>
      </div>
    </>
  );
}

export default Events;
