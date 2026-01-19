import { Heart } from "lucide-react";

const RSVP = () => {
  return (
    <section id="rsvp" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-peach-dark tracking-[0.3em] uppercase text-sm mb-4">
            Ti Aspettiamo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Conferma Presenza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            Ti preghiamo di confermare la tua presenza entro il 15 Marzo 2026.
          </p>
          <div className="flex items-center justify-center gap-2 text-peach-dark">
            <Heart className="w-4 h-4 fill-peach" />
            <span className="font-serif">Paola & David</span>
            <Heart className="w-4 h-4 fill-peach" />
          </div>
        </div>

        {/* Google Form Embed */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card p-4 md:p-6 rounded-2xl shadow-sm border border-peach/20">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfQbXz2xK0-7jKYzVJLp8XaFWJx8RdLgPZBEZqM_PfUl0xq5w/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
              title="Modulo RSVP Matrimonio"
            >
              Caricamento…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
