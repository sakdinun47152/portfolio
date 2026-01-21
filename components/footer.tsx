import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return(
        <div
          className="
            flex
            flex-row
            justify-between
            bg-[#111111]
            w-full
            mt-18
            py-6
          "
        >
            <div
                className="
                    flex
                    flex-col
                    justify-center
                    ml-8
                "
            >
                <p>Sakdinun (Dan) Thewana</p>
                <p>Electrical Engineer</p>
                <div
                    className="
                        flex
                        flex-row
                    "
                >
                    <div
                        className="
                            flex
                            flex-row
                            mr-3
                        "
                    >
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="
                                w-5
                                mr-3
                            "
                        />
                        sakdinun.thewana@gmail.com
                    </div>

                    |

                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/sakdinunthewana/"
                        className="
                            flex
                            flex-row
                            mx-3
                            cursor-pointer
                            hover:text-blue-900
                        "
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="
                                w-4
                                mr-3
                            "
                        />
                        LinkedIn
                    </Link>
                </div>
            </div>

            <span
                className="
                    flex
                    items-center
                    mr-8
                    text-right
                "
            >
                © 2026 <br />
                EN
            </span>
        </div>
    );
}