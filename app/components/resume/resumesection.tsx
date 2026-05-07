import { RiNextjsFill } from "react-icons/ri";
import Header from "../general/header";
import ResumeCard from "./reumeCard";
import { FaGraduationCap } from "react-icons/fa";
import { LuPackage, LuServer } from "react-icons/lu";

export default function ResumeSection() {
  return (
    <section id="resume" className="bg-[#0f0f1b] pt-0 pb-24 px-8 sm:px-16">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        <div data-aos="zoom-out" className="flex-1 w-full">
          <Header title="My Education" as="h2"></Header>
          <div  className="flex flex-col space-y-8 mt-8">
            <ResumeCard
              role="Computer Science Degree"
              icon={FaGraduationCap}
              date="jan 2020 - April 2024"
              description="Bachelor of Science in Computer Science | University Name | Focused on algorithms, data structures, software engineering principles, and web technologies."
            />
            <ResumeCard
              role="Computer Science Degree"
              icon={FaGraduationCap}
              date="jan 2020 - April 2024"
              description="Bachelor of Science in Computer Science | University Name | Focused on algorithms, data structures, software engineering principles, and web technologies."
            />
             <ResumeCard
              role="Computer Science Degree"
              icon={FaGraduationCap}
              date="jan 2020 - April 2024"
              description="Bachelor of Science in Computer Science | University Name | Focused on algorithms, data structures, software engineering principles, and web technologies."
            />
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="flex-1 w-full">
          <Header title="My Work Experience" as="h2"></Header>  
          <div className="flex flex-col space-y-8 mt-8">
            <ResumeCard
              role="Front End Developer"
              icon={RiNextjsFill}
              description="Bachelor of Science in Computer Science | University Name | Focused on algorithms, data structures, software engineering principles, and web technologies."
            />
            <ResumeCard
              role="Back End Developer"
              icon={LuServer}
              description="Bachelor of Science in Computer Science | University Name | Focused on algorithms, data structures, software engineering principles, and web technologies."
            />
            <ResumeCard
              role="Full Stack Developer"
              icon={LuPackage}
              description="Bachelor of Science in Computer Science | University Name | Focused on algorithms, data structures, software engineering principles, and web technologies."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
