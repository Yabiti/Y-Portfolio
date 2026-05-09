"use client";

import Header from "../general/header";
import { DiJavascript, DiPython } from "react-icons/di";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
    {
        name: "Javascript",
        icon: <DiJavascript />,
        skillLevel: 90
    },
    {
        name: "Python",
        icon: <DiPython />,
        skillLevel: 95
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        skillLevel: 80
    },
    {
        name: "React",
        icon: <SiReact />,
        skillLevel: 90
    },
    {
        name: "Typescript",
        icon: <SiTypescript />,
        skillLevel: 90
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        skillLevel: 90
    },
];

export default function Skills() {
    return (
        <section id="Skills" className="py-16">
            <Header title="My Skills" as="h2" />
            <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, index) => {
                    return (
                        <div 
                            key={index}
                            data-aos="flip-right"
                            data-aos-delay={index * 100}
                            className="bg-slate-900 text-center w-40 h-48 rounded-3xl
                            flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
                        >
                            <div className="text-5xl text-gray-300">
                                {skill.icon}
                            </div>
                            <p className="text-2xl font-semibold my-4 text-gray-200">
                                {skill.skillLevel}%
                            </p>
                            <p className="text-indigo-500 font-semibold">{skill.name}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}