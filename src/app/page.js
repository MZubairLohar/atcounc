"use client";
import Navbar from "./navbar";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import {
  EffectFlip,
  Navigation,
  Mousewheel,
  Keyboard
  // Autoplay, Pagination
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  function Events() {
    router.push("../../events");
  }
  function Main() {
    router.push("../../");
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
      {/* <div className=" bg-[#C1C1C1] h-[204px] flex items-center justify-between px-48">
        <div className="">
          <img
            className="w-30 h-44  text-2xl"
            src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png"
          />
        </div>
        <div className="flex items-center">
          <ul className="menu menu-horizontal text-black  flex items-center">
            <li onClick={Home} className="hover:text-red-500  text-red-500">
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
      </div> */} 
      <div className="bg-[#C1C1C1] h-auto md:h-[210px] flex flex-row items-center justify-between px-8 md:px-20 lg:px-32 py-6 relative">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <img
          className="w-24 h-28 md:w-28 md:h-44"
          src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png"
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
      
      <div className="relative  h-[400px]  w-full">
        <div className="">
          <img
            src="/image-pic6.png"
            alt="Background"
            className="w-full h-[370px] -z-0 object-cover "
          />
        </div>
        {/* bg-[#02053d] bg-opacity-40 */}
        <div className="absolute z-10 top-0 left-0 w-full h-[370px] flex flex-col pt-14 pb-16 bg-opacity-54 text-white text-lg font-semibold space-y-4">
          <p className="text-3xl sm:text-3xl md:text-5xl relative ml-6 md:ml-32 font-bold">
            NYC Anti-Terrorism Symposium Conference
          </p>
          <p className="text-lg sm:text-xl md:text-3xl text-start ml-6 md:ml-32 font-normal">
            New York Downtown Marriott <br />
            <span className="text-sm sm:text-lg md:text-xl font-normal md:text-start   ">
              New York, NY 10006
            </span>
          </p>
          <p className="text-lg sm:text-xl md:text-3xl text-start ml-6 md:ml-32 font-bold">
            April 10-11, 2025
          </p>
          <p className="text-lg sm:text-xl md:text-3xl  pb-16 text-start mb-6 ml-6 md:ml-32 font-bold">
            8:00AM-4:00PM
          </p>
        </div>
      </div>


      <div className="w-full -space-y-10">
        <div>
        <h1 className="text-black text-center text-lg sm:text-2xl font-medium">
          ELITE SPONSORS
        </h1>
        </div>
       

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 w-full">
          <img
            src="/pic23.jpeg"
            alt="Logo 1"
            className="w-38 h-28  sm:w-60 sm:h-48 md:w-[19%] md:h-72 object-contain"
          />
          <img
            src="/pic24.jpeg"
            alt="Logo 2"
            className="w-38 h-28 sm:w-60 sm:h-48 md:w-[19%] md:h-72 object-contain"
          />
          <img
            src="/pic25.png"
            alt="Logo 3"
            className="w-38 h-28 sm:w-60 sm:h-48 md:w-[19%] md:h-72 object-contain"
          />
          <img
            src="/pic26.jpeg"
            alt="Logo 4"
            className="w-38 h-28 sm:w-60 sm:h-48 md:w-[19%] md:h-72 object-contain"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row bg-[#F7F7F7] items-center md:items-start">
        {/* Left Section (Text) */}
        <div className="w-full md:w-4/6 px-4 sm:px-12 md:pl-38 ml-10 mt-10 text-black">
          <div className="w-full md:w-3/4 mt-12 md:ml-12 sm:mt-16 md:mt-24 space-y-4 md:space-y-8">
            <h1 className="text-red-500 font-bold text-lg sm:text-xl ">
              OUR FOCUS
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-5xl md:leading-[120%] font-bold ">
              THE SYMPOSIUM <span>MISSION</span>
            </h1>
            {/* text-gray-400 */}
            <h1 className=" color-[#636262] text-gray-500 text-[16px] font-montserrat sm:text-md md:text-md ">
              The Anti-Terrorism Symposium is designed to provide you with the
              knowledge, skills, tactics, and equipment needed to survive in an
              increasingly uncertain world. Our goal is that you leave with new
              skills and information leaving you adaptable to any situation.
            </h1>
            <div className="flex place-self-center md:place-self-center ">
              <button
                onClick={Aboutus}
                className="btn btn-error bg-red-500 text-lg sm:text-xl text-white px-4 py-1 "
              >
                Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-[74%] md:w-/6 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://atcouncil.us/static/media/ArmyPic.cd4ca121b07ad9ade30c.png"
            className="w-82 sm:w-screen md:w-[880px] h-[100%] object-cover"
          />
        </div>
      </div>

      {/* <div>
        <h1 className="text-black text-center text-2xl mt-10">OUR PARTNERS</h1>
        <div className="flex justify-center items-center space-x-28 pt-20">
          <img className="w-80 h-80" src="/check-pic5.png" />
          <div className="w-[0.5px] h-80 bg-black"></div>
          <img className="w-80 h-32" src="/The Legacy Alliance.png" />
        </div>
      </div> */}
      <div className="w-full">
        <h1 className="text-black text-center text-xl sm:text-2xl mt-6 sm:mt-10">
          OUR PARTNERS
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 -mt-10 sm:pt-20">
          {/* First Image */}
          <img
            className="w-full max-w-xs sm:max-w-sm md:w-[20%] h-60"
            src="/check-pic5.png"
            alt="Partner 1"
          />

          {/* Divider (Hidden on Small Screens) */}
          <div className="hidden md:block w-[0.5px] h-72 bg-black"></div>

          {/* Second Image */}
          <img
            className="w-full max-w-xs sm:max-w-sm md:w-[20%] h-auto"
            src="/The Legacy Alliance.png"
            alt="Partner 2"
          />
        </div>
      </div>

      <div>
        <h1 className="text-black font-base text-center text-2xl mt-10">
          OUR EXHIBITING SPONSORS
        </h1>
      </div>

      <div className="max-10 mt-10">
      <Swiper
        slidesPerView={7} // Default for mobile
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 0 }, // Tablet view
          768: { slidesPerView: 3, spaceBetween: 0 }, // Medium screens
          1024: { slidesPerView: 4, spaceBetween: 0 }, // Desktop
        }}
        loop={true} // Make sure the swiper loops infinitely
        freeMode={true} // Allow free scrolling
        spaceBetween={0} // No space between slides
        speed={3000} // Transition speed in milliseconds (adjust as needed)
        autoplay={{
          delay: 0, // No delay, so it continuously moves
          disableOnInteraction: false, // Keeps autoplay running even after interaction
        }}
        modules={[Autoplay, Pagination]} // Proper module usage
        className="mySwiper"
      >
        {[
          { src: "/1.png", width: "200px", height: "200px" },
          { src: "/2.png", width: "200px", height: "200px" },
          { src: "/3.png", width: "200px", height: "200px" },
          { src: "/4.png", width: "200px", height: "200px" },
          { src: "/5.png", width: "200px", height: "200px" },
          { src: "/6.png", width: "200px", height: "200px" },
          { src: "/7.png", width: "200px", height: "200px" },
          { src: "/8.png", width: "200px", height: "200px" },
          { src: "/9.png", width: "200px", height: "200px" },
          { src: "/10.png", width: "200px", height: "200px" },
          { src: "/11.png", width: "200px", height: "200px" },
          { src: "/12.png", width: "200px", height: "200px" },
          { src: "/13.png", width: "200px", height: "200px" },
          { src: "/14.png", width: "200px", height: "200px" },
          { src: "/15.png", width: "200px", height: "200px" },
          { src: "/16.png", width: "200px", height: "200px" },
          { src: "/17.png", width: "200px", height: "200px" },
          { src: "/18.png", width: "200px", height: "200px" },
          { src: "/19.png", width: "200px", height: "200px" },
          { src: "/20.png", width: "200px", height: "200px" },
          { src: "/21.png", width: "200px", height: "200px" },
        ].map(({ src, width, height }, index) => (
          <SwiperSlide key={index} className="flex">
            <div
              className="flex items-center justify-center w-full h-auto"
              style={{
                maxWidth: width,
                maxHeight: height,
              }}
            >
              <img
                src={src}
                className="rounded-lg w-full h-auto" // Ensure images fill the space properly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      

    </div>
     

      {/* <div className="bg-[#F7F7F7] mt-10 h-[750px]">
        <h1 className="text-red-500 text-center pt-10 text-4xl font-bold">
          Meet the NYC ATC Team
        </h1>
        <div className="flex justify-center items-center">
          <h1 className="text-gray-600 text-center w-3/4 text-xl">
            The Anti-terrorism Council (ATC) and its team brings together
            leaders and decision-makers in the field of law enforcement,
            government, business, healthcare, and the private sector. The ATC is
            a not-for-profit organization 501(c)(3) comprised of all volunteer
            personnel.
          </h1>
        </div>

        <div className="flex gap-10 justify-center pt-10">
          <div className="card card-compact rounded-none w-96">
            <figure>
              <img
                src="https://atcouncil.us/static/media/DrMaurizio.f2e68e6ee178cb129084.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-black">
                Dr. Maurizio Miglietta
              </h2>
              <p className="text-lg font-bold text-blue-500">Director</p>
            </div>
          </div>
          <div className="card card-compact rounded-none w-96">
            <figure>
              <img
                src="https://atcouncil.us/static/media/Michael.a71defaece05456adec8.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-black">Michael Vaiani</h2>
              <p className="text-lg font-bold text-blue-500">Founder</p>
            </div>
          </div>
          <div className="card card-compact rounded-none w-96">
            <figure>
              <img
                src="https://atcouncil.us/static/media/DianeChange.ac8b473ed6af172afc4b.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-black">Diane Barton</h2>
              <p className="text-lg font-bold text-blue-500">Coordinator</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-[#F7F7F7] mt-10 py-10">
        <h1 className="text-red-500 text-center text-3xl md:text-4xl font-bold">
          Meet the NYC ATC Team
        </h1>

        <div className="flex justify-center items-center px-4">
          <h1 className="text-black text-center w-full md:w-5/6 text-lg md:text-lg">
            The Anti-terrorism Council (ATC) and its team brings together
            leaders and decision-makers in the field of law enforcement,
            government, business, healthcare, and the private sector. The ATC is
            a not-for-profit organization 501(c)(3) comprised of all volunteer
            personnel.
          </h1>
        </div>

        {/* Responsive Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center pt-20 px-4">
          {[
            {
              name: "Dr. Maurizio Miglietta",
              role: "Director",
              img: "https://atcouncil.us/static/media/DrMaurizio.f2e68e6ee178cb129084.jpeg",
            },
            {
              name: "Michael Vaiani",
              role: "Founder",
              img: "https://atcouncil.us/static/media/Michael.a71defaece05456adec8.jpeg",
            },
            {
              name: "Diane Barton",
              role: "Coordinator",
              img: "https://atcouncil.us/static/media/DianeChange.ac8b473ed6af172afc4b.jpeg",
            },
          ].map(({ name, role, img }, index) => (
            <div
              key={index}
              className="card card-compact rounded-none w-9/12"
            >
              <figure>
                <img
                  src={img}
                  alt={name}
                  className="w-full object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-lg md:text-xl font-bold text-black">
                  {name}
                </h2>
                <p className="text-md md:text-lg font-bold text-blue-500">
                  {role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex justify-center gap-5 text-black pt-10 mx-28">
        <div className="space-y-10 pl-10 w-1/3">
          <h1 className="text-lg font-bold">
            Diane Barton
            <br />
            Symposium Coordinator
          </h1>
          <h1 className="text-lg font-bold">
            Email:
            <br />
            <span className="text-xl font-light text-gray-500">
              diane.barton@atcouncil.us
            </span>
          </h1>
        </div>
        <div className="space-y-10 w-1/3">
          <h1 className="text-3xl font-bold">Get In Touch</h1>
          <h1 className="text-lg font-bold">
            Assistance Hours
            <br />
            <span className="text-lg font-light">
              Mon – Sat 9:00am – 8:00pm
              <br /> Sunday – CLOSED
            </span>
          </h1>
          <h1 className="text-xl font-bold">
            Phone Number:
            <br />
            <span className="text-lg font-light">(914) 760 - 9853</span>
          </h1>
        </div>
        <div className="w-2/4 h-[300px] flex justify-center items-center">
          <iframe
            className="w-4/5 h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093146!2d144.9537363153169!3d-37.816279742021096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cee17!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1611816210988!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div> */}
      <div className="flex flex-col lg:flex-row justify-center gap-12 text-black pt-16 px-14 lg:mx-24">
        {/* Contact Info */}
        <div className="space-y-10 md:w-1/2 lg:w-1/3 text-center md:text-left">
          <h1 className="text-lg font-bold">
            Diane Barton
            <br />
            Symposium Coordinator
          </h1>
          <h1 className="text-lg font-bold">
            Email:
            <br />
            <span className="text-lg md:text-lg font-light text-gray-500">
              diane.barton@atcouncil.us
            </span>
          </h1>
          <div>
          {/* important */}
            {/* <form action="https://www.paypal.com/donate" method="post" target="_top">

              <input type="hidden" name="hosted_button_id" value="T8JTLS493KC2L" />

              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />

              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />

            </form> */}
            <div className="">
          <img
            src="/ss.png"
            alt="Background"
            className="w-full h-[5%] -z-0 object-cover "
          />
        </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="space-y-6 md:w-1/2 lg:w-1/3 text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold">Get In Touch</h1>
          <h1 className="text-lg font-bold">
            Assistance Hours
            <br />
            <span className="text-md font-medium">
              Mon – Sat 9:00am – 8:00pm
              <br /> Sunday – CLOSED
            </span>
          </h1>
          <h1 className="text-lg font-bold">
            Phone Number:
            <br />
            <span className="text-md font-medium">(914) 760 - 9853</span>
          </h1>
        </div>

        {/* Google Map */}
        <div className="w-full lg:w-4/5 h-[250px] flex justify-center items-center">
          <iframe
            className="w-full md:w-4/5 h-full border-0"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.882935544574!2d-74.0149026!3d40.7106444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1984b7d68d%3A0x9f4e89bb11022b5f!2sNew%20York%20Marriott%20Downtown!5e0!3m2!1sen!2sus!4v1710100000000&zoom=15"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d24192.01946422821!2d-74.01876538109053!3d40.71796293695586!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1741715409098!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            
          ></iframe>
        </div>

      </div>

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
        {/* <div className="flex text-lg font-bold">
        <img 
            src="/mail.png"
            className="w-[20px] h-[20px] mt-1"
            />
          Email:
          <br />
          <span className="text-lg font-light">diane.barton@atcouncil.us</span>
        </div> */}
        {/* <div className=" flex text-lg font-bold">
          <img 
            src="/mail.png"
            className="w-[20px] h-[20px] mt-1"
            />
          Email:
          <br />
        </div>
          <span className="text-lg font-light">diane.barton@atcouncil.us</span> */}
      </div>

      {/* Second Section */}
      <div className="flex flex-col justify-center items-center h-60 bg-[#E93D3D] px-5">
        <img
          className="h-36 w-24"
          src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png"
          alt="ATC Logo"
        />
        <h1 className="mt-4 text-lg font-medium text-center">
          Copyright 2024. All rights reserved
        </h1>
      </div>
    </>
  );
}
