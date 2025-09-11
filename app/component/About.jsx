import React from 'react'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const About = () => {
    return (
        <div className='m-4 px-4'>
            <h6 className="text-[17px] leading-tight font-medium text-cyan-500 font-barlow mb-3">
                About me
            </h6>
            
            <h3 className={`${playfair.className} text-3xl font-bold leading-tight uppercase tracking-wider text-gray-900 text-bold mt-1`}>
                DYNAMIC & ACCOMPLISHED CERTIFIED PROFESSIONAL WITH 20+ YEARS OF OVER ALL IT EXPERIENCE
            </h3>
            <h5 className="text-lg  leading-snug text-gray-900 px-2 mt-1 font-bold">
                Seeking challenging assignments as SAP BI/BW4HANA Lead / Project Manager with a well-established organization
            </h5>
            
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Column */}
                    <div className="space-y-6">
                        <h3 className="font-playfair text-3xl font-bold leading-tight text-cyan-500">
                            I Do Data for you
                        </h3>

                        <p className="text-lg text-gray-700/80">
                            Collect, Transform & Organize data so you can make timely decisions
                        </p>

                        <blockquote className="italic font-bold text-blue-900 border-l-4 border-blue-500 pl-4 text-xl">
                            Data! Data! Data! .... I Can't make bricks without clay! <br />
                            <span className="text-sm">— William Shakespeare</span>
                        </blockquote>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <p className="text-gray-800 leading-relaxed font-semibold font-serif">
                            With over 15 years of experience in IT and Business Applications across diverse sectors including Trading, Manufacturing, Transportation, Utilities, Real Estate, and Electrical Products, I possess a demonstrated capability to facilitate business transformation and enhance decision-making processes. I achieve this by leveraging SAP BI/BW4HANA/Datasphere tools and technologies to grant access to real-time data and insights.
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-gray-700/80">
                            <li>Over 15+ years of techno-functional expertise in SAP BW/BW4HANA/BOBJ.</li>
                            <li>Possess 4 years of hands-on experience in SAP BW4HANA.</li>
                            <li>Skilled in SAP Datasphere with expertise in analytical modeling, dataflows, replication flows, view design, task chain management, and intelligent lookups.</li>
                            <li>Extensive experience in HANA optimization modeling and conversion of in-memory objects.</li>
                            <li>Demonstrated involvement in four full-lifecycle SAP BW implementations.</li>
                            <li>Effective communication and stakeholder management abilities.</li>
                            <li>SAP BW/BWONHAN/LUMIRA DESIGNER/WEBI certified.</li>
                            <li>Experienced in project management utilizing predictive, Agile, and hybrid methodologies.</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About
