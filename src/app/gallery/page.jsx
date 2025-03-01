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
      <li onClick={Partners} className="hover:text-red-500"><a>Partners</a></li>
      <li onClick={Gallery} className="hover:text-red-500 text-red-500"><a>Gallery</a></li>
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
            <li onClick={Partners} className="hover:text-red-500">
              <a>Partners</a>
            </li>
            <li onClick={Gallery} className="hover:text-red-500  text-red-500">
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
          <ul className="menu menu-horizontal text-black flex flex-col md:flex-row items-center  font-thin text-sm md:text-thin">
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
            <li onClick={Partners} className="hover:text-red-500">
              <a>Partners</a>
            </li>
            <li onClick={Gallery} className="hover:text-red-500  text-red-500">
              <a>Gallery</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-14 space-x-10">
        <h1 className="text-black text-center text-5xl font-bold">
          OUR GALLERY
        </h1>
        <h1 className="text-black text-center text-2xl">
          See some of our photos from past years' events!
        </h1>
      </div>
      <div className="flex justify-center gap-10 mt-10">
        <div className="flex flex-col items-center">
          <img
            src="https://atcouncil.us/static/media/GalaryFirstRow1.389ff7591dbd676148ec.jpeg"
            className="max-w-full"
            alt="Image 1"
          />
          <p className="text-md text-black mt-2">
            A view of last year's booths at the Symposium
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://atcouncil.us/static/media/GalaryFirstRow2.b7c54fae70142ff30c33.jpeg"
            className="max-w-full"
            alt="Image 2"
          />
          <p className="text-md text-black mt-2">
            Breakaway session at last year's Symposium
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <hr className="border-black w-11/12" />
      </div>

      <div className="flex mt-10">
        <div className="flex flex-col items-center">
          <img
            src="https://atcouncil.us/static/media/GalarySecondRow1.95f1de2a9e1beb035319.jpeg"
            className="w-11/12"
            alt="Image 1"
          />
          <p className="text-md text-black mt-2">
            ATS Unit Scholarship Fund Presentation
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://atcouncil.us/static/media/GalarySecondRow2.bea6bac1bfea0f73629b.jpeg"
            className="w-11/12"
            alt="Image 2"
          />
          <p className="text-md text-black mt-2">Cigar Night</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://atcouncil.us/static/media/GalarySecondRow3.5cf1fc8d6a15186b3faa.jpeg"
            className="w-11/12"
            alt="Image 2"
          />
          <p className="text-md text-black mt-2">
            The New Jersey State Police Pipe Band
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <hr className="border-black w-11/12" />
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
