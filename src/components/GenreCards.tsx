import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import collegeCampus from "@/assets/college-campus.jpg";
import collegeLibrary from "@/assets/college-library.jpg";
import collegeBooks from "@/assets/college-books.jpg";
import deptCse from "@/assets/dept-cse.jpg";
import deptDs from "@/assets/dept-ds.jpg";
import deptIt from "@/assets/dept-it.jpg";
import deptMech from "@/assets/dept-mech.jpg";
import deptEce from "@/assets/dept-ece.jpg";
import deptEee from "@/assets/dept-eee.jpg";
import deptCivil from "@/assets/dept-civil.jpg";
import deptMath from "@/assets/dept-math.jpg";

interface GenreCardsProps {
  onExplore: (category: string) => void;
}

const mainGenres = [
  { id: "Computer Science", label: "CSE", desc: "Data Structures, Algorithms, OS", img: deptCse },
  { id: "Computer Science", label: "Data Science", desc: "ML, Analytics, Big Data", img: deptDs },
  { id: "Computer Science", label: "IT", desc: "Networks, Web, Cloud", img: deptIt },
  { id: "Engineering", label: "Mechanical", desc: "Thermodynamics, Design", img: deptMech },
  { id: "Engineering", label: "ECE", desc: "Circuits, VLSI, Embedded", img: deptEce },
  { id: "Engineering", label: "EEE", desc: "Power Systems, Machines", img: deptEee },
  { id: "Physics", label: "Civil", desc: "Structures, Materials", img: deptCivil },
  { id: "Mathematics", label: "Maths", desc: "Calculus, Linear Algebra", img: deptMath },
];

const moreGenres = [
  { id: "Literature", label: "Humanities", desc: "Literature, History", img: deptCivil },
  { id: "Chemistry", label: "Chemistry", desc: "Organic, Inorganic, Physical", img: deptEce },
  { id: "Physics", label: "Physics", desc: "Mechanics, Optics, Quantum", img: deptMath },
  { id: "Economics", label: "Economics", desc: "Micro, Macro, Finance", img: deptDs },
];

const GenreCards = ({ onExplore }: GenreCardsProps) => {
  const [showMore, setShowMore] = useState(false);

  const GenreCard = ({ genre }: { genre: typeof mainGenres[0] }) => (
    <div
      onClick={() => onExplore(genre.id)}
      className="relative overflow-hidden rounded-sm cursor-pointer group h-40 md:h-48"
    >
      <img src={genre.img} alt={genre.label} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-sm font-bold text-white">{genre.label}</h3>
        <p className="text-[10px] text-white/80 leading-snug mt-0.5">{genre.desc}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {mainGenres.map((genre) => (
          <GenreCard key={genre.label} genre={genre} />
        ))}
      </div>

      {/* More/Less toggle - above photos */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
      >
        {showMore ? "Less" : "More"} {showMore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {showMore && (
        <div className="animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {moreGenres.map((genre) => (
              <GenreCard key={genre.label} genre={genre} />
            ))}
          </div>
        </div>
      )}

      {/* College photos */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-sm overflow-hidden h-32">
          <img src={collegeCampus} alt="RVR JC College Campus" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-sm overflow-hidden h-32">
          <img src={collegeLibrary} alt="RVR JC College" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-sm overflow-hidden h-32">
          <img src={collegeBooks} alt="RVR JC College Event" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default GenreCards;
