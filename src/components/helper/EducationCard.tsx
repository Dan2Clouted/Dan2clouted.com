import { FaGraduationCap } from "react-icons/fa6";

interface Props {
  year: string;
  title: string;
  institution: string;
}

const EducationCard: React.FC<Props> = ({ year, title, institution }) => {
  return (
    <div className="group relative p-[2px] rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 hover:from-cyan-500/60 hover:to-purple-500/60 transition-all duration-300">
      <div className="bg-background rounded-2xl p-6 flex items-center gap-4 backdrop-blur-xl border border-white/10">
        <div className="bg-cyan-600/20 p-3 rounded-xl transition-all duration-300 group-hover:scale-110">
          <FaGraduationCap className="text-cyan-400 text-xl" />
        </div>
        <div>
          <p className="text-sm text-cyan-400 mb-1 font-medium">{year}</p>
          <h3 className="text-lg font-bold text-white leading-tight">
            {title}
          </h3>
          <p className="text-base text-muted-foreground mt-1">{institution}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
