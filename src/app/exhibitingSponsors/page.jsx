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
            <li onClick={Sponsors} className="hover:text-red-500  text-red-500">
              <a>Exhibiting Sponsors</a>
            </li>
            <li onClick={Aboutus} className="hover:text-red-500 ">
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
            <li onClick={Elite} className="hover:text-red-500">
              <a>Elite Sponsors</a>
            </li>
            <li onClick={Sponsors} className="hover:text-red-500 text-red-500">
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

      <div className="mt-14 space-x-20 space-y-4">
        <h1 className="text-black text-center text-5xl font-bold">
          EXHIBITING SPONSORS
        </h1>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-black p-4">
          {/* Image Container */}
          <div className="w-3/4 md:w-1/6 flex justify-center">
            <img
              className="h-28 w-40 md:h-40 md:w-60 object-contain"
              src="/pic2.png"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-sm md:text-md flex flex-col text-center md:text-left justify-center">
            <h1 className="text-xl md:text-2xl font-bold pt-4 md:pt-8">
              Action Target
            </h1>
            <p className="leading-relaxed px-2 md:px-0">
              Action Target provides a full line of superior shooting range
              equipment including portable steel targets, turning targets,
              moving targets, bullet traps, shoothouses, and complete indoor
              ranges.
              <a
                href="https://www.actiontarget.com/"
                className="text-blue-500 underline block md:inline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.actiontarget.com
              </a>
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-40 w-60" src="/pic3.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">Aimpoint</h1>
            <h1>
              Aimpoint is the recognized worldwide leader and originator of the
              red dot sighting technology. After more than 30 years of working
              closely with elite military and police forces, experienced hunters
              and marksmen around the world, Aimpoint red dot sights remain the
              No. 1 choice for combining speed and accuracy.
              <a
                href="https://www.aimpoint.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aimpoint.com
              </a>
            </h1>
          </div>
        </div> */}
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-black p-4">
          {/* Image Section */}
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="h-28 w-40 md:h-40 md:w-60 object-contain"
              src="/pic3.jpeg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-sm md:text-md flex flex-col text-center md:text-left justify-center">
            <h1 className="text-xl md:text-2xl font-bold">Aimpoint</h1>
            <p className="leading-relaxed px-2 md:px-0">
              Aimpoint is the recognized worldwide leader and originator of the
              red dot sighting technology. After more than 30 years of working
              closely with elite military and police forces, experienced hunters
              and marksmen around the world, Aimpoint red dot sights remain the
              No. 1 choice for combining speed and accuracy.
              <a
                href="https://www.aimpoint.com/"
                className="text-blue-500 underline block md:inline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aimpoint.com
              </a>
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex  items-center justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="w-60 h-40" src="/pic4.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">AXIL HEARING PERFORMANCE</h1>
            <h1>
              AXIL operates with a clear vision that innovation is the heart of
              its business. With the fast-paced level of product and technology
              expansion, AXIL has lead the way in providing the very best
              product designs and advancements to the sporting goods industry.
              AXIL has and always will deliver the finest performing hearing
              enhancement and protection devices available. From ultra
              comfortable fitting processes, to stereo quality sound
              performance, to reliable & durable engineering – AXIL continues to
              redefine the premium products in the market.
              <a
                href="https://goaxil.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                goaxil.com
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div> */}
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-black p-4">
          {/* Image Section */}
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-40 h-28 md:w-60 md:h-40 object-contain"
              src="/pic4.jpeg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-sm md:text-md flex flex-col text-center md:text-left justify-center">
            <h1 className="text-xl md:text-2xl font-bold">
              AXIL HEARING PERFORMANCE
            </h1>
            <p className="leading-relaxed px-2 md:px-0">
              AXIL operates with a clear vision that innovation is the heart of
              its business. With the fast-paced level of product and technology
              expansion, AXIL has led the way in providing the very best product
              designs and advancements to the sporting goods industry. AXIL has
              and always will deliver the finest performing hearing enhancement
              and protection devices available. From ultra-comfortable fitting
              processes, to stereo quality sound performance, to reliable &
              durable engineering – AXIL continues to redefine the premium
              products in the market.
              <a
                href="https://goaxil.com/"
                className="text-blue-500 underline block md:inline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                goaxil.com
              </a>
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>

        <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="w-60 h-40" src="/pic6.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">Blue Line Beer Company</h1>
            <h1>
              We are an American company who’s goal it is to support law
              enforcement while brewing great beer. We hope others will follow
              us by supporting law and order and authentic American values. So
              raise your glass and satisfy your tastebuds knowing that a portion
              of our proceeds go to police charities around the country. The
              names of our beers speak for themselves so we hope you’ll enjoy a
              laugh while drinking a phenomenal craft beer.
              <a
                href="https://bluelinebeercompany.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                bluelinebeercompany.com
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-32 w-60" src="/pic21.png" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">
              Black River Defensive Solutions
            </h1>
            <h1>
              The mission at Black River Defensive Solutions is to provide
              Medical and Firearms Training and Consultation. Providing next
              level firearms training for responsible gun owners in the
              fundamentals of marksmanship, NJ Concealed Carry and the
              responsibility that comes with it, and developing skillsets for
              every day carry (EDC).
              <a
                href="https://blackriverdefensivesolutions.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                blackriverdefensivesolutions.com
              </a>
            </h1>
          </div>
        </div>
 */}
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        {/* Blue Line Beer Company Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-black p-4">
          {/* Image Section */}
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-40 h-28 md:w-60 md:h-40 object-contain"
              src="/pic6.jpeg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-sm md:text-md flex flex-col text-center md:text-left justify-center">
            <h1 className="text-xl md:text-2xl font-bold">
              Blue Line Beer Company
            </h1>
            <p className="leading-relaxed px-2 md:px-0">
              We are an American company whose goal is to support law
              enforcement while brewing great beer. We hope others will follow
              us by supporting law and order and authentic American values. So
              raise your glass and satisfy your tastebuds knowing that a portion
              of our proceeds go to police charities around the country. The
              names of our beers speak for themselves, so we hope you’ll enjoy a
              laugh while drinking a phenomenal craft beer.
              <a
                href="https://bluelinebeercompany.com/"
                className="text-blue-500 underline block md:inline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                bluelinebeercompany.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        {/* Black River Defensive Solutions Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-black p-4">
          {/* Image Section */}
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-40 h-28 md:w-60 md:h-32 object-contain"
              src="/pic21.png"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-sm md:text-md flex flex-col text-center md:text-left justify-center">
            <h1 className="text-xl md:text-2xl font-bold">
              Black River Defensive Solutions
            </h1>
            <p className="leading-relaxed px-2 md:px-0">
              The mission at Black River Defensive Solutions is to provide
              Medical and Firearms Training and Consultation. Providing
              next-level firearms training for responsible gun owners in the
              fundamentals of marksmanship, NJ Concealed Carry and the
              responsibility that comes with it, and developing skillsets for
              everyday carry (EDC).
              <a
                href="https://blackriverdefensivesolutions.com/"
                className="text-blue-500 underline block md:inline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                blackriverdefensivesolutions.com
              </a>
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex justify-center text-black gap-5">
          <div className="w-1/6 text-2xl font-bold">
            <img className="w-68 h-40" src="/pic7.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">Clear Armor</h1>
            <h1>
              TruArmor is at the forefront of vehicle innovation security
              solutions that protects and secures your most valuable assets,
              your family, friends and property. We use industry leading
              technology in conjunction with a unique multilayered world
              patented made in the USA glass system that meets OEM Standards and
              is DOT Certified.
              <a
                href="https://clear-armor.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.clear-armor.com
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-40 w-52" src="/pic8.png" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">Empire Original Designs</h1>
            <h1>
              Empire Original Designs was established in 2014 in Brooklyn, New
              York by Damian Korman. He is a retired veteran law enforcement
              officer from the New York City Police Department. Damian took his
              knowledge of graphic design and his experience in law enforcement
              and merged the two fields to establish unique and creative
              products.
              <a
                href="https://www.jointheempire.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.jointheempire.com
              </a>
            </h1>
          </div>
        </div> */}
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        {/* Clear Armor Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-black p-4">
          {/* Image Section */}
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-40 h-28 md:w-68 md:h-40 object-contain"
              src="/pic7.jpeg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-sm md:text-md flex flex-col text-center md:text-left justify-center">
            <h1 className="text-xl md:text-2xl font-bold">Clear Armor</h1>
            <p className="leading-relaxed px-2 md:px-0">
              TruArmor is at the forefront of vehicle innovation security
              solutions that protect and secure your most valuable assets: your
              family, friends, and property. We use industry-leading technology
              in conjunction with a unique multilayered world-patented,
              made-in-the-USA glass system that meets OEM Standards and is DOT
              Certified.
              <a
                href="https://clear-armor.com/"
                className="text-blue-500 underline block md:inline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.clear-armor.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        {/* Empire Original Designs Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-black p-4">
          {/* Image Section */}
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-40 h-28 md:w-52 md:h-40 object-contain"
              src="/pic8.png"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-sm md:text-md flex flex-col text-center md:text-left justify-center">
            <h1 className="text-xl md:text-2xl font-bold">
              Empire Original Designs
            </h1>
            <p className="leading-relaxed px-2 md:px-0">
              Empire Original Designs was established in 2014 in Brooklyn, New
              York, by Damian Korman. He is a retired veteran law enforcement
              officer from the New York City Police Department. Damian took his
              knowledge of graphic design and his experience in law enforcement
              and merged the two fields to establish unique and creative
              products.
              <a
                href="https://www.jointheempire.com/"
                className="text-blue-500 underline block md:inline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.jointheempire.com
              </a>
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-40" src="/pic11.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">Inforce</h1>
            <h1>
              Emissive Energy Corp. is an American manufacturer that designs and
              produces weapon accessories for defense, law enforcement, homeland
              security and private citizens marketed under our INFORCE brand. We
              are an ISO 9001:2008 certified manufacturer of optoelectronic
              systems that also designs, engineers and manufactures OEM products
              for a variety of U.S. and international customers. The INFORCE
              brand of products is distributed worldwide and is currently issued
              by every branch of the U.S. Military and by Federal, State and
              local law enforcement agencies.
              <a
                href="https://inforcelights.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.inforce-mil.com
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-40" src="/pic12.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">Mossberg</h1>
            <h1>
              Since 1919, Mossberg® has been the leader in introducing important
              design breakthroughs to the firearm industry. Many product
              features pioneered by Mossberg® are now the standards by which all
              modern firearms are judged. Never content with the status quo, our
              men and women constantly strive to improve and update the
              capabilities of all Mossberg® products. In accomplishing this
              goal, we recognize that each improvement is a part of the
              “Shooting System” approach and most are designed to fit the
              shotgun you bought years ago.
              <a
                href="https://www.mossberg.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mossberg.com
              </a>
            </h1>
          </div>
        </div> */}
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        {/* Inforce Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-black p-4">
          {/* Image Section */}
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-40 h-28 md:w-52 md:h-40 object-contain"
              src="/pic11.jpeg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-sm md:text-md flex flex-col text-center md:text-left justify-center">
            <h1 className="text-xl md:text-2xl font-bold">Inforce</h1>
            <p className="leading-relaxed px-2 md:px-0">
              Emissive Energy Corp. is an American manufacturer that designs and
              produces weapon accessories for defense, law enforcement, homeland
              security, and private citizens marketed under our INFORCE brand.
              We are an ISO 9001:2008 certified manufacturer of optoelectronic
              systems that also designs, engineers, and manufactures OEM
              products for a variety of U.S. and international customers.
              <a
                href="https://inforcelights.com/"
                className="text-blue-500 underline block md:inline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.inforce-mil.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        {/* Mossberg Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-black p-4">
          {/* Image Section */}
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-40 h-28 md:w-52 md:h-40 object-contain"
              src="/pic12.jpeg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-sm md:text-md flex flex-col text-center md:text-left justify-center">
            <h1 className="text-xl md:text-2xl font-bold">Mossberg</h1>
            <p className="leading-relaxed px-2 md:px-0">
              Since 1919, Mossberg® has been the leader in introducing important
              design breakthroughs to the firearm industry. Many product
              features pioneered by Mossberg® are now the standards by which all
              modern firearms are judged. Never content with the status quo, our
              men and women constantly strive to improve and update the
              capabilities of all Mossberg® products.
              <a
                href="https://www.mossberg.com/"
                className="text-blue-500 underline block md:inline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mossberg.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[256px] h-auto"
              src="/Mistral.jpeg"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Mistral
            </h1>
            <p>
              With over 35 years of manufacturing experience, business
              development, and close working relationships with end-users,
              system integrators, and technology developers, we are an expert in
              providing ready, relevant, and reliable solutions to military
              forces and public safety.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[224px] h-auto"
              src="/pic13.png"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Mustang Survival
            </h1>
            <p>
              For over 55 years Mustang Survival has been engineering
              high-performance maritime gear for military, coast guard, rescue
              personnel, and law enforcement...
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[224px] h-auto"
              src="/pic14.jpeg"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Pelican
            </h1>
            <p>
              From this humble beginning sprang a company that ultimately became
              the global leader in the design and manufacture of
              high-performance protective cases...
            </p>
            <a
              href="https://www.pelican.com/"
              className="text-blue-500 underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.pelican.com
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[224px] h-auto"
              src="/pic15.jpeg"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Raven Concealment Systems
            </h1>
            <p>
              Raven Concealment Systems specializes in providing holsters,
              magazine carriers, and related accessories for individuals that
              require secure and discreet means to carry weapons...
            </p>
            <a
              href="https://rcsgear.com/"
              className="text-blue-500 underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.rcsgear.com
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[224px] h-auto"
              src="/pic16.jpeg"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Salomon
            </h1>
            <p>
              Salomon has been playing in the French alps since 1947. Our
              passion for outdoor sports, new technologies and craftsmanship...
            </p>
            <a
              href="https://www.salomon.com/en-int"
              className="text-blue-500 underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.salomon.com
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[224px] h-auto"
              src="/pic17.jpeg"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Sig Sauer
            </h1>
            <p>
              SIG SAUER® world-renowned firearms are the weapons of choice for
              many of the premier global military, law enforcement, and
              commercial users...
            </p>
            <a
              href="https://www.sigsauer.com/"
              className="text-blue-500 underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.sigsauer.com
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        {/* <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-32 w-60" src="/pic18.png" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold flex flex-col text-left justify-center">
              Snakestaff System
            </h1>
            <h1>
              Snakestaff Systems offers the most compact and innovative
              tourniquets on the market. Our goal is to normalize every day
              carrying tourniquets in order to stop the bleed. Made in America.
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex justify-center gap-7 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-40" src="/pic22.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">U.S. Elite</h1>
            <h1>
              We exist to Enhance the Warrior Lifestyle — the spirit that
              defines those brave, committed and intrepid souls who seek to push
              themselves to their greatest limits and beyond. We honor, serve
              and respect these fine men and women by helping them to achieve
              and enhance their desired level of performance, safety, comfort
              and all around lifestyle.
              <a
                href="https://www.us-elitegear.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.us-elitegear.com
              </a>
            </h1>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[224px] h-auto"
              src="/pic18.png"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Snakestaff System
            </h1>
            <p>
              Snakestaff Systems offers the most compact and innovative
              tourniquets on the market. Our goal is to normalize every day
              carrying tourniquets in order to stop the bleed. Made in America.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[224px] h-auto"
              src="/pic22.jpeg"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              U.S. Elite
            </h1>
            <p>
              We exist to Enhance the Warrior Lifestyle — the spirit that
              defines those brave, committed and intrepid souls who seek to push
              themselves to their greatest limits and beyond. We honor, serve
              and respect these fine men and women by helping them to achieve
              and enhance their desired level of performance, safety, comfort,
              and all-around lifestyle.
            </p>
            <a
              href="https://www.us-elitegear.com/"
              className="text-blue-500 underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.us-elitegear.com
            </a>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>

        <div className="flex justify-center gap-7 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-40 w-60" src="/pic9.jpg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">UNITY Tactical</h1>
            <h1>
              UNITY Tactical designs components that integrate tactical systems
              and expand capability for peak performance. We challenge
              assumptions and identify overlooked problems that impact the human
              factor so we can develop innovative, quality products to fill
              those needs. Every detail gives you an edge through efficiency,
              comfort and safety so you can focus on the mission.
              <a
                href="https://www.unitytactical.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.unitytactical.com
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-40" src="/pic10.png" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">Vaultek Safe</h1>
            <h1>
              Vaultek is an American security technology company specializing in
              portable personal security manufacturing advanced smart safes with
              industry leading innovation.
              <a
                href="https://vaulteksafe.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                vaulteksafe.com
              </a>
            </h1>
          </div>
        </div> */}
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-7 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[224px] h-auto"
              src="/pic9.jpg"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              UNITY Tactical
            </h1>
            <p>
              UNITY Tactical designs components that integrate tactical systems
              and expand capability for peak performance. We challenge
              assumptions and identify overlooked problems that impact the human
              factor so we can develop innovative, quality products to fill
              those needs. Every detail gives you an edge through efficiency,
              comfort, and safety so you can focus on the mission.
            </p>
            <a
              href="https://www.unitytactical.com/"
              className="text-blue-500 underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.unitytactical.com
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-7 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[224px] h-auto"
              src="/pic10.png"
            />
          </div>
          <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Vaultek Safe
            </h1>
            <p>
              Vaultek is an American security technology company specializing in
              portable personal security, manufacturing advanced smart safes
              with industry-leading innovation.
            </p>
            <a
              href="https://vaulteksafe.com/"
              className="text-blue-500 underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              vaulteksafe.com
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>
        {/* <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div> */}
        {/* <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-40" src="/pic19.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">Vertx</h1>
            <h1>
              The Vertx story started when a top federal agency directly
              requested a more functional, comfortable and versatile low profile
              tactical pant. Leveraging over 175 years of experience, the
              Fechheimer Brothers Company worked side-by-side with operators to
              develop the industry’s first tactical pant that combined superior
              functionality with a low visual profile. After an incredible
              reception by the industry, Vertx continued to utilize world-class
              designers to develop low profile apparel, tactical garments and
              low profile concealed carry bags and packs. Today, Vertx is
              trusted by the nation’s top operators and prepared professionals
              for our innovative designs, functionality, fit and versatility.
              <a
                href="https://vertx.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.vertx.com
              </a>
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex justify-center gap-5 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img className="h-40 w-60" src="/pic20.jpeg" />
          </div>
          <div className="w-2/3 text-md flex flex-col text-left justify-center">
            <h1 className="text-2xl font-bold">XS Sights</h1>
            <h1>
              Our family strives to lead an even stronger more capable team with
              the same family passion and traditions we were founded on. We are
              deeply committed to creating and manufacturing products to help
              the GOODGUY take care of bad situations. With this we honor and
              support our Law Enforcement and Military professionals who protect
              us at home and abroad. We highly encourage firearm training and
              education and are proud to support organizations and our fellow
              citizens who believe in our Constitution.
              <a
                href="https://xssights.com/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.xssights.com
              </a>
            </h1>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-7 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[224px] h-auto"
              src="/pic19.jpeg"
            />
          </div>
          <div className="w-full md:w-2/3 text-sm sm:text-md md:text-lg flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Vertx</h1>
            <p>
              The Vertx story started when a top federal agency directly
              requested a more functional, comfortable, and versatile
              low-profile tactical pant. Leveraging over 175 years of
              experience, the Fechheimer Brothers Company worked side-by-side
              with operators to develop the industry’s first tactical pant that
              combined superior functionality with a low visual profile. After
              an incredible reception by the industry, Vertx continued to
              utilize world-class designers to develop low-profile apparel,
              tactical garments, and low-profile concealed carry bags and packs.
              Today, Vertx is trusted by the nation’s top operators and prepared
              professionals for our innovative designs, functionality, fit, and
              versatility.
            </p>
            <a
              href="https://vertx.com/"
              className="text-blue-500 underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.vertx.com
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-7 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[224px] h-auto"
              src="/pic20.jpeg"
            />
          </div>
          <div className="w-full md:w-2/3 text-sm sm:text-md md:text-lg flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              XS Sights
            </h1>
            <p>
              Our family strives to lead an even stronger, more capable team
              with the same family passion and traditions we were founded on. We
              are deeply committed to creating and manufacturing products to
              help the GOODGUY take care of bad situations. With this, we honor
              and support our Law Enforcement and Military professionals who
              protect us at home and abroad. We highly encourage firearm
              training and education and are proud to support organizations and
              our fellow citizens who believe in our Constitution.
            </p>
            <a
              href="https://xssights.com/"
              className="text-blue-500 underline mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.xssights.com
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-black p-4">
          <div className="w-full md:w-1/6 flex justify-center">
            <img
              className="w-full max-w-[220px] sm:max-w-[250px] md:max-w-[256px] h-auto"
              src="/Zenith-Logo.png"
            />
          </div>
          <div className="w-full md:w-2/3 text-sm sm:text-md md:text-lg flex flex-col text-left justify-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Zenith Aerotech
            </h1>
            <p>
              Zenith Aerotech, based in Afton, Virginia, specializes in Tethered
              Unmanned Aerial Systems (TeUAS) for defense, public safety,
              industrial, and commercial applications. Our systems offer
              unmatched altitude capability, industry-leading endurance with
              over 100 hours of proven flight time, and modular payload
              configurations. Zenith's tethered systems can carry various
              payloads, such as communication devices and powerful EO/IR gimbal
              suites, and also feature enhanced safety measures and simplified
              operation. Our focus on customization ensures tailored solutions
              for the customer’s specific needs.
            </p>
          </div>
        </div>
      </div>

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
