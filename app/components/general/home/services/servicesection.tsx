import { LuTerminal, LuLayers, LuMonitorSmartphone, LuPalette } from "react-icons/lu";
import Header from "../../header";
import ServiceCard from "./servicesCard";

export default function ServiceSection() {
  const services = [
    {
      name: "Python",
      icon: <LuTerminal />,
      description: "Full-stack Python Developer | Specialized in Backend Architecture and Web Automation",
    },
    {
      name: "UI/UX Design",
      icon: <LuLayers />,
      description: "Designing intuitive interfaces and seamless user experiences with modern tools.",
    },
    {
      name: "App Development",
      icon: <LuMonitorSmartphone />,
      description: "Building responsive web apps and cross-platform mobile solutions for all devices.",
    },
    {
      name: "Creative Design",
      icon: <LuPalette />,
      description: "Creating unique brand identities and compelling visual designs that stand out.",
    },
  ];

  return (
    <section id="services" className="py-20 flex flex-col items-center w-full px-4">
      <Header title="What I Offer" />

      <div data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mt-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}