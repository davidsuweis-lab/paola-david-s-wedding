import { Car, Shirt, Phone, Mail, MapPin, ExternalLink, ParkingCircle } from "lucide-react";

const InfoSection = () => {
  const parkingSpots = [
    {
      name: "Interparking - Park Padova Centro",
      url: "https://maps.app.goo.gl/N9F1TgrCZC3iz2mQ7",
      distance: "350m",
      type: "A pagamento",
      coords: { lat: 45.4064, lng: 11.8768 }
    },
    {
      name: "Parcheggio Intesa Sanpaolo",
      url: "https://maps.app.goo.gl/5fppWGxQXeQMvxaj6",
      distance: "400m",
      type: "A pagamento",
      coords: { lat: 45.4058, lng: 11.8755 }
    },
    {
      name: "Garage Porte Contarine",
      url: "https://maps.app.goo.gl/5TuUJb3cwUC1925LA",
      distance: "500m",
      type: "A pagamento",
      coords: { lat: 45.4045, lng: 11.8790 }
    },
  ];

  const alternativeParking = [
    { street: "Via Leonardo Loredan", note: "metà gratuito", url: "https://maps.app.goo.gl/VwwPyi3DqVrsvwpD7" },
    { street: "Via Giacomo Matteotti", note: "posti blu, attenzione alla ZTL", url: "https://maps.app.goo.gl/6gC86CZHXj2W9B746" },
    { street: "Via Giuseppe Jappelli", note: "gratuito", url: "https://maps.app.goo.gl/HCRT7t835Agf8pmS9" },
  ];

  const infoCards = [
    {
      icon: Car,
      title: "Parcheggio in Villa",
      content: [
        "Ampio parcheggio gratuito disponibile",
        "Accesso diretto dalla strada principale",
        "Nessuna limitazione di posti",
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

        {/* Parking Section for Ceremony */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-peach/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-peach-light rounded-full flex items-center justify-center">
                <ParkingCircle className="w-7 h-7 text-peach-dark" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                Parcheggi per la Cerimonia
              </h3>
            </div>

            {/* ZTL Warning */}
            <div className="bg-peach-light/50 border border-peach/30 rounded-xl p-4 mb-6">
              <p className="text-foreground text-sm md:text-base">
                <strong>⚠️ Attenzione:</strong> La Chiesa degli Eremitani si trova in <strong>Zona a Traffico Limitato (ZTL)</strong>. 
                Vi consigliamo di parcheggiare nei parcheggi a pagamento indicati sotto (spesso si riempiono il sabato, arrivate con anticipo!) 
                oppure nelle vie alternative gratuite.
              </p>
            </div>

            {/* Interactive Map */}
            <div className="mb-8 rounded-xl overflow-hidden border border-peach/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.5!2d11.8778!3d45.4095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eda5a9a3e9c8d%3A0x8a8a8a8a8a8a8a8a!2sChiesa%20degli%20Eremitani!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa parcheggi cerimonia"
                className="w-full"
              />
            </div>

            {/* Paid Parking List */}
            <h4 className="font-serif text-xl text-foreground mb-4">Parcheggi a Pagamento</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {parkingSpots.map((spot, index) => (
                <a
                  key={index}
                  href={spot.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-background p-4 rounded-xl border border-peach/20 hover:border-peach hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="w-5 h-5 text-peach-dark flex-shrink-0 mt-0.5" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-peach-dark transition-colors" />
                  </div>
                  <h5 className="font-medium text-foreground text-sm mb-1">{spot.name}</h5>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="bg-peach-light px-2 py-0.5 rounded-full text-peach-dark">{spot.distance}</span>
                    <span>{spot.type}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Alternative Free Parking */}
            <h4 className="font-serif text-xl text-foreground mb-4">Parcheggi Alternativi (Strada)</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {alternativeParking.map((parking, index) => (
                <a
                  key={index}
                  href={parking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-background p-4 rounded-xl border border-peach/20 hover:border-peach hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-peach-dark" />
                      <span className="font-medium text-foreground text-sm">{parking.street}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-peach-dark transition-colors" />
                  </div>
                  <span className="text-xs text-muted-foreground italic">{parking.note}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Other Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
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
              <ul className="space-y-2">
                {card.content.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-peach-dark mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
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
              href="tel:+393454775858"
              className="inline-flex items-center gap-2 text-peach-dark hover:text-peach transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Paola: 345 477 5858</span>
            </a>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <a
              href="tel:+393461313370"
              className="inline-flex items-center gap-2 text-peach-dark hover:text-peach transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>David: 346 131 3370</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
