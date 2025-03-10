"use client";
import { useRouter } from "next/navigation";

function Events() {
  const router = useRouter();
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
      <li onClick={Events} className="hover:text-red-500"><a>Events</a></li>
      <li onClick={Speaker} className="hover:text-red-500"><a>Speaker Roster</a></li>
      <li onClick={Elite} className="hover:text-red-500"><a>Elite Sponsors</a></li>
      <li onClick={Sponsors} className="hover:text-red-500"><a>Exhibiting Sponsors</a></li>
      <li onClick={Aboutus} className="hover:text-red-500"><a>About Us</a></li>
      <li onClick={Partners} className="hover:text-red-500 text-red-500"><a>Partners</a></li>
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
            <li onClick={Aboutus} className="hover:text-red-500 ">
              <a>About Us</a>
            </li>
            <li onClick={Partners} className="hover:text-red-500  text-red-500">
              <a>Partners</a>
            </li>
            <li onClick={Gallery} className="hover:text-red-500">
              <a>Gallery</a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="bg-[#C1C1C1] h-auto md:h-[204px] flex flex-col   md:flex-row items-center justify-between px-8 md:px-20 lg:px-52 py-4">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img
            className="w-30 h-32 md:w-30 md:h-44"
            src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png"
            alt="Logo"
          />
        </div>

        {/* Navigation Menu */}
        <div className="w-full md:w-auto">
          <ul className="menu menu-horizontal text-black flex flex-col md:flex-row items-center   text-sm md:text-thin">
            <li onClick={Home} className="hover:text-red-500">
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
            <li onClick={Sponsors} className="hover:text-red-500 ">
              <a>Exhibiting Sponsors</a>
            </li>
            <li onClick={Aboutus} className="hover:text-red-500">
              <a>About Us</a>
            </li>
            <li onClick={Partners} className="hover:text-red-500  text-red-500">
              <a>Partners</a>
            </li>
            <li onClick={Gallery} className="hover:text-red-500">
              <a>Gallery</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-14 space-y-10">
        <h1 className="text-black text-center text-4xl md:text-5xl lg:text-6xl font-bold">
          OUR PARTNERS
        </h1>
        <div className="flex justify-center mx-40">
          <hr className="border-black w-11/12" />
        </div>

        {/* First Partner */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-1 text-black">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
              src="/check-pic5.png"
            />
          </div>
          <div className="w-full md:w-2/3 text-md text-center md:text-left">
            <h1 className="text-2xl font-bold">TUNNELS TO TOWERS</h1>
            <p>
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-1 text-black mx-40">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
              src="/The Legacy Alliance.png"
            />
          </div>
          <div className="w-full md:w-2/3 text-md text-center md:text-center mx-40">
            <h1 className="text-2xl font-bold">THE LEGACY ALLIANCE</h1>
            <p>
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
      </div>
    </>
  );
}

export default Events;
