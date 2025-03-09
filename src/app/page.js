"use client";
import Navbar from "./navbar";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFlip,
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
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
      <div className="bg-[#C1C1C1] h-[28%] md:h-[204px] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 lg:px-52 py-[7.3%]">
        {/* Logo */}
        <div className="mb-4 -ml-[7.5%] md:mb-0">
          <img
            className="w-30 h-34 md:w-30 md:h-44"
            src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png"
            alt="Logo"
          />
        </div>

        {/* Navigation Menu */}
        <div className="w-full -mr-[6.5%] mt-[1%] md:w-auto">
          <ul className="menu menu-horizontal text-black flex flex-col md:flex-row items-center  text-sm md:text-thin">
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
      </div>
      
      <div className="relative  h-[340px]  w-full">
        <div className="">
          <img
            src="/building-pic.jpeg"
            alt="Background"
            className="w-full h-[370px] -z-0 object-cover "
          />
        </div>
        {/* bg-[#02053d] bg-opacity-40 */}
        <div className="absolute z-10 top-0 left-0 w-full h-[370px] flex flex-col pt-16 pb-16 bg-[#080f87] bg-opacity-50 text-white text-lg font-semibold space-y-6">
          <p className="text-3xl sm:text-3xl md:text-5xl relative text-center font-extrabold px-4">
            NYC Anti-Terrorism Symposium Conference
          </p>
          <p className="text-lg sm:text-xl md:text-3xl text-center md:text-start  md:ml-56 font-extralight">
            New York Downtown Marriott <br />
            <span className="text-sm sm:text-lg md:text-xl font-thin md:text-start   ">
              New York, NY 10006
            </span>
          </p>
          <p className="text-lg sm:text-xl md:text-3xl text-center md:text-start md:ml-56 font-extrabold">
            April 10-11, 2025
          </p>
          <p className="text-lg sm:text-xl md:text-3xl  pb-16 text-center md:text-start mb-6 md:ml-56 font-extrabold">
            8:00AM-4:00PM
          </p>
        </div>
      </div>


      <div className="w-full  px-4">
        <h1 className="text-black text-center text-lg sm:text-2xl mt-14">
          ELITE SPONSORS
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 w-full mt-2">
          <img
            src="/pic23.jpeg"
            alt="Logo 1"
            className="w-38 h-28  sm:w-60 sm:h-48 md:w-[19%] md:h-60 object-contain"
          />
          <img
            src="/pic24.jpeg"
            alt="Logo 2"
            className="w-38 h-28 sm:w-60 sm:h-48 md:w-[19%] md:h-60 object-contain"
          />
          <img
            src="/pic25.png"
            alt="Logo 3"
            className="w-38 h-28 sm:w-60 sm:h-48 md:w-[19%] md:h-60 object-contain"
          />
          <img
            src="/pic26.jpeg"
            alt="Logo 4"
            className="w-38 h-28 sm:w-60 sm:h-48 md:w-[19%] md:h-60 object-contain"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row bg-[#F7F7F7] items-center md:items-start">
        {/* Left Section (Text) */}
        <div className="w-full md:w-4/6 px-4 sm:px-12 md:pl-38 ml-10 mt-10 text-black">
          <div className="w-full md:w-3/4 mt-12 ml-12 sm:mt-16 md:mt-24 space-y-4 sm:space-y-12">
            <h1 className="text-red-500 font-bold text-lg sm:text-xl ">
              OUR FOCUS
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-5xl md:leading-[120%] font-bold ">
              THE SYMPOSIUM <span>MISSION</span>
            </h1>
            {/* text-gray-400 */}
            <h1 className=" color-[#636262] text-[16px] font-montserrat sm:text-lg md:text-sm/7 ">
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
            className="w-82 sm:w-96 md:w-[880px] h-[100%] object-cover"
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

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28 -mt-10 sm:pt-20">
          {/* First Image */}
          <img
            className="w-full max-w-xs sm:max-w-sm md:w-[18%] h-auto"
            src="/check-pic5.png"
            alt="Partner 1"
          />

          {/* Divider (Hidden on Small Screens) */}
          <div className="hidden md:block w-[0.5px] h-60 bg-black"></div>

          {/* Second Image */}
          <img
            className="w-full max-w-xs sm:max-w-sm md:w-[18%] h-auto"
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
          slidesPerView={5} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 10 }, // Tablet view
            768: { slidesPerView: 3, spaceBetween: 15 }, // Medium screens
            1024: { slidesPerView: 4, spaceBetween: 20 }, // Desktop
          }}
          loop={true}
          freeMode={true}
          // speed={1000}
          autoplay={{
            // delay: 1000, // No delay to keep it moving
            disableOnInteraction: false, // Keeps autoplay running even after interaction
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {[
            { src: "/pic2.png", width: "200px", height: "150px" },
            { src: "/pic3.jpeg", width: "200px", height: "150px" },
            { src: "/pic6.jpeg", width: "200px", height: "150px" },
            { src: "/pic7.jpeg", width: "150px", height: "150px" },
            { src: "/pic8.png", width: "150px", height: "150px" },
            { src: "/pic9.jpg", width: "150px", height: "150px" },
            { src: "/pic10.png", width: "200px", height: "150px" },
            { src: "/pic11.jpeg", width: "150px", height: "150px" },
            { src: "/pic12.jpeg", width: "200px", height: "150px" },
            { src: "/pic13.png", width: "150px", height: "150px" },
            { src: "/pic14.jpeg", width: "150px", height: "150px" },
            { src: "/pic15.jpeg", width: "150px", height: "150px" },
            { src: "/pic16.jpeg", width: "150px", height: "150px" },
            { src: "/pic17.jpeg", width: "200px", height: "150px" },
            { src: "/pic19.jpeg", width: "150px", height: "150px" },
            { src: "/pic20.jpeg", width: "180px", height: "150px" },
            { src: "/pic21.png", width: "350px", height: "150px" },
            { src: "/pic22.jpeg", width: "150px", height: "150px" },
            { src: "/Zenith-Logo.png", width: "350px", height: "150px" },
            { src: "/pic18.png", width: "400px", height: "150px" },
          ].map(({ src, width, height }, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className="flex items-center justify-center w-full h-auto"
                style={{
                  maxWidth: width,
                  maxHeight: height,
                }}
              >
                <img
                  src={src}
                  className="object-contain rounded-lg w-full h-auto"
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
          <h1 className="text-gray-600 text-center w-full md:w-3/4 text-lg md:text-xl">
            The Anti-terrorism Council (ATC) and its team brings together
            leaders and decision-makers in the field of law enforcement,
            government, business, healthcare, and the private sector. The ATC is
            a not-for-profit organization 501(c)(3) comprised of all volunteer
            personnel.
          </h1>
        </div>

        {/* Responsive Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center pt-10 px-4">
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
              className="card card-compact rounded-none w-full max-w-xs"
            >
              <figure>
                <img
                  src={img}
                  alt={name}
                  className="w-full object-cover rounded-lg"
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
      <div className="flex flex-col lg:flex-row justify-center gap-5 text-black pt-10 px-5 lg:mx-28">
        {/* Contact Info */}
        <div className="space-y-6 md:w-1/2 lg:w-1/3 text-center md:text-left">
          <h1 className="text-lg font-bold">
            Diane Barton
            <br />
            Symposium Coordinator
          </h1>
          <h1 className="text-lg font-bold">
            Email:
            <br />
            <span className="text-lg md:text-xl font-light text-gray-500">
              diane.barton@atcouncil.us
            </span>
          </h1>
        </div>

        {/* Get In Touch */}
        <div className="space-y-6 md:w-1/2 lg:w-1/3 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">Get In Touch</h1>
          <h1 className="text-lg font-bold">
            Assistance Hours
            <br />
            <span className="text-lg font-light">
              Mon – Sat 9:00am – 8:00pm
              <br /> Sunday – CLOSED
            </span>
          </h1>
          <h1 className="text-lg md:text-xl font-bold">
            Phone Number:
            <br />
            <span className="text-lg font-light">(914) 760 - 9853</span>
          </h1>
        </div>

        {/* Google Map */}
        <div className="w-full lg:w-2/4 h-[300px] flex justify-center items-center">
          <iframe
            className="w-full md:w-4/5 h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093146!2d144.9537363153169!3d-37.816279742021096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cee17!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1611816210988!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* First Section */}
      <div className="bg-[#767676] md:h-28 flex flex-wrap justify-center items-center text-center mt-10 gap-10 lg:gap-44 ">
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

      {/* Second Section */}
      <div className="flex flex-col justify-center items-center h-80 bg-[#E93D3D] px-5">
        <img
          className="h-40 w-28"
          src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png"
          alt="ATC Logo"
        />
        <h1 className="mt-4 text-xl font-bold text-center">
          Copyright 2024. All rights reserved
        </h1>
      </div>
    </>
  );
}
