import Image from "next/image";

import Content from "@/components/content";

export default function About(){
    const timeline = [
        {
            "date": "2003/12/31",
            "text": "Born on the last day of the year, December 31, 2003. The simple starting point of my life and learning journey.",
            "img": "/timeline/lampang_hospital.png",
        },
        {
            "date": "2010/03/05",
            "text": "Completing my preschool education marked the transition from early curiosity to structured learning. This milestone was the very first \"building block\" in my journey, igniting a lifelong passion for understanding how the world around me functions.",
            "img": "/timeline/",
        },
        {
            "date": "2016/03/31",
            "text": "During my primary school years, I developed a strong affinity for mathematics and science. Exploring these subjects provided my first glimpse into the logic-driven world, sparking a deep-seated interest in how things work—though at the time, I had no idea that these early sparks were already shaping the engineer I would become today.",
            "img": "/timeline/",
        },
        {
            "date": "2019/03/29",
            "text": "A period of diverse learning—from being a librarian and a welder to exploring the world of art and code. These experiences broadened my perspective and highlighted how technology shapes our lives. My interest in computers began to take center stage here, marking the first real step toward my future in technology and innovation.",
            "img": "/timeline/middle_school.jpg",
        },
        {
            "date": "2022/03/31",
            "text": "I joined the 'Gifted Computer' program, studying programming at Chiang Mai University’s Faculty of Science under a special MOU. Alongside my tech pursuits, I developed strong communication skills as a school PR and a radio DJ for the National Broadcasting Services of Thailand. Though my heart was set on Computer Engineering, fate led me to Electrical Engineering at CMU. I embraced this challenge, realizing that electrical engineering offered a powerful new perspective on the technology I loved.",
            "img": "/timeline/",
        },
    ];

    return (
        <Content>
            <div
                className="
                    z-[-1]
                    w-full
                    mb-16
                "
            >
                <div
                    className="
                        w-[90vw]
                        max-w-340
                        mx-auto
                        pb-16
                    "
                >
                    <div
                        className="
                            text-white
                            text-center
                            max-w-160
                            mx-auto
                        "
                    >
                        <h2 
                            className="
                                text-[50px]
                                font-bold
                                text-transparent
                                bg-linear-to-r from-[#ff6a00] via-[#ee0979] to-[#ff6a00]
                                bg-clip-text
                                transition-all
                                duration-100
                                bg-animated-gradient
                                mb-3
                            "
                        >
                            The Journey of <br />
                            Sakdinun (Dan) Thewana
                        </h2>
                        <p
                            className="
                                tracking-[-0.02em]
                                text-xl
                            "
                        >
                            Sparked by a fascination with technology,
                            my journey is defined by the drive to become a skilled Electrical Engineer.
                            Through my studies, I found my true calling in Control Systems and Automation as the driving forces of the modern world.
                            This is my story—transforming from a student into a professional ready to deliver impactful innovations.
                        </p>
                    </div>
                </div>
                <div
                    className="
                        z-[-4]
                        relative w-[90vw]
                        max-w-340
                        mx-auto
                    "
                >
                    <div
                        className="
                            relative
                            flex
                            flex-col
                            justify-center
                            items-center
                            max-w-280
                            mx-auto
                        "
                    >
                        {/* timeline circle */ }

                        <div
                            className="
                                absolute
                                z-[-3]
                                bg-[#4141415f]
                                w-1.25
                                h-full
                            "
                        ></div>

                        {/* timeline detail */ }

                        {timeline.map((value, index) => (
                            <div
                                key={index}
                                className="
                                    z-1
                                    relative
                                    grid
                                    gap-x-0 gap-y-0
                                    grid-rows-[auto] grid-cols-[1fr_3rem_1fr]
                                    auto-cols-[1fr]
                                    py-16
                                "
                            >
                                <div
                                    className="
                                        text-right
                                        justify-end
                                        items-stretch
                                    "
                                >
                                    <div
                                        className="
                                            sticky
                                            top-[50vh]
                                            text-white
                                            tracking-[-0.05em]
                                            text-5xl
                                            font-medium leading-[0.4]
                                        "
                                    >{value.date}</div>
                                </div>

                                <div
                                    className="
                                        flex
                                        justify-center
                                    "
                                >
                                    <div
                                        className="
                                            bg-white
                                            rounded-full
                                            w-3.75 min-w-3.75 max-w-3.75
                                            h-3.75 min-h-3.75 max-h-3.75
                                            sticky top-[50vh]
                                        "
                                    ></div>
                                </div>

                                <div
                                    className="
                                        ml-6
                                    "
                                >
                                    <div 
                                        className="
                                            text-white
                                            text-lg
                                            font-medium
                                            leading-5
                                            mb-6
                                        "
                                    >{value.text}</div>

                                    <Image
                                        src={value.img}
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="
                                            align-middle
                                            max-w-full
                                            inline-block
                                        "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Content>
    );
}