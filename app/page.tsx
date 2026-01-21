import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./globals.css";
import Content from "@/components/content";
import { faShareSquare, faArchive } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Content>
      <div
        className="
          flex
          flex-col
          justify-start
          items-center
          w-1/2
          pl-12
          pr-6
        "
      >  
        <h1
          className="
            w-full
            text-3xl
            mt-18
          "
        >Hi, I'm Sakdinun D. Thewana!</h1>

        <h2
          className="
            w-full
            text-5xl
            font-bold
            bg-linear-to-r
            from-red-700
            via-[#0047ab]
            to-red-700
            bg-clip-text
            text-transparent
            bg-animated-gradient
            transition-all duration-100
          "
        >
          ELECTRICAL ENGINEER
        </h2>

        <p
          className="
            w-full
            text-lg
            text-left
            mt-10
          "
        >
          Aspiring Electrical Engineer with a focused interest in Control Systems and Automation.
          Equipped with strong academic foundations in DSP, Power Electronics, and AI application.
          I am eager to leverage my skills in modern technology and sustainable energy (Renewable & ESS) to contribute to innovative engineering projects.
          <span className="text-blue-500 ml-1">#ee #control-system #renewable-energy #ai</span>
        </p>

        <div
          className="
            flex
            flex-row
            w-full
            mt-10
          "
        >
          <Link
            className="outline-none"
            target="_blank"
            href="https://www.linkedin.com/in/sakdinunthewana/"
          >
            <button
              className="
                bg-white
                w-40
                h-14
                mr-8
                rounded-md
                font-semibold text-black
                cursor-pointer
                hover:bg-linear-to-r
                hover:from-white
                hover:via-cyan-300
                hover:to-white
                hover:w-50
                bg-animated-gradient
                transition-all duration-500
              "
            >
              <span
                className="
                  flex
                  flex-row
                  justify-center
                "
              >
                  HIRE ME
                  <FontAwesomeIcon
                    icon={faShareSquare}
                    className="
                      ml-2
                      w-4
                    "
                  />
              </span>
            </button>
          </Link>
          <Link
            className="outline-none"
            href="/projects"
          >
            <button
              className="
              bg-[#0047ab]
                w-40
                h-14
                mr-8
                rounded-md
                font-semibold text-white
                cursor-pointer
                hover:bg-linear-to-r
                hover:from-[#0047ab]
                hover:via-blue-600
                hover:to-[#0047ab]
                hover:w-50 hover:text-white
                bg-animated-gradient
                transition-all duration-500
              "
            >
              <span
                className="
                  flex
                  flex-row
                  justify-center
                ">PROJECT
                <FontAwesomeIcon
                  icon={faArchive}
                  className="
                    ml-2
                    w-4
                  "
                />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div
        className="
          flex
          justify-end
          items-center
          w-1/3
          pr-12
        "
      >
        <Image
          src="/profile.png"
          alt="An image of Sakdinun"
          width={500}
          height={500}
        />
      </div>
    </Content>
  );
}
