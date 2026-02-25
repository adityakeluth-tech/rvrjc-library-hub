import { useState } from "react";
import { Book } from "@/data/mockBooks";
import { X, BookOpen, CreditCard, Smartphone, Banknote, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

type PaymentMethod = "card" | "upi" | "cash" | null;

const BookDetailModal = ({ book, onClose }: BookDetailModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [upiId, setUpiId] = useState("");

  if (!book) return null;

  const handleConfirmPayment = () => {
    setPaymentConfirmed(true);
    setTimeout(() => {
      setPaymentConfirmed(false);
      setPaymentMethod(null);
      setCardNumber("");
      setUpiId("");
      onClose();
    }, 2000);
  };

  const resetPayment = () => {
    setPaymentMethod(null);
    setPaymentConfirmed(false);
    setCardNumber("");
    setUpiId("");
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 flex" style={{ maxWidth: "480px", width: "100%" }}>
      {/* Overlay - only covers the left side */}
      <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => { resetPayment(); onClose(); }} />

      {/* Side panel */}
      <div className="relative ml-auto bg-card border-l border-border shadow-2xl w-full max-w-[480px] overflow-y-auto animate-fade-in">
        {/* Close */}
        <button
          onClick={() => { resetPayment(); onClose(); }}
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

          {/* Payment Section */}
          {book.available && (
            <div className="border-t border-border pt-3 space-y-2">
              <h3 className="text-xs font-bold text-card-foreground">Buy / Issue Book</h3>

              {paymentConfirmed ? (
                <div className="flex flex-col items-center py-6 gap-2 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                  <p className="text-sm font-bold text-primary">Payment Confirmed!</p>
                  <p className="text-[10px] text-muted-foreground">Your book has been issued successfully.</p>
                </div>
              ) : (
                <>
                  {/* Payment method selection */}
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setPaymentMethod("card")}
                      className={`flex flex-col items-center gap-1 p-2.5 rounded-md border text-[10px] font-medium transition-all ${
                        paymentMethod === "card"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      Card
                    </button>
                    <button
                      onClick={() => setPaymentMethod("upi")}
                      className={`flex flex-col items-center gap-1 p-2.5 rounded-md border text-[10px] font-medium transition-all ${
                        paymentMethod === "upi"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      UPI
                    </button>
                    <button
                      onClick={() => setPaymentMethod("cash")}
                      className={`flex flex-col items-center gap-1 p-2.5 rounded-md border text-[10px] font-medium transition-all ${
                        paymentMethod === "cash"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      <Banknote className="w-4 h-4" />
                      Cash
                    </button>
                  </div>

                  {/* Payment form */}
                  {paymentMethod === "card" && (
                    <div className="space-y-2 animate-fade-in">
                      <Input
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="h-9 text-xs rounded-md"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="MM/YY" className="h-9 text-xs rounded-md" />
                        <Input placeholder="CVV" className="h-9 text-xs rounded-md" />
                      </div>
                      <Button onClick={handleConfirmPayment} className="w-full rounded-md h-9 text-xs">
                        Pay ₹{book.price}
                      </Button>
                    </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="space-y-2 animate-fade-in">
                      <Input
                        placeholder="Enter UPI ID (e.g., name@upi)"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="h-9 text-xs rounded-md"
                      />
                      <Button onClick={handleConfirmPayment} className="w-full rounded-md h-9 text-xs">
                        Pay ₹{book.price} via UPI
                      </Button>
                    </div>
                  )}

                  {paymentMethod === "cash" && (
                    <div className="space-y-2 animate-fade-in">
                      <div className="bg-accent/30 rounded-md p-3">
                        <p className="text-[11px] text-accent-foreground leading-relaxed">
                          Visit the <strong>Central Library counter</strong> to pay ₹{book.price} in cash. Show this screen to the librarian for verification.
                        </p>
                      </div>
                      <Button onClick={handleConfirmPayment} className="w-full rounded-md h-9 text-xs" variant="secondary">
                        Confirm Cash Payment
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
