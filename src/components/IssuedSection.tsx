import { BookMarked, Calendar, AlertTriangle, Clock, Bell } from "lucide-react";
import { useState } from "react";

const issuedBooks = [
  { title: "Introduction to Algorithms", author: "Thomas H. Cormen", issuedDate: "2026-02-10", returnDate: "2026-03-12", fine: 0 },
  { title: "Clean Code", author: "Robert C. Martin", issuedDate: "2026-02-01", returnDate: "2026-03-03", fine: 15 },
  { title: "Database System Concepts", author: "Abraham Silberschatz", issuedDate: "2026-02-15", returnDate: "2026-03-17", fine: 0 },
  { title: "Computer Networks", author: "Andrew S. Tanenbaum", issuedDate: "2026-01-20", returnDate: "2026-02-19", fine: 30 },
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

const IssuedSection = () => {
  const [reminders, setReminders] = useState<Record<string, boolean>>({});

  const toggleReminder = (title: string) => {
    setReminders((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="space-y-5 animate-fade-in max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-foreground font-heading">My Issued Books</h2>

      <div className="space-y-3">
        {issuedBooks.map((book) => {
          const daysLeft = getDaysRemaining(book.returnDate);
          const overdue = daysLeft < 0;
          const urgent = daysLeft >= 0 && daysLeft <= 5;
          const reminderOn = reminders[book.title] || false;

          return (
            <div key={book.title} className={`ios-card p-4 flex items-start gap-4 ${overdue ? "border-destructive/30" : ""}`}>
              <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${overdue ? "bg-destructive/10" : "bg-primary/10"}`}>
                <BookMarked className={`w-5 h-5 ${overdue ? "text-destructive" : "text-primary"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-card-foreground">{book.title}</h4>
                <p className="text-[11px] text-muted-foreground">{book.author}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Booked: {formatDate(book.issuedDate)}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Return by: {formatDate(book.returnDate)}
                  </span>
                </div>

                <div className="mt-2">
                  {overdue ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded-sm">
                      <AlertTriangle className="w-3 h-3" /> Overdue by {Math.abs(daysLeft)} days &bull; Fine: ₹{book.fine}
                    </span>
                  ) : (
                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-sm ${urgent ? "text-amber-700 bg-amber-100" : "text-primary bg-primary/10"}`}>
                      <Clock className="w-3 h-3" /> {daysLeft} days remaining
                    </span>
                  )}
                </div>
              </div>

              {/* Reminder only - no return button */}
              <div className="flex flex-col items-end gap-2 shrink-0">
                <button
                  onClick={() => toggleReminder(book.title)}
                  className={`p-1.5 rounded-md transition-colors ${reminderOn ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground hover:text-primary"}`}
                  title={reminderOn ? "Reminder set" : "Set reminder"}
                >
                  <Bell className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IssuedSection;
