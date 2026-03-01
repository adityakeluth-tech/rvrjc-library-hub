import { useState } from "react";
import { ChevronDown, ChevronUp, Cpu, Database, Globe, Settings, Radio, Zap, Building2, Calculator, BookOpen, Atom, FlaskConical, TrendingUp } from "lucide-react";

interface GenreCardsProps {
  onExplore: (category: string) => void;
}

const mainGenres = [
  { id: "Computer Science", label: "CSE", desc: "Data Structures, Algorithms, OS", icon: Cpu, accent: "from-blue-500/20 to-cyan-500/20" },
  { id: "Computer Science", label: "Data Science", desc: "ML, Analytics, Big Data", icon: Database, accent: "from-violet-500/20 to-purple-500/20" },
  { id: "Computer Science", label: "IT", desc: "Networks, Web, Cloud", icon: Globe, accent: "from-emerald-500/20 to-teal-500/20" },
  { id: "Computer Science", label: "AIML", desc: "Neural Networks, NLP, Vision", icon: Cpu, accent: "from-rose-500/20 to-pink-500/20" },
  { id: "Computer Science", label: "IoT", desc: "Sensors, Embedded, Edge", icon: Radio, accent: "from-amber-500/20 to-orange-500/20" },
  { id: "Engineering", label: "Mechanical", desc: "Thermodynamics, Design", icon: Settings, accent: "from-slate-500/20 to-zinc-500/20" },
  { id: "Engineering", label: "ECE", desc: "Circuits, VLSI, Embedded", icon: Radio, accent: "from-indigo-500/20 to-blue-500/20" },
  { id: "Engineering", label: "EEE", desc: "Power Systems, Machines", icon: Zap, accent: "from-yellow-500/20 to-amber-500/20" },
  { id: "Physics", label: "Civil", desc: "Structures, Materials", icon: Building2, accent: "from-stone-500/20 to-neutral-500/20" },
  { id: "Mathematics", label: "Maths", desc: "Calculus, Linear Algebra", icon: Calculator, accent: "from-sky-500/20 to-blue-500/20" },
];

const moreGenres = [
  { id: "Literature", label: "Humanities", desc: "Literature, History", icon: BookOpen, accent: "from-fuchsia-500/20 to-pink-500/20" },
  { id: "Chemistry", label: "Chemistry", desc: "Organic, Inorganic, Physical", icon: FlaskConical, accent: "from-lime-500/20 to-green-500/20" },
  { id: "Physics", label: "Physics", desc: "Mechanics, Optics, Quantum", icon: Atom, accent: "from-cyan-500/20 to-teal-500/20" },
  { id: "Economics", label: "Economics", desc: "Micro, Macro, Finance", icon: TrendingUp, accent: "from-orange-500/20 to-red-500/20" },
];

const GenreCards = ({ onExplore }: GenreCardsProps) => {
  const [showMore, setShowMore] = useState(false);

  const GenreCard = ({ genre }: { genre: typeof mainGenres[0] }) => (
    <div
      onClick={() => onExplore(genre.id)}
      className={`group cursor-pointer rounded-xl border border-border bg-gradient-to-br ${genre.accent} backdrop-blur-sm p-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-primary/30`}
    >
      <div className="w-12 h-12 rounded-lg bg-card/80 shadow-sm flex items-center justify-center mb-3 group-hover:shadow-md transition-shadow">
        <genre.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-sm font-bold text-card-foreground">{genre.label}</h3>
      <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">{genre.desc}</p>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
