import { Book } from "@/data/mockBooks";
import { X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

const BookDetailModal = ({ book, onClose }: BookDetailModalProps) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-md" onClick={onClose} />

      {/* Panel - iOS sheet style */}
      <div className="relative bg-card rounded-t-3xl sm:rounded-3xl shadow-2xl border border-border/30 w-full sm:max-w-md max-h-[85vh] overflow-y-auto animate-fade-in">
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/80 hover:bg-muted transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cover */}
        <div className="h-44 bg-secondary/60 flex items-center justify-center mx-4 mt-3 rounded-2xl">
          <BookOpen className="w-16 h-16 text-muted-foreground/30" />
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-card-foreground">{book.title}</h2>
            <p className="text-sm text-muted-foreground mt-0.5">by {book.author}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Publisher", value: book.publisher },
              { label: "ISBN", value: book.isbn },
              { label: "Category", value: book.category },
              { label: "Price", value: `₹${book.price}` },
            ].map((item) => (
              <div key={item.label} className="bg-muted/50 rounded-xl p-2.5">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</span>
                <p className="text-xs font-medium text-card-foreground mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-xl p-2.5">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Status</span>
            <p className={`text-xs font-semibold mt-0.5 ${book.available ? "text-primary" : "text-destructive"}`}>
              {book.available ? "Available" : "Currently Issued"}
            </p>
          </div>

          <div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Description</span>
            <p className="text-xs text-card-foreground mt-1 leading-relaxed">
              {book.description}
            </p>
          </div>

          <Button className="w-full rounded-2xl h-11 font-medium" disabled={!book.available}>
            {book.available ? "Issue This Book" : "Not Available"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
