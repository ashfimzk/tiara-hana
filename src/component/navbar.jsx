import { useState } from "react";

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <header className="bg-[#091927] h-[100px] flex justify-between items-center">
        <div>
          <img
            src="https://www.tiarahana.com/wp-content/themes/tiarahana-cre/images/tiarahana-logo3.png"
            alt=""
            className="h-[80px] pl-10 max-sm:h-[40px] max-sm:pl-4"
          />
        </div>
        <div className=" max-sm:hidden md:w-[600px] flex justify-around mr-[100px]">
          <button className="text-[#ffffffd4] pnav hover:text-[#c9a242]">
            About
          </button>
          <button className="text-[#ffffffd4] pnav hover:text-[#c9a242]">
            Properties Available
          </button>
          <button className="text-[#ffffffd4] pnav hover:text-[#c9a242]">
            Testimonial
          </button>
          <button className="text-[#ffffffd4] pnav hover:text-[#c9a242]">
            Contact
          </button>
        </div>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className=" pr-4 min-[640px]:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </header>
      <div
        className={`min-[640px]:hidden top-0 left-0 w-full bg-[#091927] pt-10 pl-10 fixed h-full z-50 ${
          showSidebar
            ? "ease-in-out duration-300 opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className=" w-full  flex justify-end pr-10 z-50">
          <button className="text-white" onClick={() => setShowSidebar(!showSidebar)}>X</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
