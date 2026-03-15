import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, BookOpen, CheckCircle2, Trash2 } from "lucide-react";

interface UpcomingBook {
  title: string;
  author: string;
  category: string;
  expectedDate: string;
}

const AdminUploadBooks = () => {
  const [books, setBooks] = useState<UpcomingBook[]>([
    { title: "Advanced Machine Learning", author: "Dr. A. Sharma", category: "Computer Science", expectedDate: "2026-04-15" },
    { title: "Digital Signal Processing", author: "Prof. B. Rao", category: "ECE", expectedDate: "2026-04-20" },
    { title: "Structural Analysis Vol. 3", author: "Dr. C. Reddy", category: "Civil", expectedDate: "2026-05-01" },
  ]);
  const [newBook, setNewBook] = useState<UpcomingBook>({ title: "", author: "", category: "", expectedDate: "" });
  const [saved, setSaved] = useState(false);

  const addBook = () => {
    if (newBook.title.trim() && newBook.author.trim()) {
      setBooks([newBook, ...books]);
      setNewBook({ title: "", author: "", category: "", expectedDate: "" });
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    }
  };

  const removeBook = (i: number) => setBooks(books.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-5 animate-fade-in max-w-3xl mx-auto w-full">
      <h2 className="text-xl font-bold text-foreground font-heading">Upload Upcoming Books</h2>

      <div className="ios-card p-4 space-y-3">
        <h3 className="text-sm font-semibold text-card-foreground flex items-center gap-2">
          <Upload className="w-4 h-4 text-primary" /> Add Upcoming Book
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <Input value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} placeholder="Book title" className="h-9 rounded-sm text-sm" />
          <Input value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} placeholder="Author" className="h-9 rounded-sm text-sm" />
          <Input value={newBook.category} onChange={(e) => setNewBook({ ...newBook, category: e.target.value })} placeholder="Category / Department" className="h-9 rounded-sm text-sm" />
          <Input type="date" value={newBook.expectedDate} onChange={(e) => setNewBook({ ...newBook, expectedDate: e.target.value })} className="h-9 rounded-sm text-sm" />
        </div>
        <Button onClick={addBook} size="sm" className="rounded-sm gap-1 h-9">
          <Upload className="w-3.5 h-3.5" /> Upload
        </Button>
        {saved && (
          <p className="text-xs text-primary flex items-center gap-1 animate-fade-in">
            <CheckCircle2 className="w-3.5 h-3.5" /> Book added!
          </p>
        )}
      </div>

      <div className="ios-card p-4 space-y-3">
        <h3 className="text-sm font-semibold text-card-foreground">Upcoming Books ({books.length})</h3>
        {books.length === 0 ? (
          <p className="text-xs text-muted-foreground py-4 text-center">No upcoming books listed.</p>
        ) : (
          <div className="space-y-2">
            {books.map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-sm">
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-card-foreground truncate">{b.title}</p>
                  <p className="text-[11px] text-muted-foreground">{b.author} · {b.category} {b.expectedDate && `· Expected: ${b.expectedDate}`}</p>
                </div>
                <button onClick={() => removeBook(i)} className="p-1 rounded-sm hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors shrink-0">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUploadBooks;
