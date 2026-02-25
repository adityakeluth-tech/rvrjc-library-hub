import { BookMarked, Calendar, AlertTriangle } from "lucide-react";

const issuedBooks = [
  { title: "Introduction to Algorithms", author: "Thomas H. Cormen", issuedDate: "Feb 10, 2026", dueDate: "Mar 10, 2026", fine: 0 },
  { title: "Clean Code", author: "Robert C. Martin", issuedDate: "Feb 1, 2026", dueDate: "Mar 1, 2026", fine: 15 },
  { title: "Database System Concepts", author: "Abraham Silberschatz", issuedDate: "Feb 15, 2026", dueDate: "Mar 15, 2026", fine: 0 },
  { title: "Computer Networks", author: "Andrew S. Tanenbaum", issuedDate: "Jan 20, 2026", dueDate: "Feb 20, 2026", fine: 30 },
];

const IssuedSection = () => {
  return (
    <div className="space-y-5 animate-fade-in">
      <h2 className="text-xl font-bold text-foreground font-heading">My Issued Books</h2>

      <div className="space-y-3">
        {issuedBooks.map((book) => {
          const overdue = book.fine > 0;
          return (
            <div key={book.title} className={`ios-card p-4 flex items-start gap-4 ${overdue ? "border-destructive/30" : ""}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${overdue ? "bg-destructive/10" : "bg-primary/10"}`}>
                <BookMarked className={`w-5 h-5 ${overdue ? "text-destructive" : "text-primary"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-card-foreground">{book.title}</h4>
                <p className="text-[11px] text-muted-foreground">{book.author}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Issued: {book.issuedDate}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Due: {book.dueDate}
                  </span>
                  {overdue && (
                    <span className="text-[10px] font-semibold text-destructive flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Fine: ₹{book.fine}
                    </span>
                  )}
                </div>
              </div>
              <button className="text-[10px] font-semibold text-primary hover:underline shrink-0 mt-1">
                Return
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IssuedSection;
