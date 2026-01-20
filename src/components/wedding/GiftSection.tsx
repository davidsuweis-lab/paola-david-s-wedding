import { Heart, Plane, Gift, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const GiftSection = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const ibanDetails = {
    intestatario: "Paola Ricardi Di Netro",
    banca: "Unicredit",
    iban: "IT00 X000 0000 0000 0000 0000 000", // Placeholder - da sostituire con IBAN reale
  };

  const copyIban = () => {
    navigator.clipboard.writeText(ibanDetails.iban.replace(/\s/g, ""));
    setCopied(true);
    toast({
      title: "IBAN copiato!",
      description: "L'IBAN è stato copiato negli appunti",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="regali" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-peach-dark tracking-[0.3em] uppercase text-sm mb-4">
            Un Pensiero Per Noi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Lista Nozze
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La vostra presenza è il regalo più grande. Se desiderate farci un dono,
            ecco come potete contribuire alla nostra nuova vita insieme.
          </p>
        </div>

        {/* Gift Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bonifico Option */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-peach/20 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-peach-light rounded-full flex items-center justify-center mb-6 mx-auto">
              <Plane className="w-8 h-8 text-peach-dark" />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-4">
              Viaggio di Nozze
            </h3>
            
            <p className="text-muted-foreground text-center mb-6">
              Contribuite al nostro sogno: un viaggio di nozze in <span className="text-peach-dark font-medium">Giappone</span> 🇯🇵
            </p>

            <div className="bg-cream/50 rounded-xl p-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Intestatario</span>
                <span className="text-foreground font-medium">{ibanDetails.intestatario}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Banca</span>
                <span className="text-foreground font-medium">{ibanDetails.banca}</span>
              </div>
              <div className="pt-3 border-t border-peach/20">
                <span className="text-sm text-muted-foreground block mb-2">IBAN</span>
                <div className="flex items-center gap-2">
                  <code className="text-foreground font-mono text-sm bg-background px-3 py-2 rounded-lg flex-1 overflow-x-auto">
                    {ibanDetails.iban}
                  </code>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyIban}
                    className="shrink-0 border-peach/30 hover:bg-peach-light hover:border-peach"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-peach-dark" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4 italic">
              Nella causale indicate i vostri nomi 💕
            </p>
          </div>

          {/* Lista Nozze Online Option */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-peach/20 hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="w-16 h-16 bg-peach-light rounded-full flex items-center justify-center mb-6 mx-auto">
              <Gift className="w-8 h-8 text-peach-dark" />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-4">
              Lista Nozze Online
            </h3>
            
            <p className="text-muted-foreground text-center mb-6 flex-1">
              Abbiamo creato una lista di oggetti che ci accompagneranno nella nostra nuova casa.
            </p>

            <div className="space-y-4">
              <Button
                className="w-full bg-peach hover:bg-peach-dark text-white py-6 text-lg font-medium"
                onClick={() => window.open("#", "_blank")} // Placeholder - da sostituire con link Amazon
              >
                <Gift className="w-5 h-5 mr-2" />
                Vai alla Lista Nozze
              </Button>
              <p className="text-xs text-muted-foreground text-center italic">
                Link disponibile a breve
              </p>
            </div>
          </div>
        </div>

        {/* Thank you note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-peach-dark">
            <Heart className="w-4 h-4 fill-peach-dark" />
            <span className="font-serif italic">Grazie di cuore</span>
            <Heart className="w-4 h-4 fill-peach-dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
