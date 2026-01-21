import Link from "next/link";

import "../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faLightbulb, faArchive, faContactBook } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Header() {
  return (
    <div
      className="
        fixed
        top-0
        flex
        justify-between
        items-center
        w-full
        h-16
        px-8
      "
    >
      <div
        className="
          flex
          flex-row
        "
      >
        <h1
          className="
            flex
            text-md
            bg-linear-to-r
            from-white
            via-blue-700
            to-white
            bg-clip-text
            text-transparent
            bg-animated-gradient
            transition-all duration-100
            cursor-pointer
          "
        >
          @daniel.sakdinun
        </h1>
      </div>

      <div
        className="
          flex
          flex-row
          justify-center
          items-center
          h-full
        "
      >
        <HeaderLink
          icon={faHome}
          text="Home"
          path="/"
          colors={[
            "from-red-700",
            "via-blue-700",
            "to-red-700"
          ]}
        />

        <HeaderLink
          icon={faUser}
          text="About"
          path="/about"
          colors={[
            "from-red-700",
            "via-blue-700",
            "to-red-700"
          ]}
        />

        <HeaderLink
          icon={faLightbulb}
          text="Skills"
          path="/skills"
          colors={[
            "from-red-700",
            "via-blue-700",
            "to-red-700"
          ]}
        />

        <HeaderLink
          icon={faArchive}
          text="Projects"
          path="/projects"
          colors={[
            "from-red-700",
            "via-blue-700",
            "to-red-700"
          ]}
        />

        <HeaderLink
          icon={faContactBook}
          text="Contact"
          path="/contact"
          colors={[
            "from-red-700",
            "via-blue-700",
            "to-red-700"
          ]}
        />
      </div>
    </div>
  );
}

function HeaderLink({icon, text, path, colors}: Readonly<{icon:IconProp, text: string, path: string, colors: string[]}>) {
  return(
    <Link
      className={`
        group
        relative
        flex
        flex-row
        justify-center
        items-center
        w-16
        h-full
        outline-none
      `}
      href={path}
    >
          <FontAwesomeIcon
            icon={icon}
            className="
              w-5
              absolute
              transform
              group-hover:scale-50
              group-hover:opacity-0
              transition-all duration-300 ease-in-out
            "
          />
          <p
            className={`
              hidden
              opacity-0
              bg-linear-to-r
              `
              + colors.join(" ") +
              `
              text-transparent
              bg-clip-text
              bg-animated-gradient
              transition-all duration-500
              group-hover:flex
              group-hover:opacity-100
            `}
          >{text}</p>
    </Link>
  )
}