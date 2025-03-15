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
      {/* <div className="navbar bg-[#C1C1C1] h-[232px]">
  <div className="flex-1 pl-10">
   <img className="w-32 h-48" src="https://atcouncil.us/static/media/ATC.aca4c589794b0d6b0468.png" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal text-black px-1">
      <li onClick={Home} className="hover:text-red-500"><a>Home</a></li>
      <li onClick={Events} className="hover:text-red-500"><a>Events</a></li>
      <li onClick={Speaker} className="hover:text-red-500 text-red-500"><a>Speaker Roster</a></li>
      <li onClick={Elite} className="hover:text-red-500"><a>Elite Sponsors</a></li>
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
            <li onClick={Speaker} className="hover:text-red-500  text-red-500">
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
          <li onClick={Home} className="hover:text-red-500 ">
            <a>Home</a>
          </li>
          <li onClick={Events} className="hover:text-red-500">
            <a>Events</a>
          </li>
          <li onClick={Speaker} className="hover:text-red-500 text-red-500">
            <a>Speaker Roster</a>
          </li>
          <li onClick={Elite} className="hover:text-red-500 ">
            <a>Elite Sponsors</a>
          </li>
          <li onClick={Sponsors} className="hover:text-red-500 ">
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
    </div>
      {/* <div className="mt-14 space-x-10 space-y-10">
        <h1 className="text-black text-center text-6xl font-bold">
          SPEAKER ROSTER
        </h1>
        <h1 className="text-blue-500 text-center text-4xl">OUR HOSTS</h1>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex items-center justify-center gap-10  text-black">
          <div className="w-1/6 text-2xl font-bold ">
            <img src="https://atcouncil.us/static/media/SR1.f2e68e6ee178cb129084.jpeg" />
          </div>
          <div className="w-3/5  text-md space-y-6">
            <h1 className="text-2xl font-bold">
              Dr. Maurizio Miglietta - Director
            </h1>
            <h1>
              Dr. Miglietta is a Trauma Surgeon and serves as the Founder and
              Director of the MTU. He has served as Chief of the Division of
              Acute Care Surgery and Director of Trauma and Emergency Surgery at
              NewYork-Presbyterian Hospital / Columbia University Medical
              Center. Immediately prior, he served as Chief of Trauma and
              Critical Care at the renowned and historic Bellevue Hospital / New
              York University School of Medicine.
            </h1>
            <h1>
              Dr. Miglietta provided medical support for the United States
              Secret Service – New York Field Office, Diplomatic Security
              Service - State Department and continues to be an Honorary Police
              Surgeon for the New York City Police Department. Dr. Miglietta is
              a Professor of Surgery and Associate Dean at Touro University and
              served as a Professor of Surgery at NYU, Columbia and Mount Sinai
              Schools of Medicine. He served as the Director of Medical
              Education at Hackensack Meridian Palisades and created multiple
              residency training programs. He has approximately 30 peer-reviewed
              publications, appears as a medical expert on various national TV
              shows and has trained various federal agencies. Dr. Miglietta has
              received awards from the Federal Law Enforcement Association and
              Homeland Security Foundation for his continued work with law
              enforcement. Dr. Miglietta was honored as one of the 2008 Crain’s
              Business Forty Under 40. Dr. Miglietta is a Special Deputy U.S.
              Marshal assigned to the NY/NJ Fugitive Task Force.
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex items-center justify-center gap-10 text-black">
          <div className="w-1/6 text-2xl font-bold">
            <img src="https://atcouncil.us/static/media/SR2.a71defaece05456adec8.jpeg" />
          </div>
          <div className="w-3/5 text-md space-y-6">
            <h1 className="text-2xl font-bold">Michael Vaiani - Founder</h1>
            <h1>
              Mike Vaiani is the founder of the NYC Anti-Terrorism Symposium is
              2002. He is a (Ret.) Special Agent, USSS assigned to the New York
              Field Office located at #7 World Trade Center on the morning of
              9/11. His life experiences to include a degree in nursing, uniform
              police officer and a special agent with DEA has helped him build
              relationships through out his career and understands the
              importance of it. During the events of 9/11, Mike realized
              relationships established could form a networking opportunity
              through training for not only law enforcement, first responders,
              military and private sector. This mixing of dynamic individuals
              from the various sectors along with an expertise of speakers makes
              the Symposium a truly unique experience. Mikes love for the
              military comes from his dad's career in the Navy as a (Ret.) Navy
              Chief.
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="border-black w-11/12 mx-40" />
        </div>
        <div className="flex items-center justify-center gap-10  text-black">
          <div className="w-1/6 text-2xl font-bold pt-10">
            <img src="https://atcouncil.us/static/media/DianeChange.ac8b473ed6af172afc4b.jpeg" />
          </div>
          <div className="w-3/5 text-md space-y-6">
            <h1 className="text-2xl font-bold">
              Diane Barton - Event Coordinator
            </h1>
            <h1>
              When you think of the MTU NYC Anti Terrorism Symposium, you can’t
              help but think of Diane. As the Symposium Coordinator since 2007,
              Diane has handled everything from flights to food to schedules and
              accommodations. Diane takes the stresses of managing many diverse
              requests & requirements, let alone dealing with many military and
              law enforcement divisions, & turns them into interesting,
              informative and fun events with a family like feel. Initially
              working with USSS Special Agent Mike Vaiani at Camp Smith in 2001,
              Diane became interested in learning about the Symposium. Soon, she
              enthusiastically volunteered to help.
            </h1>
            <h1>
              Diane currently is Housing and Logistics Billeting Manager at Camp
              Smith Training Site for DMNA where she is responsible for the
              management, administration, & technical & professional direction
              of lodging operations as well as coordinating major activities for
              lodging projects & soldier training. Her work ensures measurable
              standards of service performance & accountability to ensure a
              uniform system that provides cost-effective service to all service
              members.
            </h1>
            <h1>
              Diane and her husband Kevin love spending time with their large,
              boisterous family, especially their three grandkids and three
              grand fur babies who keep them on their toes!
            </h1>
          </div>
        </div>
      </div> */}
      <div className="mt-14 space-y-10 px-4 md:px-10">
        <h1 className="text-black text-center text-4xl md:text-6xl font-bold">
          SPEAKER ROSTER
        </h1>
        <h1 className="text-blue-500 text-center text-2xl md:text-4xl">
          OUR HOSTS
        </h1>

        <div className="flex justify-center">
          <hr className="border-black w-full md:w-11/12" />
        </div>

        {[
          {
            name: "Dr. Maurizio Miglietta - Director",
            img: "/ddrma.jpeg",
            description: ` Dr. Miglietta is a Trauma Surgeon and serves as the Founder and
              Director of the MTU. He has served as Chief of the Division of
              Acute Care Surgery and Director of Trauma and Emergency Surgery at
              NewYork-Presbyterian Hospital / Columbia University Medical
              Center. Immediately prior, he served as Chief of Trauma and
              Critical Care at the renowned and historic Bellevue Hospital / New
              York University School of Medicine.`,
            description1: ` Dr. Miglietta provided medical support for the United States
              Secret Service – New York Field Office, Diplomatic Security
              Service - State Department and continues to be an Honorary Police
              Surgeon for the New York City Police Department. Dr. Miglietta is
              a Professor of Surgery and Associate Dean at Touro University and
              served as a Professor of Surgery at NYU, Columbia and Mount Sinai
              Schools of Medicine. He served as the Director of Medical
              Education at Hackensack Meridian Palisades and created multiple
              residency training programs. He has approximately 30 peer-reviewed
              publications, appears as a medical expert on various national TV
              shows and has trained various federal agencies. Dr. Miglietta has
              received awards from the Federal Law Enforcement Association and
              Homeland Security Foundation for his continued work with law
              enforcement. Dr. Miglietta was honored as one of the 2008 Crain’s
              Business Forty Under 40. Dr. Miglietta is a Special Deputy U.S.
              Marshal assigned to the NY/NJ Fugitive Task Force.`,
          },

          {
            name: "Michael Vaiani - Founder",
            img: "mivi.jpeg",
            description: ` Mike Vaiani is the founder of the NYC Anti-Terrorism Symposium is
              2002. He is a (Ret.) Special Agent, USSS assigned to the New York
              Field Office located at #7 World Trade Center on the morning of
              9/11. His life experiences to include a degree in nursing, uniform
              police officer and a special agent with DEA has helped him build
              relationships through out his career and understands the
              importance of it. During the events of 9/11, Mike realized
              relationships established could form a networking opportunity
              through training for not only law enforcement, first responders,
              military and private sector. This mixing of dynamic individuals
              from the various sectors along with an expertise of speakers makes
              the Symposium a truly unique experience. Mikes love for the
              military comes from his dad's career in the Navy as a (Ret.) Navy
              Chief.`,
          },
          {
            name: "Diane Barton - Event Coordinator",
            img: "/Dian.jpeg",
            description: `When you think of the MTU NYC Anti Terrorism Symposium, you can’t help but think of Diane. As the Symposium Coordinator since 2007, Diane has handled everything from flights to food to schedules and accommodations. Diane takes the stresses of managing many diverse requests & requirements, let alone dealing with many military and law enforcement divisions, & turns them into interesting, informative and fun events with a family like feel. Initially working with USSS Special Agent Mike Vaiani at Camp Smith in 2001, Diane became interested in learning about the Symposium. Soon, she enthusiastically volunteered to help`,
            description1:
              "Diane currently is Housing and Logistics Billeting Manager at Camp Smith Training Site for DMNA where she is responsible for the management, administration, & technical & professional direction of lodging operations as well as coordinating major activities for lodging projects & soldier training. Her work ensures measurable standards of service performance & accountability to ensure a uniform system that provides cost-effective service to all service members.",
            description2:
              "Diane and her husband Kevin love spending time with their large, boisterous family, especially their three grandkids and three grand fur babies who keep them on their toes!",
          },
        ].map((speaker, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-black">
              <div className="w-2/3 md:w-1/6 text-2xl font-bold">
                <img
                  src={speaker.img}
                  className="w-full h-auto object-cover"
                  alt={speaker.name}
                />
              </div>
              <div className="w-full md:w-3/5 text-sm md:text-md space-y-4 md:space-y-6 text-center md:text-left">
                <h1 className="text-lg md:text-xl font-bold">
                  {speaker.name}
                </h1>
                <h1 className="text-sm md:text-md">{speaker.description}</h1>
                <h1 className="text-sm md:text-md">{speaker.description1}</h1>
                <h1 className="text-sm md:text-md">{speaker.description2}</h1>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <hr className="border-black w-full md:w-11/12" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#054CC0] pt-14 mt-10 flex justify-center h-32">
        <h1 className="text-3xl">OUR SPEAKERS</h1>
      </div>

      <div className="mt-14 space-y-10 px-4 md:px-10">
        {[
          {
            name: "Dee Smith - CEO, Strategic Insight Group",
            img: "/Dee-Smith.jpg",
            description: `Based in Fort Worth, Texas, Gordon Dee Smith is Founder and CEO of Strategic Insight Group, a private intelligence and research firm that serves a client base of large investors, operating companies, and law firms, and works in more than 100 countries. He has advised on over US $120 billion in investment transactions and has conducted projects in areas ranging from geopolitical and global change risk analysis to enhanced due diligence and transactional and market intelligence for the finance, technology, defense, energy, retail, transportation, and healthcare industries, among others. His clients include several of the world’s largest institutional investors.`,
            description1: `He has led projects in Western and Eastern Europe, the Middle East, Africa, South Asia, Southeast Asia, East Asia, Russia, North America, Central and South America, and Australia and the Pacific. Prior to founding SIG, he headed a venture capital firm bringing European investment into Latin America, was an intelligence contractor for the U.S. Defense Intelligence Agency (DIA) working in the area of counter-terrorism, and was a founder and president of an international NGO, InterCultura, which conducted international exchange projects in 14 countries. He is active in the international relations and geopolitical policy communities.`,
          },
          {
            name: "John Franchi - CIA Retired",
            img: "/pic1.jpeg",
            description: `John Franchi is a former senior executive of the Central Intelligence Agency, retiring after 29 years of distinguished service holding numerous high-level positions internationally and in Washington DC, as well as with the U.S. military and U.S. Department of State`,
            description1: `His assignments took him throughout the Middle East and Africa, along with extensive experience in Europe. John is a fluent Arabist who developed an expertise in geopolitical and transnational issues related to the Middle East, Islam, transnational issues, counterterrorism, counterintelligence and cyber.`,
            description2: `Throughout, John oversaw and led all facets of intelligence and operations, to include interfacing with the senior most levels of the U.S. and foreign governments, as well as the private sector. As such, he maintains deep and broad relationships across the business community and governments in the U.S., Middle East, Africa, Europe and parts of South America and Asia.`,
            description3: `Since leaving the government John founded two strategic consulting firms – which support a diverse client base in the U.S., Middle East, Eastern and Western Europe, and across Africa. The firms provide a full range of advisory services, to include risk assessment/mitigation, deal sourcing, as well as relationship access and development services to domestic and international clientele. He is married and has three sons.`,
          },
          {
            name: "Ben Pappas - Marine LtCol retired (Force Recon & MARSOC)",
            img: "/ben pa.jpeg",
            description: `Ben Pappas is the CEO and Founder of Ben Pappas Leadership and Life Coaching. He has over 25 years of leadership experience in some of the most demanding positions and environments on earth. Ben has led, mentored, and coached thousands of people, including highly successful business founders, and C-suite executives in Fortune 500 companies, from across the US and world.`,
            description1: `Ben’s leadership experience spans commanding precision raids in direct combat, promoting foreign relations in Europe and Asia, coaching people to achieve personal and business success, teaching graduate-level leadership courses, and even leadership on the football field. His expertise includes leading organizational change, and helping people make breakthroughs to achieve peak performance, intervention, negotiation, communication, change management, building teams, and improving decision-making skills. He is a former Marine special operations leader who can assess, develop, and create strategies to achieve individual, and organizational goals.`,
            description2: `Ben commanded the elite 2nd Marine Raider Battalion, one of only three Special Operations Forces battalions in the Marine Corps. He also served as a platoon commander with 1st Force Recon and designed and built the Recon Training Company, which included the Basic Recon Course and Scout Sniper School.`,
          },
          {
            name: "Michèle Stuart - JAG Investigations, Inc.",
            img: "https://atcouncil.us/static/media/SR5.2a85d1ab2b85ac029d81.png",
            description: `With over thirty years of investigative experience and twenty-six years of running her own company, Ms. Stuart is an expert in a range of investigative fields, including OSINT, counterintelligence, insurance fraud investigations, financial investigations, threat assessments, due diligence, organized retail crime, corporate and competitive intelligence..`,
            description1: `Ms. Stuart consults and trains a variety of clients, including federal, state, and local law enforcement agencies, military intelligence communities, Fortune 500 companies, as well as financial and insurance industries. Her focus is on open source intelligence, social media, and threat assessments and mitigation. She has also served as an Instructor at Quantico (FBI Academy), teaching international training in OSINT (Open-Source Intelligence).`,
            description2: `In 2017, Ms. Stuart collaborated with the Pennsylvania Office of Homeland Security to create a program called “Keeping Kids Safe.” This program provides training to administrators, principals, teachers, SRO’s, and parents on the dangers of online and social media activity, predator grooming, as well as the dangers of applications and cellular security.`,
          },
        ].map((person, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <hr className="border-black w-full md:w-11/12 mx-auto" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-black">
              <div className="w-full md:w-1/6 text-lg md:text-2xl font-bold flex justify-center">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-auto rounded-lg object-cover pt-10"
                />
              </div>
              <div className="w-full md:w-3/5 text-sm mt-6 md:text-md space-y-4">
                <h1 className="text-lg md:text-xl font-bold">{person.name}</h1>
                <h1 className="text-justify">{person.description}</h1>
                <h1 className="text-justify">{person.description1}</h1>
                <h1 className="text-justify">{person.description2}</h1>
                <h1 className="text-justify">{person.description3}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 
      <div className="flex justify-center bg-[#767676] h-28 items-center mt-8 text-center gap-40">
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
