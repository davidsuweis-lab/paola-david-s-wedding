import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-05-02T11:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const openGoogleForm = () => {
    window.open("https://forms.gle/vnXKaZvz41pxp86p9", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-peach-light via-background to-background">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-peach/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-peach/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gold-light/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 text-center z-10">
        {/* Small decorative text */}
        <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Save the Date
        </p>

        {/* Names */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Paola
        </h1>
        
        <div className="flex items-center justify-center gap-4 my-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="h-px w-16 md:w-24 bg-peach-dark/40" />
          <Heart className="w-6 h-6 text-peach-dark fill-peach" />
          <div className="h-px w-16 md:w-24 bg-peach-dark/40" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          David
        </h1>

        {/* Date */}
        <p className="font-serif text-2xl md:text-3xl text-peach-dark mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          2 Maggio 2026
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {[
            { value: timeLeft.days, label: "Giorni" },
            { value: timeLeft.hours, label: "Ore" },
            { value: timeLeft.minutes, label: "Minuti" },
            { value: timeLeft.seconds, label: "Secondi" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-peach/30 rounded-lg flex items-center justify-center shadow-sm">
                <span className="font-serif text-2xl md:text-3xl text-foreground">
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={openGoogleForm}
          className="inline-flex items-center gap-2 bg-peach hover:bg-peach-dark text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in font-medium"
          style={{ animationDelay: "0.7s" }}
        >
          Conferma la tua presenza
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-peach-dark/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-peach-dark/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
