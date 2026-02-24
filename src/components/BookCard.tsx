import { Book } from "@/data/mockBooks";
import { BookOpen } from "lucide-react";

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
  index: number;
}

const BookCard = ({ book, onClick, index }: BookCardProps) => {
  return (
    <button
      onClick={() => onClick(book)}
      className="card-hover group text-left rounded-lg border bg-card overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Cover */}
      <div
        className={`relative h-44 bg-gradient-to-br ${book.coverColor} flex items-center justify-center overflow-hidden`}
      >
        <BookOpen className="w-12 h-12 text-primary-foreground/60 group-hover:scale-110 transition-transform duration-300" />
        {/* Availability badge */}
        <span
          className={`absolute top-2 right-2 text-[10px] font-semibold font-body px-2 py-0.5 rounded-full ${
            book.available
              ? "bg-accent text-accent-foreground"
              : "bg-destructive text-destructive-foreground"
          }`}
        >
          {book.available ? "Available" : "Issued"}
        </span>
      </div>

      {/* Info */}
      <div className="p-3 space-y-1">
        <h3 className="text-sm font-semibold font-body leading-tight line-clamp-2 text-card-foreground">
          {book.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1">{book.author}</p>
        <span className="inline-block text-[10px] font-medium font-body px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
          {book.category}
        </span>
      </div>
    </button>
  );
};

export default BookCard;
