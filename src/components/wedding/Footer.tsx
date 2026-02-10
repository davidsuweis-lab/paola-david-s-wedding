import { Heart } from "lucide-react";
const Footer = () => {
  return <footer className="py-12 bg-background border-t border-peach/20">
      <div className="container mx-auto px-4 text-center">
        {/* Names with hearts */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-4 h-4 text-peach fill-peach" />
          <span className="font-serif text-2xl text-foreground">
            Paola & David
          </span>
          <Heart className="w-4 h-4 text-peach fill-peach" />
        </div>

        {/* Date */}
        <p className="text-peach-dark font-serif text-lg mb-6">
          2 Maggio 2026
        </p>

        {/* Thank you message */}
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">Grazie per essere parte del nostro giorno speciale. Non vediamo l'ora di festeggiare con voi!</p>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-peach/40" />
          <div className="w-2 h-2 bg-peach rounded-full" />
          <div className="h-px w-16 bg-peach/40" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">Made with love with AI 💕</p>
      </div>
    </footer>;
};
export default Footer;