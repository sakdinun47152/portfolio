import Image from "next/image";

import Content from "@/components/content";

export default function About(){
    return (
        <Content>
            <div className="z-0 relative">
                <div className="bg-black">
                    <div className="w-[90vw] max-w-340 mx-auto">
                        <div className="py-30">
                            <div className="text-white text-center max-w-160 mx-auto">
                                <div className="mb-8">
                                    <h2>The Rise Of Sakdinun Thewana</h2>
                                </div>
                                <p className="tracking-[-0.02em] text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsam harum vero? Sint, molestias consequuntur! Expedita deserunt iste hic ratione rerum nulla veniam dolor pariatur, similique provident assumenda esse nam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-timeline">
                    <div className="w-[90vw] max-w-340 mx-auto">
                        <div className="relative flex flex-col justify-center items-center max-w-280 mx-auto">
                            <div className="timeline-progress">
                                <div className="timeline-progress-bar"></div>
                            </div>
                            <div className="z-2 gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr_180px_1fr] auto-cols-[1fr]">
                                <div className="timeline-left">
                                    <div className="timeline-date-text">31 December 2003</div>
                                </div>
                                <div className="timeline-centre">
                                    <div className="timeline-circle"></div>
                                </div>
                                <div className="timeline-right">
                                    <div className="margin-bottle-xlarge">
                                        <div className="timeline-text">
                                            Sakdinun D. Thewana was born at Lampang Hospital.
                                        </div>
                                    </div>
                                    <div className="timeline-image-wrapper">
                                        <Image src="/" alt="Lampang Hospital" width={500} height={500} />
                                    </div>
                                </div>
                            </div>
                            <div className="overlay-fade-top"></div>
                            <div className="overlay-fade-bottom"></div>
                        </div>
                    </div>

                    { /* <div className="h-[50vh]"></div> */ }
                </div>
            </div>
        </Content>
    );
}