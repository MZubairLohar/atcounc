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
      <li onClick={Events} className="hover:text-red-500 text-red-500"><a>Events</a></li>
      <li onClick={Speaker} className="hover:text-red-500"><a>Speaker Roster</a></li>
      <li onClick={Elite} className="hover:text-red-500"><a>Elite Sponsors</a></li>
      <li onClick={Sponsors} className="hover:text-red-500"><a>Exhibiting Sponsors</a></li>
      <li onClick={Aboutus} className="hover:text-red-500"><a>About Us</a></li>
      <li onClick={Partners} className="hover:text-red-500"><a>Partners</a></li>
      <li onClick={Gallery} className="hover:text-red-500"><a>Gallery</a></li>
    </ul>
  </div>
</div>

<div className="mt-14 space-x-20 space-y-10">
    <h1 className="text-black text-center text-6xl font-bold">EVENTS</h1>
    <div className="flex justify-center">
    <hr className="border-black w-11/12" />
    </div>
    <div className="flex justify-between text-black">
        <div className="w-1/3 text-2xl font-bold">
            <h1>November 12, 2024</h1>
            <h1>6PM</h1>
        </div>
        <div className="w-2/3 text-2xl">
            <h1 className="text-2xl font-bold">ATC Focus Dinner</h1>
            <h1>Benjamin Prime Steakhouse</h1>
            <h1>23 E 40th St., Between Park and Madison Avenue, New York City, NY 10016</h1>
            <button className="btn btn-error bg-red-500 text-xl text-white">LEARN MORE</button>
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
            <h1 className="text-2xl font-bold">Annual NYC Anti-Terrorism Symposium</h1>
            <h1>New York Downtown Marriott</h1>
            <h1>New York, NY 10006</h1>
        </div>
    </div>
    <div className="flex justify-center">
    <hr className="border-black w-11/12" />
    </div>
</div>

<div className="flex justify-center bg-[#767676] h-28 items-center mt-8 text-center gap-40">
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