import { useState } from "react";
import { Monitor, Database, Cog, Cpu, FlaskConical, BookText, Wifi, Shield, ChevronDown, ChevronUp, Trophy, Palette, Music, Dumbbell } from "lucide-react";
import collegeCampus from "@/assets/college-campus.jpg";
import collegeLibrary from "@/assets/college-library.jpg";
import collegeBooks from "@/assets/college-books.jpg";

interface GenreCardsProps {
  onExplore: (category: string) => void;
}

const mainGenres = [
  { id: "Computer Science", icon: Monitor, label: "CSE", desc: "Data Structures, Algorithms, OS" },
  { id: "Computer Science", icon: Database, label: "Data Science", desc: "ML, Analytics, Big Data" },
  { id: "Computer Science", icon: Wifi, label: "IT", desc: "Networks, Web, Cloud" },
  { id: "Engineering", icon: Cog, label: "Mechanical", desc: "Thermodynamics, Design" },
  { id: "Engineering", icon: Cpu, label: "ECE", desc: "Circuits, VLSI, Embedded" },
  { id: "Engineering", icon: Shield, label: "EEE", desc: "Power Systems, Machines" },
  { id: "Physics", icon: FlaskConical, label: "Civil", desc: "Structures, Materials" },
  { id: "Mathematics", icon: BookText, label: "Maths", desc: "Calculus, Linear Algebra" },
];

const moreGenres = [
  { id: "Literature", icon: BookText, label: "Humanities", desc: "Literature, History" },
  { id: "All", icon: Trophy, label: "Sports", desc: "Fitness, Athletics" },
  { id: "All", icon: Palette, label: "Cultural", desc: "Arts, Cultural Studies" },
  { id: "All", icon: Music, label: "Music", desc: "Theory, Instruments" },
  { id: "All", icon: Dumbbell, label: "Fitness", desc: "Health, Wellness" },
  { id: "Physics", icon: FlaskConical, label: "Sciences", desc: "Physics, Chemistry" },
];

const GenreCards = ({ onExplore }: GenreCardsProps) => {
  const [showMore, setShowMore] = useState(false);

  const GenreCard = ({ genre }: { genre: typeof mainGenres[0] }) => (
    <div className="ios-card-minimal p-3 flex flex-col items-start gap-1.5 card-hover">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
        <genre.icon className="w-4 h-4" />
      </div>
      <div>
        <h3 className="text-xs font-semibold text-card-foreground">{genre.label}</h3>
        <p className="text-[9px] text-muted-foreground leading-snug mt-0.5">{genre.desc}</p>
      </div>
      <button
        onClick={() => onExplore(genre.id)}
        className="mt-auto text-[9px] font-semibold text-primary hover:underline"
      >
        Explore →
      </button>
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {mainGenres.map((genre) => (
          <GenreCard key={genre.label} genre={genre} />
        ))}
      </div>

      {/* More toggle */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
      >
        {showMore ? "Less" : "More"} {showMore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {showMore && (
        <div className="animate-fade-in space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {moreGenres.map((genre) => (
              <GenreCard key={genre.label} genre={genre} />
            ))}
          </div>
        </div>
      )}

      {/* College photos */}
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="rounded-lg overflow-hidden h-28">
          <img src={collegeCampus} alt="College Campus" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden h-28">
          <img src={collegeLibrary} alt="Library" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden h-28">
          <img src={collegeBooks} alt="Books" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default GenreCards;
