import GiftSection from "@/components/wedding/GiftSection";
import { Heart } from "lucide-react";

const ListaNozze = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Simple Header */}
      <header className="py-8 text-center border-b border-peach/20">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-peach-dark fill-peach-dark" />
          <h1 className="font-serif text-2xl md:text-3xl text-foreground">
            Paola & David
          </h1>
          <Heart className="w-5 h-5 text-peach-dark fill-peach-dark" />
        </div>
        <p className="text-muted-foreground text-sm">2 Maggio 2026</p>
      </header>

      {/* Gift Section */}
      <main className="flex-1">
        <GiftSection />
      </main>

      {/* Simple Footer */}
      <footer className="py-6 text-center border-t border-peach/20">
        <p className="text-sm text-muted-foreground font-serif italic">
          Grazie di cuore per il vostro pensiero ❤️
        </p>
      </footer>
    </div>
  );
};

export default ListaNozze;
