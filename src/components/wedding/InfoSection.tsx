import { Hotel, Car, Shirt, Phone, Mail, Heart } from "lucide-react";

const InfoSection = () => {
  const infoCards = [
    {
      icon: Hotel,
      title: "Dove Alloggiare",
      content: [
        "Hotel Maritan - Padova Centro",
        "B&B Villa dei Fiori - Carmignano",
        "Hotel Alla Rocca - Cittadella",
      ],
      note: "Consigliamo di prenotare in anticipo",
    },
    {
      icon: Car,
      title: "Come Arrivare",
      content: [
        "Chiesa: Centro storico di Padova, parcheggio limitato",
        "Villa: Ampio parcheggio disponibile",
        "Servizio navetta disponibile dalla Chiesa alla Villa",
      ],
    },
    {
      icon: Shirt,
      title: "Dress Code",
      content: [
        "Elegante / Semi-formale",
        "Consigliamo colori pastello",
        "Il prato della Villa è in erba, attenzione ai tacchi!",
      ],
    },
  ];

  return (
    <section id="info" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-peach-dark tracking-[0.3em] uppercase text-sm mb-4">
            Tutto Quello Che Devi Sapere
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Info Utili
          </h2>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-sm border border-peach/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-peach-light rounded-full flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-peach-dark" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                {card.title}
              </h3>

              {/* Content */}
              <ul className="space-y-2 mb-4">
                {card.content.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-peach-dark mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Note */}
              {card.note && (
                <p className="text-xs text-peach-dark italic">{card.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto text-center bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-peach/20">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Hai domande?
          </h3>
          <p className="text-muted-foreground mb-6">
            Per qualsiasi informazione, non esitare a contattarci!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+39xxxxxxxxxx"
              className="inline-flex items-center gap-2 text-peach-dark hover:text-peach transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+39 XXX XXX XXXX</span>
            </a>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <a
              href="mailto:paola.david.wedding@email.it"
              className="inline-flex items-center gap-2 text-peach-dark hover:text-peach transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>paola.david.wedding@email.it</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
