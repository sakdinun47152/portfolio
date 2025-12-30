import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./globals.css";
import Content from "@/components/content";
import { faShareSquare, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faLine, faLinkedin} from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  return (
    <Content>
      <div className="flex flex-col justify-start items-center w-1/2 pl-12 pr-6">
        <h1 className="w-full text-3xl">Hi, I'm Sakdinun D. Thewana!</h1>
        <h2 className="w-full text-5xl text-transparent bg-gradient-to-r from-red-700 via-blue-700 to-red-700 bg-clip-text transition-all duration-100 bg-animated-gradient">
          ELECTRICAL ENGINEER
        </h2>

        <p className="w-full text-lg text-left mt-10">
          Aspiring Electrical Engineer with a focused interest in Control Systems and Automation.
          Equipped with strong academic foundations in DSP, Power Electronics, and AI application.
          I am eager to leverage my skills in modern technology and sustainable energy (Renewable & ESS) to contribute to innovative engineering projects.
          <span className="text-blue-500 ml-1">#ee #control-system #renewable-energy #ai</span>
        </p>

        <div className="flex flex-row w-full mt-10">

          <Link className="outline-none" href="https://www.linkedin.com/in/sakdinunthewana/" target="_blank">
            <button className="bg-white w-40 h-14 mr-8 rounded-md font-semibold text-black cursor-pointer hover:bg-[linear-gradient(to_right,#fe0000,#00ff00,#0000ff,#00ff00,#fe0000)] hover:w-50 hover:text-white transition-all duration-500 bg-animated-gradient">
              <span className="flex flex-row justify-center">HIRE ME<FontAwesomeIcon icon={faShareSquare} className="ml-2 w-4 cursor-pointe" /></span>
            </button>
          </Link>

          <Link className="outline-none" href="/projects" target="_blank">
            <button className="bg-blue-800 w-40 h-14 rounded-md font-semibold text-white cursor-pointer hover:bg-[linear-gradient(to_right,#fe0000,#00ff00,#0000ff,#00ff00,#fe0000)] hover:w-50 transition-all duration-500 bg-animated-gradient">
              <span className="flex flex-row justify-center">PROJECT<FontAwesomeIcon icon={faCodeBranch} className="ml-2 w-4 cursor-pointe" /></span>
            </button>
          </Link>

        </div>

        <div className="flex flex-row justify-between w-full mt-10">
          <div className="flex flex-row">
            <Link target="_blank" href="https://www.facebook.com/daniel.sakdinun/"><FontAwesomeIcon icon={faFacebook} className="mr-3 w-6 cursor-pointer hover:text-blue-600" /></Link>
            <Link target="_blank" href="https://www.instagram.com/daniel.sakdinun/"><FontAwesomeIcon icon={faInstagram} className="mx-3 w-6 cursor-pointer hover:text-pink-600" /></Link>
            <Link target="_blank" href="https://line.me/ti/p/3BfBcbFwYM"><FontAwesomeIcon icon={faLine} className="mx-3 w-6 cursor-pointer hover:text-green-400" /></Link>
            <Link target="_blank" href="https://www.linkedin.com/in/sakdinunthewana/"><FontAwesomeIcon icon={faLinkedin} className="mx-3 w-6 cursor-pointer hover:text-blue-900" /></Link>
          </div>
          <span className="flex items-center">© 2025 Sakdinun D. Thewana</span>
        </div>
      </div>

      <div className="flex justify-end items-center w-1/2 pr-12">
        <Image className="h-auto max-w-full" src="/profile.png" alt="An image of Sakdinun" width={500} height={500} />
      </div>
    </Content>
  );
}
