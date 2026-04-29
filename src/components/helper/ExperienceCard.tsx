import { FaBriefcase } from "react-icons/fa6";

interface Props {
  title: string;
  company: string;
  date: string;
}

const ExperienceCard: React.FC<Props> = ({ title, company, date }) => {
  return (
    <div className="group rounded-xl border-[1.5px] border-[#4c1d95] bg-[#0f172a]/80 backdrop-blur-xl p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(93,163,255,0.4)]">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="bg-secondary/20 p-3 rounded-md">
          <FaBriefcase className="text-secondary text-xl" />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm text-cyan-400 font-medium mb-2">{date}</p>
          <h3 className="text-white text-base md:text-lg leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
