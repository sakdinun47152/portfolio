import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faComment } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="fixed top-0 flex justify-between items-center w-full h-16 px-8">
      <div className="flex flex-row">
        <h1 className="flex text-md text-transparent bg-gradient-to-r from-red-700 via-blue-700 to-red-700 bg-clip-text transition-all duration-100 bg-animated-gradient">
          @daniel.sakdinun
        </h1>

        <Link className="flex flex-row justify-center ml-3 px-3 hover:text-transparent hover:bg-gradient-to-r hover:from-red-700 hover:via-blue-700 hover:to-red-700 hover:bg-clip-text transition-all duration-100 bg-animated-gradient outline-none" href="/">
          Home
        </Link>

        <Link className="flex flex-row justify-center ml-3 px-3 hover:text-transparent hover:bg-gradient-to-r hover:from-red-700 hover:via-blue-700 hover:to-red-700 hover:bg-clip-text transition-all duration-100 bg-animated-gradient outline-none" href="/about">
            About
        </Link>

        <Link className="flex flex-row justify-center ml-3 px-3 hover:text-transparent hover:bg-gradient-to-r hover:from-red-700 hover:via-blue-700 hover:to-red-700 hover:bg-clip-text transition-all duration-100 bg-animated-gradient outline-none" href="/projects">
          Projects
        </Link>

        <Link className="flex flex-row justify-center ml-3 px-3 hover:text-transparent hover:bg-gradient-to-r hover:from-red-700 hover:via-blue-700 hover:to-red-700 hover:bg-clip-text transition-all duration-100 bg-animated-gradient outline-none" href="/blog">
          Blog
        </Link>

        <Link className="flex flex-row justify-center ml-3 px-3 hover:text-transparent hover:bg-gradient-to-r hover:from-red-700 hover:via-blue-700 hover:to-red-700 hover:bg-clip-text transition-all duration-100 bg-animated-gradient outline-none" href="/contact">
          Contact
        </Link>
      </div>

      <button className="flex flex-row justify-center items-center bg-blue-700 w-40 h-10 mr-8 rounded-md font-semibold text-white cursor-pointer hover:w-60 hover:bg-green-500 transition-all duration-500">
        <FontAwesomeIcon icon={faComment} className="w-4 mr-3" />
        Let's Talk
      </button>
    </div>
  );
}