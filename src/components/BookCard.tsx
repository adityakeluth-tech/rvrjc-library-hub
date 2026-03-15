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
      className="card-hover group text-left ios-card-minimal overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Cover */}
      <div className="relative h-32 bg-secondary/80 flex items-center justify-center overflow-hidden rounded-t-md">
        {book.coverImage ? (
          <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
        ) : (
          <BookOpen className="w-9 h-9 text-muted-foreground/40 group-hover:scale-110 transition-transform duration-300" />
        )}
        <span
          className={`absolute top-1.5 right-1.5 text-[8px] font-semibold px-1.5 py-0.5 rounded-md backdrop-blur-sm ${
            book.available
              ? "bg-primary/20 text-primary"
              : "bg-destructive/20 text-destructive"
          }`}
        >
          {book.available ? "Available" : "Issued"}
        </span>
      </div>

      {/* Info */}
      <div className="p-2.5 space-y-0.5">
        <h3 className="text-[11px] font-semibold leading-tight line-clamp-2 text-card-foreground">
          {book.title}
        </h3>
        <p className="text-[9px] text-muted-foreground line-clamp-1">{book.author}</p>
      </div>
    </button>
  );
};

export default BookCard;
