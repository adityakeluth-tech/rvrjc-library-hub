import { createContext, useContext, useState, ReactNode } from "react";
import { Book } from "@/data/mockBooks";

export interface IssuedBook {
  book: Book;
  issuedDate: string;
  returnDate: string;
}

interface IssuedBooksContextType {
  issuedBooks: IssuedBook[];
  issueBook: (book: Book) => void;
}

const IssuedBooksContext = createContext<IssuedBooksContextType>({
  issuedBooks: [],
  issueBook: () => {},
});

export const useIssuedBooks = () => useContext(IssuedBooksContext);

export const IssuedBooksProvider = ({ children }: { children: ReactNode }) => {
  const [issuedBooks, setIssuedBooks] = useState<IssuedBook[]>([]);

  const issueBook = (book: Book) => {
    const now = new Date();
    const returnDate = new Date(now);
    returnDate.setDate(returnDate.getDate() + 30);

    setIssuedBooks((prev) => [
      ...prev,
      {
        book,
        issuedDate: now.toISOString().split("T")[0],
        returnDate: returnDate.toISOString().split("T")[0],
      },
    ]);
  };

  return (
    <IssuedBooksContext.Provider value={{ issuedBooks, issueBook }}>
      {children}
    </IssuedBooksContext.Provider>
  );
};
