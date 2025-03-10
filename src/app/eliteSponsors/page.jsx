"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/app/navbar";
import Link from "next/link";

function EliteSponsors() {
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
      <li onClick={Elite} className="hover:text-red-500 text-red-500"><a>Elite Sponsors</a></li>
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
            <li onClick={Events} className="hover:text-red-500">
              <a>Events</a>
            </li>
            <li onClick={Speaker} className="hover:text-red-500">
              <a>Speaker Roster</a>
            </li>
            <li onClick={Elite} className="hover:text-red-500  text-red-500">
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
            <li onClick={Elite} className="hover:text-red-500  text-red-500">
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
      {/* <div className="mt-14 space-x-20 space-y-10">
        <h1 className="text-black text-center text-5xl font-bold">
          ELITE SPONSORS
        </h1>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex items-center justify-center text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img src="/pic23.jpeg" alt="Eleven10 Gear" />
          </div>

          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">ELEVEN10 GEAR</h1>
            <h1>
              Eleven 10®, based in Cleveland, Ohio, is a manufacturer of
              high-quality self-aid/buddy-aid gear that is proudly made in the
              USA. We were founded by 2 brothers: a former Reconnaissance Marine
              and current tactical paramedic, the other is a longtime police
              officer and an active SWAT commander. This gives us the unique
              insight of MIL/LE Special Operations, trauma medicine, and the
              street cop. We’ve taken our personal experiences and designed
              medical carrying equipment based on the lessons learned from the
              streets of America & the conflicts in the Middle East.
              <a
                href="https://1110gear.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.1110gear.com
              </a>
            </h1>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex items-center justify-center text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img src="/pic24.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">Benchmade Knives</h1>
            <h1>
              For two decades Benchmade has been designing and manufacturing the
              world's finest knives and edged tools. Our products are developed
              and tested for extreme duty and are the preferred cutting tools
              for Elite Military Troops and Public Safety Professionals around
              the globe. You can count on your Benchmade to get the job done.
              USA Proud!
              <a
                href="https://www.benchmade.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.benchmade.com
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex items-center justify-center gap-2 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img src="/pic25.png" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">CIRCLESQUARED</h1>
            <h1>
              Founded in 2014, Circle Squared Alternative Investments LLC (CSQ)
              is a privately held Real Estate Investment firm. Founder Jeff
              Sica’s vision and belief is that sophisticated investors want and
              deserve access to alternatives to the public markets. Working with
              accomplished real estate developers with track records and deep
              experience while creating strong investment partnerships, CSQ has
              connected family offices and high net worth individuals with real
              estate projects that have traditionally only been available to
              institutional investors. CSQ is dedicated to helping you bridge
              the gap between your investment goals and your ability to achieve
              them.
              <a
                href="https://www.circlesquaredalts.com"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.circlesquaredalts.com
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex items-center justify-center text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img src="/pic26.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">SHOREHAVEN</h1>
            <h1>
              As your advocate and fiduciary, we will custom-build a financial
              plan for you – one that is designed to help you protect, grow, and
              transition your wealth.
              <a
                href="https://www.shorehavenwealth.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                shorehavenwealth.com
              </a>
            </h1>
          </div>
        </div>
      </div> */}
      <div className="mt-14 space-y-10 mx-40">
        <h1 className="text-black text-center text-4xl md:text-5xl font-bold">
          ELITE SPONSORS
        </h1>

        <div className="flex items-center  justify-center">
          <hr className="border-black w-full md:w-11/12" />
        </div>

        {/* Sponsor Sections */}
        {[
          {
            img: "/pic23.jpeg",
            title: "ELEVEN10 GEAR",
            description: `Eleven 10®, based in Cleveland, Ohio, is a manufacturer of
              high-quality self-aid/buddy-aid gear that is proudly made in the
              USA. We were founded by 2 brothers: a former Reconnaissance Marine
              and current tactical paramedic, the other is a longtime police
              officer and an active SWAT commander. This gives us the unique
              insight of MIL/LE Special Operations, trauma medicine, and the
              street cop. We’ve taken our personal experiences and designed
              medical carrying equipment based on the lessons learned from the
              streets of America & the conflicts in the Middle East.
`,
            link: "https://1110gear.com/",
          },
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
          {
            img: "/pic25.png",
            title: "CIRCLESQUARED",
            description: `              Founded in 2014, Circle Squared Alternative Investments LLC (CSQ)
              is a privately held Real Estate Investment firm. Founder Jeff
              Sica’s vision and belief is that sophisticated investors want and
              deserve access to alternatives to the public markets. Working with
              accomplished real estate developers with track records and deep
              experience while creating strong investment partnerships, CSQ has
              connected family offices and high net worth individuals with real
              estate projects that have traditionally only been available to
              institutional investors. CSQ is dedicated to helping you bridge
              the gap between your investment goals and your ability to achieve
              them.`,
            link: "https://www.circlesquaredalts.com",
          },
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
            <div className="flex mx-40 flex-col md:flex-row items-start text-black text-center md:text-left space-y-6 md:space-y-0 md:space-x-6">
              {/* Image Container */}
              <div className="w-3/4 flex justify-center">
                <img
                  src={sponsor.img}
                  alt={sponsor.title}
                  className="w-96 h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="w-full flex flex-col items-center md:items-start">
                <h1 className="text-xl md:text-2xl font-bold">
                  {sponsor.title}
                </h1>
                <p className="text-sm md:text-md leading-relaxed">
                  {sponsor.description}
                  <a
                    href={sponsor.link}
                    className="text-blue-500 underline block md:inline mt-2"
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

export default EliteSponsors;
