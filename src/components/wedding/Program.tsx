import { Church, PartyPopper, MapPin, Clock } from "lucide-react";

const Program = () => {
  const events = [
    {
      icon: Church,
      title: "Cerimonia",
      time: "Ore 11:00",
      location: "Chiesa dei SS Filippo e Giacomo agli Eremitani",
      address: "Padova",
      mapUrl: "https://maps.google.com/?q=Chiesa+dei+SS+Filippo+e+Giacomo+agli+Eremitani+Padova",
    },
    {
      icon: PartyPopper,
      title: "Ricevimento",
      time: "A seguire",
      location: "Villa Spessa",
      address: "Carmignano di Brenta (PD)",
      mapUrl: "https://maps.google.com/?q=Villa+Spessa+Carmignano+di+Brenta",
    },
  ];

  return (
    <section id="programma" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-peach-dark tracking-[0.3em] uppercase text-sm mb-4">
            Il Grande Giorno
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Programma
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-sm border border-peach/20 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-peach-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <event.icon className="w-8 h-8 text-peach-dark" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                {event.title}
              </h3>

              {/* Time */}
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>

              {/* Location */}
              <div className="mb-4">
                <p className="font-medium text-foreground">{event.location}</p>
                <p className="text-muted-foreground text-sm">{event.address}</p>
              </div>

              {/* Map Link */}
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-peach-dark hover:text-peach transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Apri in Google Maps</span>
              </a>
            </div>
          ))}
        </div>

        {/* Timeline connector - visible on desktop */}
        <div className="hidden md:block max-w-4xl mx-auto mt-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-peach to-transparent" />
            <div className="w-3 h-3 bg-peach rounded-full" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-peach to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
