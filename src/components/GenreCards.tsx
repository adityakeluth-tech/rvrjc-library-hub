import { useState } from "react";
import { ChevronDown, ChevronUp, Cpu, Database, Globe, Settings, Radio, Zap, Building2, Calculator, BookOpen, Atom, FlaskConical, TrendingUp } from "lucide-react";

interface GenreCardsProps {
  onExplore: (category: string) => void;
}

const mainGenres = [
  { id: "Computer Science", label: "CSE", desc: "Data Structures, Algorithms, OS", icon: Cpu },
  { id: "Computer Science", label: "Data Science", desc: "ML, Analytics, Big Data", icon: Database },
  { id: "Computer Science", label: "IT", desc: "Networks, Web, Cloud", icon: Globe },
  { id: "Computer Science", label: "AIML", desc: "Neural Networks, NLP, Vision", icon: Cpu },
  { id: "Computer Science", label: "IoT", desc: "Sensors, Embedded, Edge", icon: Radio },
  { id: "Engineering", label: "Mechanical", desc: "Thermodynamics, Design", icon: Settings },
  { id: "Engineering", label: "ECE", desc: "Circuits, VLSI, Embedded", icon: Radio },
  { id: "Engineering", label: "EEE", desc: "Power Systems, Machines", icon: Zap },
  { id: "Physics", label: "Civil", desc: "Structures, Materials", icon: Building2 },
  { id: "Mathematics", label: "Maths", desc: "Calculus, Linear Algebra", icon: Calculator },
];

const moreGenres = [
  { id: "Literature", label: "Humanities", desc: "Literature, History", icon: BookOpen },
  { id: "Chemistry", label: "Chemistry", desc: "Organic, Inorganic, Physical", icon: FlaskConical },
  { id: "Physics", label: "Physics", desc: "Mechanics, Optics, Quantum", icon: Atom },
  { id: "Economics", label: "Economics", desc: "Micro, Macro, Finance", icon: TrendingUp },
];

const GenreCards = ({ onExplore }: GenreCardsProps) => {
  const [showMore, setShowMore] = useState(false);

  const GenreCard = ({ genre }: { genre: typeof mainGenres[0] }) => (
    <div
      onClick={() => onExplore(genre.id)}
      className="ios-card p-5 cursor-pointer group hover:shadow-md transition-all duration-200 flex flex-col items-start gap-3 h-36"
    >
      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <genre.icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-card-foreground">{genre.label}</h3>
        <p className="text-[10px] text-muted-foreground leading-snug mt-0.5">{genre.desc}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {mainGenres.map((genre) => (
          <GenreCard key={genre.label} genre={genre} />
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
      >
        {showMore ? "Less" : "More"} {showMore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {showMore && (
        <div className="animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {moreGenres.map((genre) => (
              <GenreCard key={genre.label} genre={genre} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreCards;
