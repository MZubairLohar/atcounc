"use client";
import { useRouter } from "next/navigation";

function Events () {
    const router = useRouter();
    function Home(){
        router.push("../../")
        }
    function Events(){
      router.push("../../events")
      }
    function Speaker(){
      router.push("../../speakerRoster")
    }
    function Elite(){
      router.push("../../eliteSponsors")
    }
    function Sponsors(){
      router.push("../../exhibitingSponsors")
    }
    function Aboutus(){
      router.push("../../aboutUs")
    }
    function Partners(){
      router.push("../../partners")
    }
    function Gallery(){
      router.push("../../gallery")
    }
    return(
        <>
        <div className="navbar bg-[#C1C1C1] h-[232px]">
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
      <li onClick={Aboutus} className="hover:text-red-500 text-red-500"><a>About Us</a></li>
      <li onClick={Partners} className="hover:text-red-500"><a>Partners</a></li>
      <li onClick={Gallery} className="hover:text-red-500"><a>Gallery</a></li>
    </ul>
  </div>
</div>

<h1 className="text-black text-center text-6xl font-bold mt-6">ABOUT US</h1>
<h1 className="text-black text-center text-4xl mt-6">OUR STORY</h1>

<div className="mt-14 space-x-20 space-y-10">

<div className="text-black w-4/5 flex justify-center ml-20 items-center text-xl">
  <h1>The Anti-Terrorism Council, Inc. is a distinguished 501(c)(3) not-for-profit organization, fueled entirely by the dedication of our volunteer team.</h1>
</div>
<div className="text-black w-10/12 flex justify-center items-center text-xl">
  <h1>
    Born from the lessons learned from the September 11, 2001 attacks, the imperative for national unity and preparedness against the specter of terrorism became undeniable. Throughout its history, the Anti-Terrorism Council (ATC) has been privileged to provide advanced training conducted by elite professionals, including former US Navy SEALs, operatives from France's GIGN (the French Counterterrorism Force), US Army Special Forces, the US Secret Service, FBI, DEA, among others. In every case the presenters are regarded subject matter experts in their field, infusing our programs with unparalleled realism and practicality.
  </h1>
</div>
<div className="text-black w-10/12 flex justify-center items-center text-xl">
  <h1>
  Participants in ATC programs emerge equipped with the most sophisticated tools, technologies, tactics, and insights, fully aware of the complex global security landscape. They gain not only knowledge but also a profound understanding of the necessity for continuous learning and improvement in the face of ever-evolving threats.
  </h1>
</div>

<h1 className="text-black text-center text-4xl">Anti-Terrorism Council</h1>
<div className="text-black w-10/12 flex justify-center items-center text-xl">
  <h1>
  We must always be prepared to continue and remember 9/11, reunite the men and women who lived through those days and held the city together. Resource "in the fight" with education & training and never forget!
  </h1>
</div>

<div className="w-3/4 h-3/4 flex justify-center">
  <img className="ml-32" src="https://atcouncil.us/static/media/ATCAboutUs.2be7dba559884b0d93c3.png" />
</div>

<div className="flex justify-center">
    <hr className="border-black w-11/12" />
    </div>

    <h1 className="text-black text-center text-4xl">SYMPOSIUM’S HISTORY</h1>

    <div className="text-black w-10/12 flex justify-center items-center text-xl">
  <h1>
  In it’s 22nd year, the Anti-Terrorism Council (ATC) brings together leaders & decision-makers in the field of law enforcement, government, business, medicine & the private sector.
  </h1>
</div>

<div className="text-black w-10/12 flex justify-center items-center text-xl">
  <h1>
  The 1st Anti-Terrorism Symposium came about after United States Secret Service Special Agent Michael Vaiani used his Surefire flashlight during the events of 9/11 at the World Trade Center. Mike realized that the events and relationships established could form a networking opportunity for not only law enforcement but also for a wide variety of individuals. This mixing of dynamic individuals from the various sectors along with an expertise of speakers makes the Symposium a truly unique experience.
  </h1>
</div>

</div>

<div className="flex justify-center bg-[#767676] h-28 items-center text-center mt-10 gap-40">
  <div className="text-xl font-bold">Office:<br />
  <span className="text-lg font-light">New York, NY - Undisclosed Location</span></div>
  <div className="text-xl font-bold">Call:<br />
  <span className="text-lg font-light">(914) 760 - 9853</span></div>
  <div className="text-xl font-bold">Email:<br />
  <span className="text-lg font-light">diane.barton@atcouncil.us</span></div>
</div>

<div className="flex flex-col justify-center items-center h-80 bg-[#E93D3D]">
  <img
    className="h-40 w-28"
    src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png"
    alt="ATC Logo"
  />
  <h1 className="mt-4 text-xl font-bold">Copyright 2024. All rights reserved</h1>
</div>

        </>
    )
}

export default Events;