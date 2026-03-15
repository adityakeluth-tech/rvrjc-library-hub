import { useState } from "react";
import { Book } from "@/data/mockBooks";
import { X, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIssuedBooks } from "@/context/IssuedBooksContext";

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

const BookDetailModal = ({ book, onClose }: BookDetailModalProps) => {
  const [issueConfirmed, setIssueConfirmed] = useState(false);

  if (!book) return null;

  const handleIssueBook = () => {
    setIssueConfirmed(true);
    setTimeout(() => {
      setIssueConfirmed(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 flex" style={{ maxWidth: "480px", width: "100%" }}>
      <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm" onClick={onClose} />

      <div className="relative ml-auto bg-card border-l border-border shadow-2xl w-full max-w-[480px] overflow-y-auto animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-muted/80 hover:bg-muted transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cover */}
        <div className="h-40 bg-secondary/60 flex items-center justify-center">
          {book.coverImage ? (
            <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
          ) : (
            <BookOpen className="w-14 h-14 text-muted-foreground/30" />
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h2 className="text-base font-bold text-card-foreground">{book.title}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">by {book.author}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Publisher", value: book.publisher },
              { label: "ISBN", value: book.isbn },
              { label: "Category", value: book.category },
              { label: "Price", value: `₹${book.price}` },
            ].map((item) => (
              <div key={item.label} className="bg-muted/50 rounded-md p-2">
                <span className="text-[9px] text-muted-foreground uppercase tracking-wider">{item.label}</span>
                <p className="text-[11px] font-medium text-card-foreground mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-md p-2">
            <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Status</span>
            <p className={`text-xs font-semibold mt-0.5 ${book.available ? "text-primary" : "text-destructive"}`}>
              {book.available ? "Available" : "Currently Issued"}
            </p>
          </div>

          <div>
            <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Description</span>
            <p className="text-[11px] text-card-foreground mt-1 leading-relaxed">{book.description}</p>
          </div>

          {/* Issue Book Section */}
          {book.available && (
            <div className="border-t border-border pt-3 space-y-2">
              {issueConfirmed ? (
                <div className="flex flex-col items-center py-6 gap-2 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                  <p className="text-sm font-bold text-primary">Book Issued!</p>
                  <p className="text-[10px] text-muted-foreground">Return within 30 days to avoid fines.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="bg-muted/50 rounded-md p-3">
                    <p className="text-[11px] text-muted-foreground">
                      This book will be issued for <strong>30 days</strong>. Please return it on time to avoid fines.
                    </p>
                  </div>
                  <Button onClick={handleIssueBook} className="w-full rounded-md h-9 text-xs">
                    Issue Book
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
