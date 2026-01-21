'use client'

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@/components/pdf-viewer'), { 
  ssr: false,
  loading: () => <p>Loading PDF...</p>
});

import Content from "@/components/content";

export default function Projects(){
    return (
        <Content>
            <div
                className="
                    flex
                    flex-col
                    items-center
                "
            >
                <div
                    className="
                        w-1/2
                    "
                >
                    <h2 
                        className="
                            text-[50px]
                            font-bold
                            text-center
                            text-transparent
                            bg-linear-to-r from-[#ff6a00] via-[#ee0979] to-[#ff6a00]
                            bg-clip-text
                            transition-all duration-100
                            bg-animated-gradient
                            mb-3
                        "
                        >
                        The Archive of <br />
                        Sakdinun (Dan) Thewana
                    </h2>
                    <p
                        className="
                            tracking-[-0.02em]
                            text-xl
                            text-center
                        "
                    >
                        Sparked by a fascination with technology,
                        my journey is defined by the drive to become a skilled Electrical Engineer.
                        Through my studies, I found my true calling in Control Systems and Automation as the driving forces of the modern world.
                        This is my story—transforming from a student into a professional ready to deliver impactful innovations.
                    </p>
                </div>

                <PDFViewer
                    src="/projects/intern.pdf"
                    title="Automatic Voltage Regulator"
                    cdate="May 2025"
                    duration="2 Months"
                    objectives={[
                        "To bridge the technical knowledge gap in Automatic Voltage Regulator (AVR) through a comprehensive systematic study during the internship at EGAT",
                        "To identify and master critical operational aspects of AVR to ensure seamless integration into daily power plant workflows and facilitate technical knowledge transfer to the department."
                    ]}
                    desc="A technical initiative conducted during an Electrical Engineering internship at the Electricity Generating Authority of Thailand (EGAT). This project involved a deep-dive into AVR systems to bridge operational knowledge gaps. The study concluded with a concise 10-minute technical briefing delivered to the entire department, demonstrating the ability to distill complex engineering data into high-impact, actionable insights under time constraints."
                />
            </div>
        </Content>
    );
}