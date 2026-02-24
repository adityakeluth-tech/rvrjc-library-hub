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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative bg-card rounded-xl shadow-2xl border max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover */}
        <div
          className={`h-52 bg-gradient-to-br ${book.coverColor} flex items-center justify-center rounded-t-xl`}
        >
          <BookOpen className="w-20 h-20 text-primary-foreground/50" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-card-foreground">{book.title}</h2>
            <p className="text-sm text-muted-foreground font-body mt-1">by {book.author}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm font-body">
            <div>
              <span className="text-muted-foreground text-xs">Publisher</span>
              <p className="font-medium text-card-foreground">{book.publisher}</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs">ISBN</span>
              <p className="font-medium text-card-foreground">{book.isbn}</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs">Category</span>
              <p className="font-medium text-card-foreground">{book.category}</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs">Price</span>
              <p className="font-medium text-card-foreground">₹{book.price}</p>
            </div>
          </div>

          <div>
            <span className="text-muted-foreground text-xs font-body">Status</span>
            <p
              className={`text-sm font-semibold font-body ${
                book.available ? "text-accent" : "text-destructive"
              }`}
            >
              {book.available ? "Available" : "Currently Issued"}
            </p>
          </div>

          <div>
            <span className="text-muted-foreground text-xs font-body">Description</span>
            <p className="text-sm text-card-foreground font-body mt-1 leading-relaxed">
              {book.description}
            </p>
          </div>

          <Button className="w-full font-body" disabled={!book.available}>
            {book.available ? "Issue This Book" : "Not Available"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
