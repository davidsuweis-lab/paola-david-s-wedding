import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
const RSVP = () => {
  const openGoogleForm = () => {
    window.open("https://forms.gle/vnXKaZvz41pxp86p9", "_blank");
  };
  return <section id="rsvp" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-peach-dark tracking-[0.3em] uppercase text-sm mb-4">
            Ti Aspettiamo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Conferma Presenza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Ti preghiamo di confermare la tua presenza entro il 10 Marzo 2026.</p>
          
          {/* Decorative hearts */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Heart className="w-5 h-5 text-peach-dark fill-peach" />
            <Heart className="w-6 h-6 text-peach-dark fill-peach" />
            <Heart className="w-5 h-5 text-peach-dark fill-peach" />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button onClick={openGoogleForm} className="bg-peach hover:bg-peach-dark text-primary-foreground px-10 py-8 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center justify-center leading-tight h-auto">
              <span>Conferma la tua presenza</span>
              <span>RSVP</span>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default RSVP;