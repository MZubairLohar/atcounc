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
          <li onClick={Elite} className="hover:text-red-500">
            <a>Elite Sponsors</a>
          </li>
          <li onClick={Sponsors} className="hover:text-red-500">
            <a>Exhibiting Sponsors</a>
          </li>
          <li onClick={Aboutus} className="hover:text-red-500 text-red-500">
            <a>About Us</a>
          </li>
          <li onClick={Partners} className="hover:text-red-500 ">
            <a>Partners</a>
          </li>
          <li onClick={Gallery} className="hover:text-red-500">
            <a>Gallery</a>
          </li>
        </ul>
      </div>
        {/* <div className="w-full md:w-auto">
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
            <li onClick={Elite} className="hover:text-red-500  ">
              <a>Elite Sponsors</a>
            </li>
            <li onClick={Sponsors} className="hover:text-red-500 ">
              <a>Exhibiting Sponsors</a>
            </li>
            <li onClick={Aboutus} className="hover:text-red-500  text-red-500">
              <a>About Us</a>
            </li>
            <li onClick={Partners} className="hover:text-red-500">
              <a>Partners</a>
            </li>
            <li onClick={Gallery} className="hover:text-red-500">
              <a>Gallery</a>
            </li>
          </ul>
        </div> */}
      </div>
      {/* <h1 className="text-black text-center text-5xl font-bold mt-6">
        ABOUT US
      </h1>
      <h1 className="text-black text-center text-3xl mt-6">OUR STORY</h1>

      <div className="mt-5 mx-52">
        <div className="text-[#555555] flex justify-center  items-center text-xl">
          <h1>
            The Anti-Terrorism Council, Inc. is a distinguished 501(c)(3)
            not-for-profit organization, fueled entirely by the dedication of
            our volunteer team.
          </h1>
        </div>
        <div className="mt-6 text-[#555555]  flex justify-center items-center text-xl">
          <h1>
            Born from the lessons learned from the September 11, 2001 attacks,
            the imperative for national unity and preparedness against the
            specter of terrorism became undeniable. Throughout its history, the
            Anti-Terrorism Council (ATC) has been privileged to provide advanced
            training conducted by elite professionals, including former US Navy
            SEALs, operatives from France's GIGN (the French Counterterrorism
            Force), US Army Special Forces, the US Secret Service, FBI, DEA,
            among others. In every case the presenters are regarded subject
            matter experts in their field, infusing our programs with
            unparalleled realism and practicality.
          </h1>
        </div>
        <div className="mt-6  text-[#555555]  flex justify-center items-center text-xl">
          <h1>
            Participants in ATC programs emerge equipped with the most
            sophisticated tools, technologies, tactics, and insights, fully
            aware of the complex global security landscape. They gain not only
            knowledge but also a profound understanding of the necessity for
            continuous learning and improvement in the face of ever-evolving
            threats.
          </h1>
        </div>

        <h1 className=" mt-4 mb-4 text-black text-center text-4xl">
          Anti-Terrorism Council
        </h1>
        <div className="text-[#555555] flex justify-center items-center text-xl">
          <h1>
            We must always be prepared to continue and remember 9/11, reunite
            the men and women who lived through those days and held the city
            together. Resource "in the fight" with education & training and
            never forget!
          </h1>
        </div>

        <div className="w-3/4 h-3/4 flex items-center justify-center mx-auto">
          <img
            className="max-w-full max-h-full"
            src="https://atcouncil.us/static/media/ATCAboutUs.2be7dba559884b0d93c3.png"
          />
        </div>

        <div className="flex justify-center mt-4 mb-8">
          <hr className="border-black w-11/12" />
        </div>

        <h1 className="text-black text-center text-3xl  mb-4 ">
          SYMPOSIUM’S HISTORY
        </h1>

        <div className="text-[#555555]  flex justify-center items-center text-xl">
          <h1>
            In it’s 22nd year, the Anti-Terrorism Council (ATC) brings together
            leaders & decision-makers in the field of law enforcement,
            government, business, medicine & the private sector.
          </h1>
        </div>

        <div className="text-[#555555]  mt-4   flex justify-center items-center text-xl mx-auto">
          <h1>
            The 1st Anti-Terrorism Symposium came about after United States
            Secret Service Special Agent Michael Vaiani used his Surefire
            flashlight during the events of 9/11 at the World Trade Center. Mike
            realized that the events and relationships established could form a
            networking opportunity for not only law enforcement but also for a
            wide variety of individuals. This mixing of dynamic individuals from
            the various sectors along with an expertise of speakers makes the
            Symposium a truly unique experience.
          </h1>
        </div>
      </div> */}
      <div className="p-4">
        <h1 className="text-black text-center text-3xl sm:text-4xl md:text-5xl font-bold mt-6">
          ABOUT US
        </h1>
        <h1 className="text-black text-center text-2xl sm:text-3xl mt-10">
          OUR STORY
        </h1>

        <div className="mt-5 px-4 sm:px-12 md:px-20 lg:mx-20">
          <div className="text-[#555555] flex items-center text-sm sm:text-md md:text-sm">
            <h1>
              The Anti-Terrorism Council, Inc. is a distinguished 501(c)(3)
              not-for-profit organization, fueled entirely by the dedication of
              our volunteer team.
            </h1>
          </div>
          <div className="mt-6 text-[#555555] flex justify-center items-center text-sm sm:text-md md:text-sm">
            <h1>
              Born from the lessons learned from the September 11, 2001 attacks,
              the imperative for national unity and preparedness against the
              specter of terrorism became undeniable. Throughout its history,
              the Anti-Terrorism Council (ATC) has been privileged to provide
              advanced training conducted by elite professionals, including
              former US Navy SEALs, operatives from France's GIGN (the French
              Counterterrorism Force), US Army Special Forces, the US Secret
              Service, FBI, DEA, among others. In every case the presenters are
              regarded as subject matter experts in their field, infusing our
              programs with unparalleled realism and practicality.
            </h1>
          </div>
          <div className="mt-6 text-[#555555] flex justify-center items-center text-sm sm:text-md md:text-sm">
            <h1>
              Participants in ATC programs emerge equipped with the most
              sophisticated tools, technologies, tactics, and insights, fully
              aware of the complex global security landscape. They gain not only
              knowledge but also a profound understanding of the necessity for
              continuous learning and improvement in the face of ever-evolving
              threats.
            </h1>
          </div>

          <h1 className="mt-4 mb-4 text-black text-center text-xl sm:text-2xl md:text-3xl">
            Anti-Terrorism Council
          </h1>
          <div className="text-[#555555] flex justify-center items-center text-sm sm:text-md md:text-sm">
            <h1>
              We must always be prepared to continue and remember 9/11, reunite
              the men and women who lived through those days and held the city
              together. Resource "in the fight" with education & training and
              never forget!
            </h1>
          </div>

          <div className="w-full md:w-3/4 flex items-center justify-center mx-auto mt-6">
            <img
              className="max-w-full h-auto"
              src="https://atcouncil.us/static/media/ATCAboutUs.2be7dba559884b0d93c3.png"
            />
          </div>

          <div className="flex justify-center mt-4 mb-8">
            <hr className="border-black w-11/12" />
          </div>

          <h1 className="text-black text-center text-2xl sm:text-3xl mb-4">
            SYMPOSIUM’S HISTORY
          </h1>

          <div className="text-[#555555] flex justify-center items-center text-sm sm:text-md md:text-sm">
            <h1>
              In its 22nd year, the Anti-Terrorism Council (ATC) brings together
              leaders & decision-makers in the field of law enforcement,
              government, business, medicine & the private sector.
            </h1>
          </div>

          <div className="text-[#555555] mt-4 flex justify-center items-center text-sm sm:text-md md:text-sm">
            <h1>
              The 1st Anti-Terrorism Symposium came about after United States
              Secret Service Special Agent Michael Vaiani used his Surefire
              flashlight during the events of 9/11 at the World Trade Center.
              Mike realized that the events and relationships established could
              form a networking opportunity for not only law enforcement but
              also for a wide variety of individuals. This mixing of dynamic
              individuals from the various sectors along with an expertise of
              speakers makes the Symposium a truly unique experience.
            </h1>
          </div>
        </div>
      </div>

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
