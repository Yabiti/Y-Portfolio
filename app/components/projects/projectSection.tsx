import Header from "../general/header";
import ProjectCard from "./projectCard";


export default function ProjectSection() {
    return(
        <section id="projects" >
            <Header title="My Recent Projects" as="h2" />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10
            overflow-hidden">
                <div data-aos="fade-right">
                <ProjectCard
                    title="E-Commerce" 
                    imagePath="/images/yab1.png"
                    description="A lightweight, high-performance e-commerce platform 
                    that focuses on speed and user delight through subtle animations 
                    and a zero-refresh checkout flow"/>
                </div>
                <div data-aos="fade-left">
                <ProjectCard 
                    title="Movie-Box"
                    imagePath="/images/yab2.png"
                    description="A lightweight, high-performance e-commerce platform 
                    that focuses on speed and user delight through subtle animations 
                    and a zero-refresh checkout flow"/>
                </div>
                <div data-aos="fade-right">
                <ProjectCard 
                    title="Movie-Box" 
                    imagePath="/images/yab2.png"
                    description="A lightweight, high-performance e-commerce platform 
                    that focuses on speed and user delight through subtle animations 
                    and a zero-refresh checkout flow"/>
                </div>
                <div data-aos="fade-left">
                <ProjectCard 
                    title="E-Commerce" 
                    imagePath="/images/yab1.png"
                    description="A lightweight, high-performance e-commerce platform 
                    that focuses on speed and user delight through subtle animations 
                    and a zero-refresh checkout flow"/>
                </div>
            </div>
        </section>
    )
}