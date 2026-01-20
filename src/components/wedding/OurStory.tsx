import { Heart } from "lucide-react";

const OurStory = () => {
  const milestones = [
    {
      year: "2022",
      title: "Il Primo Appuntamento",
      description: "Il destino ci ha fatto incontrare e tutto è cambiato.",
    },
    {
      year: "2021",
      title: "Il Primo Appuntamento",
      description: "Una cena, mille risate e la certezza di aver trovato qualcosa di speciale.",
    },
    {
      year: "2023",
      title: "Andare a Vivere Insieme",
      description: "Abbiamo deciso di costruire la nostra casa, il nostro nido.",
    },
    {
      year: "2025",
      title: "La Proposta",
      description: "Un momento magico, un sì sussurrato tra lacrime di gioia.",
    },
    {
      year: "2026",
      title: "Il Matrimonio",
      description: "Il giorno in cui prometteremo di amarci per sempre.",
    },
  ];

  return (
    <section id="storia" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-peach-dark tracking-[0.3em] uppercase text-sm mb-4">
            Il Nostro Viaggio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            La Nostra Storia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ogni grande storia d'amore inizia con un piccolo momento. 
            Questa è la nostra.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-peach-light via-peach to-peach-light hidden md:block" />

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="bg-card p-6 rounded-2xl shadow-sm border border-peach/20 hover:shadow-md transition-shadow">
                  <span className="inline-block text-peach-dark font-serif text-xl mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex">
                <div className="w-10 h-10 bg-peach-light border-4 border-background rounded-full flex items-center justify-center shadow-md">
                  <Heart className="w-4 h-4 text-peach-dark fill-peach" />
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
