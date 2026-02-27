import { BookOpen, Calendar, Sparkles } from "lucide-react";

const upcomingBooks = [
  { title: "Quantum Computing: An Applied Approach", author: "Jack D. Hidary", date: "Mar 2026", tag: "New Arrival" },
  { title: "System Design Interview Vol. 3", author: "Alex Xu", date: "Apr 2026", tag: "Pre-order" },
  { title: "Rust Programming Language 2nd Ed.", author: "Steve Klabnik", date: "Mar 2026", tag: "New Edition" },
  { title: "Advanced Machine Learning with Python", author: "John Hearty", date: "May 2026", tag: "Coming Soon" },
  { title: "Modern Compiler Design", author: "Dick Grune", date: "Apr 2026", tag: "New Arrival" },
  { title: "Biomedical Signal Processing", author: "Willis Tompkins", date: "Jun 2026", tag: "Pre-order" },
];

const notices = [
  "Library timings extended to 10 PM during exams (March 1–15).",
  "New e-resources section added — access IEEE & Springer journals online.",
  "Book donation drive on March 20 — contribute old textbooks!",
];

const UpdatesSection = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-xl font-bold text-foreground font-heading">Updates & Announcements</h2>

      {/* Notices */}
      <div className="ios-card p-4 space-y-3">
        <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" /> Notices
        </h3>
        <ul className="space-y-2">
          {notices.map((n, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {n}
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Books */}
      <div>
        <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2 font-body tracking-wide uppercase">
          <BookOpen className="w-4 h-4 text-primary" /> Upcoming Books
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {upcomingBooks.map((book) => (
            <div key={book.title} className="ios-card p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-card-foreground line-clamp-1">{book.title}</h4>
                <p className="text-[10px] text-muted-foreground">{book.author}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[9px] text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {book.date}
                  </span>
                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-accent text-accent-foreground">
                    {book.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatesSection;
