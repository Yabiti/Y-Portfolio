import { IconType } from "react-icons";

interface ResumeCardProps {
  role: string;
  icon: IconType;
  date?: string;
  description: string;
}

export default function ResumeCard({
  role,
  icon: Icon,
  date,
  description,
}: ResumeCardProps) {
  return (
    <div className="flex items-start space-x-5 bg-[#1e1e2f] p-8 rounded-xl w-full border border-transparent">
      <div className="w-12 h-12 bg-[#2a2a40] rounded-full grid place-items-center shadow-md">
        <Icon className="w-5 h-5 text-[#6366f1]" />
      </div>

      <div className="flex-1">
        <div className="h-7 mb-3">
          {date ? (
            <p className="px-4 py-1 rounded-full bg-[#2a2a40] text-gray-300 w-fit text-xs font-semibold">
              {date}
            </p>
          ) : (
            <div className="invisible" />
          )}
        </div>

        <h3 className="text-white text-xl font-bold tracking-wide">
          {role}
        </h3>

        <p className="text-sm mt-4 text-gray-400 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
