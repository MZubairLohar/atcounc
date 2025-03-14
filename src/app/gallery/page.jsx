"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

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
          <li onClick={Gallery} className="hover:text-red-500 text-red-500">
            <a>Gallery</a>
          </li>
        </ul>
      </div>
    </div>
      <div className="mt-14 space-x-10">
        <h1 className="text-black text-center text-5xl font-bold">
          OUR GALLERY
        </h1>
        <h1 className="text-black text-center text-xl">
          See some of our photos from past years' events!
        </h1>
      </div>
      <div className="flex justify-center mt-10 -space-x-4">
        <div className="flex flex-col items-center ">
          <img
            src="/GalaryFirstRow1.jpeg"
            className="w-11/12"
            alt="Image 1"
          />
          <p className="text-md text-black ">
            A view of last year's booths at the Symposium
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/GalaryFirstRow2.b7c54fae70142ff30c33.jpeg"
            className="w-11/12"
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

      <div className="flex mt-10 justify-center space-x-8">
        <div className="flex flex-col items-center">
          <img
            src="/GalarySecondRow1.95f1de2a9e1beb035319.jpeg"
            className="w-96"
            alt="Image 1"
          />
          <p className="text-md text-black mt-2">
            ATS Unit Scholarship Fund Presentation
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/GalarySecondRow2.bea6bac1bfea0f73629b.jpeg"
            className="w-96"
            alt="Image 2"
          />
          <p className="text-md text-black mt-2">Cigar Night</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/GalarySecondRow3.5cf1fc8d6a15186b3faa.jpeg"
            className="w-96"
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
