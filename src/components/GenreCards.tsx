import { Monitor, Database, Cog, Trophy, Palette, Cpu, FlaskConical, BookText } from "lucide-react";

interface GenreCardsProps {
  onExplore: (category: string) => void;
}

const genres = [
  { id: "Computer Science", icon: Monitor, label: "CSE", desc: "Data Structures, Algorithms, OS & more", color: "bg-primary/10 text-primary" },
  { id: "Mathematics", icon: Database, label: "Data Science", desc: "Statistics, ML, Analytics & Big Data", color: "bg-accent/30 text-accent-foreground" },
  { id: "Engineering", icon: Cog, label: "Mechanical", desc: "Thermodynamics, Fluid Mechanics & Design", color: "bg-secondary text-secondary-foreground" },
  { id: "Physics", icon: FlaskConical, label: "Sciences", desc: "Physics, Chemistry & Applied Sciences", color: "bg-primary/10 text-primary" },
  { id: "Literature", icon: BookText, label: "Humanities", desc: "Literature, History & Social Sciences", color: "bg-accent/30 text-accent-foreground" },
  { id: "All", icon: Trophy, label: "Sports", desc: "Fitness, Athletics & Sports Science", color: "bg-secondary text-secondary-foreground" },
  { id: "All", icon: Palette, label: "Cultural", desc: "Arts, Music & Cultural Studies", color: "bg-primary/10 text-primary" },
  { id: "All", icon: Cpu, label: "Electronics", desc: "Circuits, VLSI & Embedded Systems", color: "bg-accent/30 text-accent-foreground" },
];

const GenreCards = ({ onExplore }: GenreCardsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {genres.map((genre) => (
        <div key={genre.label} className="ios-card p-4 flex flex-col items-start gap-2 card-hover">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${genre.color}`}>
            <genre.icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-card-foreground">{genre.label}</h3>
            <p className="text-[10px] text-muted-foreground leading-snug mt-0.5">{genre.desc}</p>
          </div>
          <button
            onClick={() => onExplore(genre.id)}
            className="mt-auto text-[10px] font-semibold text-primary hover:underline"
          >
            Explore →
          </button>
        </div>
      ))}
    </div>
  );
};

export default GenreCards;
