import { BookMarked, Calendar, AlertTriangle, Clock, Search, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const initialIssuedBooks = [
  { student: "Y23CD001", title: "Introduction to Algorithms", author: "Thomas H. Cormen", issuedDate: "2026-02-10", returnDate: "2026-03-12", returned: false },
  { student: "Y23CS012", title: "Clean Code", author: "Robert C. Martin", issuedDate: "2026-02-01", returnDate: "2026-03-03", returned: false },
  { student: "Y23AI005", title: "Deep Learning", author: "Ian Goodfellow", issuedDate: "2026-02-15", returnDate: "2026-03-17", returned: false },
  { student: "Y23IO003", title: "Computer Networks", author: "Andrew S. Tanenbaum", issuedDate: "2026-01-20", returnDate: "2026-02-19", returned: true },
  { student: "Y23CD020", title: "Database System Concepts", author: "Abraham Silberschatz", issuedDate: "2026-02-18", returnDate: "2026-03-20", returned: false },
  { student: "Y23CS045", title: "Operating Systems", author: "Abraham Silberschatz", issuedDate: "2026-02-05", returnDate: "2026-03-07", returned: false },
];

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
};

const getDaysRemaining = (returnDate: string) => {
  const now = new Date();
  const ret = new Date(returnDate);
  return Math.ceil((ret.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
};

const AdminManageIssued = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(initialIssuedBooks);

  const handleReturn = (index: number) => {
    setBooks((prev) => prev.map((b, i) => i === index ? { ...b, returned: true } : b));
  };

  const filtered = books.filter(
    (b) => b.student.toLowerCase().includes(search.toLowerCase()) || b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5 animate-fade-in max-w-3xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground font-heading">All Issued Books</h2>
        <div className="relative w-48">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            placeholder="Search student or book..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 h-8 rounded-sm bg-muted/60 border-0 text-xs"
          />
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((book, i) => {
          const originalIndex = books.indexOf(book);
          const daysLeft = getDaysRemaining(book.returnDate);
          const overdue = !book.returned && daysLeft < 0;
          const urgent = !book.returned && daysLeft >= 0 && daysLeft <= 5;

          return (
            <div key={i} className={`ios-card p-4 flex items-start gap-4 ${overdue ? "border-destructive/30" : ""}`}>
              <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${overdue ? "bg-destructive/10" : book.returned ? "bg-muted" : "bg-primary/10"}`}>
                <BookMarked className={`w-5 h-5 ${overdue ? "text-destructive" : book.returned ? "text-muted-foreground" : "text-primary"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-card-foreground">{book.title}</h4>
                  {book.returned && (
                    <span className="text-[9px] font-semibold px-2 py-0.5 rounded-sm bg-muted text-muted-foreground">Returned</span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground">{book.author}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-sm">{book.student}</span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {formatDate(book.issuedDate)} → {formatDate(book.returnDate)}
                  </span>
                </div>
                {!book.returned && (
                  <div className="mt-2">
                    {overdue ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded-sm">
                        <AlertTriangle className="w-3 h-3" /> Overdue by {Math.abs(daysLeft)} days
                      </span>
                    ) : (
                      <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-sm ${urgent ? "text-amber-700 bg-amber-100" : "text-primary bg-primary/10"}`}>
                        <Clock className="w-3 h-3" /> {daysLeft} days remaining
                      </span>
                    )}
                  </div>
                )}
              </div>
              {/* Admin return action */}
              {!book.returned && (
                <button
                  onClick={() => handleReturn(originalIndex)}
                  className="shrink-0 flex items-center gap-1 text-[10px] font-semibold text-primary hover:underline"
                >
                  <RotateCcw className="w-3 h-3" /> Return
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminManageIssued;
