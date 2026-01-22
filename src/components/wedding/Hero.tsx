import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const weddingDate = new Date("2026-05-02T11:00:00");
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / (1000 * 60) % 60),
          seconds: Math.floor(difference / 1000 % 60)
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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

      <div className="container mx-auto px-4 text-center z-10">
        {/* Names */}
        <h1 className="font-serif text-6xl md:text-8xl font-light text-foreground mb-4 animate-fade-in lg:text-8xl">
          Paola
        </h1>
        
        <div className="flex items-center justify-center gap-4 my-4 animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <div className="h-px w-16 md:w-24 bg-peach-dark/40" />
          <Heart className="w-6 h-6 text-peach-dark fill-peach" />
          <div className="h-px w-16 md:w-24 bg-peach-dark/40" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl font-light text-foreground mb-6 animate-fade-in lg:text-8xl" style={{
        animationDelay: "0.4s"
      }}>
          David
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground tracking-[0.2em] uppercase text-lg md:text-xl mb-4 animate-fade-in" style={{
        animationDelay: "0.5s"
      }}>
          Stiamo per sposarci
        </p>

        {/* Date */}
        <p className="font-serif text-2xl md:text-3xl text-peach-dark mb-12 animate-fade-in" style={{
        animationDelay: "0.6s"
      }}>
          2 Maggio 2026
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12 animate-fade-in" style={{
        animationDelay: "0.7s"
      }}>
          {[{
          value: timeLeft.days,
          label: "Giorni"
        }, {
          value: timeLeft.hours,
          label: "Ore"
        }, {
          value: timeLeft.minutes,
          label: "Minuti"
        }, {
          value: timeLeft.seconds,
          label: "Secondi"
        }].map((item, index) => <div key={index} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-peach/30 rounded-lg flex items-center justify-center shadow-sm">
                <span className="font-serif text-2xl md:text-3xl text-foreground">
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider">
                {item.label}
              </p>
            </div>)}
        </div>

        {/* CTA Button */}
        <button onClick={openGoogleForm} className="inline-flex items-center gap-2 bg-peach hover:bg-peach-dark text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in font-medium" style={{
        animationDelay: "0.8s"
      }}>
          Conferma la tua presenza
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-peach-dark/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-peach-dark/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;