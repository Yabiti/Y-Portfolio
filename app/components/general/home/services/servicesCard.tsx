import { ReactNode } from "react";

interface ServiceCardProps {
  name: string;
  icon: ReactNode;
  description: string;
}

export default function ServiceCard({ name, icon, description }: ServiceCardProps) {
  return (
    <div className="group relative bg-[#0b0d13] border border-white/5 p-6 rounded-3xl 
         transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-2 shadow-2xl">
      <div className="absolute inset-0 bg-linear-to-b from-indigo-500/5 to-transparent
           opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />      
      <div className="relative z-10 w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center 
           justify-center mb-6 border border-indigo-500/20 group-hover:bg-indigo-500/20
           transition-colors">
        <div className="text-2xl text-indigo-400">
          {icon}
        </div>
      </div>
      <h3 className="relative z-10 text-white text-lg font-bold mb-3">
        {name}
      </h3>
      <p className="relative z-10 text-gray-400 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}