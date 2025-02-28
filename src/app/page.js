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
      <div className=" bg-[#C1C1C1] h-[204px] flex items-center justify-between px-48">
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
      </div>

      <div className="relative w-full ">
        <div className="">
          <img
            src="/image.png"
            alt="Background"
            className="w-full h-[360px] object-cover"
          />
        </div>

        <div className="absolute top-0 left-0  w-full h-full flex flex-col pt-16 bg-[#0818A8]   bg-opacity-40 text-white text-lg font-semibold space-y-6">
          <p className="text-5xl text-center font-extrabold">
            NYC Anti-Terrorism Symposium Conference
          </p>
          <p className="text-3xl ml-56 font-extralight">
            New York Downtown Marriott <br />
            <span className="text-xl font-thin">New York, NY 10006</span>
          </p>
          <p className="text-3xl ml-56 font-extrabold">April 10-11, 2025</p>
          <p className="text-3xl ml-56 font-extrabold">8:00AM-4:00PM</p>
        </div>
      </div>

      <div>
        <h1 className="text-black text-center text-2xl mt-10">
          ELITE SPONSORS
        </h1>
        <div className="flex justify-center w-full">
          <img
            src="/pic23.jpeg"
            alt="Logo 1"
            className="w-80 h-60 object-contain"
          />
          <img
            src="/pic24.jpeg"
            alt="Logo 2"
            className="w-80 h-60 object-contain"
          />
          <img
            src="/pic25.png"
            alt="Logo 3"
            className="w-80 h-60 object-contain"
          />
          <img
            src="/pic26.jpeg"
            alt="Logo 4"
            className="w-80 h-60 object-contain"
          />
        </div>
      </div>

      <div className="flex bg-[#F7F7F7]">
        <div className="w-3/6 pl-40 mt-10 text-black">
          <div className="w-3/4  mt-24 space-y-16">
            <h1 className="text-red-500 font-bold text-xl">OUR FOCUS</h1>
            <h1 className="text-5xl font-bold">
              THE SYMPOSIUM <span> MISSION</span>
            </h1>
            {/* <h1 className="text-5xl font-bold"> MISSION</h1> */}
            <h1 className="text-gray-400 text-xl">
              The Anti-Terrorism Symposium is designed to provide you with the
              knowledge, skills, tactics, and equipment needed to survive in an
              increasingly uncertain world. Our goal is that you leave with new
              skills and information leaving you adaptable to any situation.
            </h1>
            <div className="flex justify-center">
              {" "}
              <button
                onClick={Aboutus}
                className="btn btn-error bg-red-500 text-xl text-white"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/6 ">
          <img
            width={800}
            heigh={800}
            src="https://atcouncil.us/static/media/ArmyPic.cd4ca121b07ad9ade30c.png"
          />
        </div>
      </div>

      <div>
        <h1 className="text-black text-center text-2xl mt-10">OUR PARTNERS</h1>
        <div className="flex justify-center items-center space-x-28 pt-20">
          <img className="w-80 h-80" src="/check-pic5.png" />
          <div className="w-[0.5px] h-80 bg-black"></div>
          <img className="w-80 h-32" src="/The Legacy Alliance.png" />
        </div>
      </div>

      <div>
        <h1 className="text-black font-thin text-center text-2xl mt-10">
          OUR EXHIBITING SPONSORS
        </h1>
      </div>

      <div className=" mt-10">
        <Swiper
          slidesPerView={4} // Adjust as needed for responsiveness
          spaceBetween={20} // Ensures spacing between images
          loop={true}
          freeMode={true} // Allows continuous scrolling
          speed={5000} // Controls smooth scrolling speed
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
                className="flex items-center justify-center"
                style={{ width, height }}
              >
                <img
                  src={src}
                  className=" object-cover rounded-lg"
                  style={{ width, height }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-[#F7F7F7] mt-10 h-[750px]">
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
      </div>

      <div className="flex justify-center gap-5 text-black pt-10 mx-28">
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
