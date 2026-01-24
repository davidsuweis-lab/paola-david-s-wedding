import { Heart } from "lucide-react";

const OurStory = () => {
  const milestones = [
    {
      year: "Giugno 2022",
      title: "Il Primo Appuntamento",
      description: "Un invito a messa al Santo andato male (abbiamo sbagliato orario!) si è trasformato in uno Spritz all'ombra dei portici della Pasticceria Lilium, affianco alla Basilica del Santo.",
    },
    {
      year: "Settembre 2022",
      title: "Il Primo Bacio",
      description: "Dopo un giro sui Colli Euganei, il nostro primo bacio.",
    },
    {
      year: "Ottobre 2022",
      title: "L'Ufficialità",
      description: "Ci siamo messi insieme, nello stesso tavolino del nostro primo incontro, sempre alla Pasticceria Lilium vista Santo.",
    },
    {
      year: "2023",
      title: "Tra Madrid e la Giordania",
      description: "Cinque mesi a distanza per la tesi di David a Madrid, poi il primo viaggio di Paola in Giordania per conoscere le origini e la famiglia di David.",
    },
    {
      year: "2024",
      title: "Viaggi",
      description: "Parigi ad aprile e Barcellona a novembre.",
    },
    {
      year: "20 Giugno 2025",
      title: "La Proposta",
      description: "A Barcola, Trieste, al tramonto, David chiede a Paola di sposarlo.",
    },
    {
      year: "2 Maggio 2026",
      title: "Il Matrimonio",
      description: "Ci sposiamo!",
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
