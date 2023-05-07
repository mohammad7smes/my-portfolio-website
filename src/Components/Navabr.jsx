import { useState } from "react";


const Navabr = () => {
  const [showMenu, setShowMenu] = useState(true)
  return (
    <nav className="flex px-5 py-2 justify-between">
      <a href="#">
        <span className="NastaliqFont text-6xl text-white mt-1">محمد</span>
      </a>

      <button className="hamMenu mt-2 cursor-pointer px-2 md:hidden focus:border focus:rounded-md text-white" onClick={() => setShowMenu(!showMenu)}>
        {/* <span className="border border-white block w-[30px] rounded-lg mb-1.5 hamTop"></span>
        <span className="border border-white block w-[30px] rounded-lg mb-1.5 hamMiddle"></span>
        <span className="border border-white block w-[30px] rounded-lg ham-bottom"></span> */}

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>

      </button>

      <ul className={`absolute top-0 right-0 h-screen md:h-auto ${showMenu ? "w-[80%]" : "hidden overflow-y-hidden"} shadow-lg text-white bg-black/[.9] text-2xl px-8  md:flex block md:bg-transparent md:w-[50%] md:justify-evenly md:right-[40%] md:text-[18px]`}>

        <li className="border-b py-3 mt-12 md:mt-4 hover:border-sky-400 md:hover:text-[#555] md:py-0 md:border-none"><a href="" className="">درباره من</a></li>
        <li className="mt-4 border-b py-3 hover:border-sky-400 md:hover:text-[#555] md:py-0 md:border-none"><a href="" className="">نمونه کار</a></li>
        <li className="mt-4 border-b py-3 hover:border-sky-400 md:hover:text-[#555] md:py-0 md:border-none"><a href="" className="">تماس با من</a></li>


        <img src="./assets/img/instagram.png" alt="" />
      </ul>


    </nav>
  );
}

export default Navabr