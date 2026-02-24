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
      className="card-hover group text-left ios-card overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Cover */}
      <div className="relative h-36 bg-secondary/80 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <BookOpen className="w-10 h-10 text-muted-foreground/40 group-hover:scale-110 transition-transform duration-300" />
        {/* Availability badge */}
        <span
          className={`absolute top-2 right-2 text-[9px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm ${
            book.available
              ? "bg-primary/20 text-primary"
              : "bg-destructive/20 text-destructive"
          }`}
        >
          {book.available ? "Available" : "Issued"}
        </span>
      </div>

      {/* Info */}
      <div className="p-3 space-y-1">
        <h3 className="text-xs font-semibold leading-tight line-clamp-2 text-card-foreground">
          {book.title}
        </h3>
        <p className="text-[10px] text-muted-foreground line-clamp-1">{book.author}</p>
      </div>
    </button>
  );
};

export default BookCard;
