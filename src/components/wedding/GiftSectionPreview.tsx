import { Heart, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GiftSectionPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="lista-nozze" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-peach-dark tracking-[0.3em] uppercase text-sm mb-4">
            Un Pensiero Per Noi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Lista Nozze
          </h2>
          <p className="text-muted-foreground mb-8">
            La vostra presenza è il regalo più grande. Se desiderate farci un dono,
            ecco come potete contribuire alla nostra nuova vita insieme.
          </p>

          <div className="mb-6 flex items-center justify-center gap-2 text-peach-dark">
            <Heart className="w-4 h-4 fill-peach-dark" />
            <span className="font-serif italic">Grazie di cuore</span>
            <Heart className="w-4 h-4 fill-peach-dark" />
          </div>

          <div>
            <Button
              className="bg-peach hover:bg-peach-dark text-white py-6 px-10 text-lg font-medium"
              onClick={() => {
                navigate("/lista-nozze");
                window.scrollTo(0, 0);
              }}
            >
              <Gift className="w-5 h-5 mr-2" />
              Vai alla Lista Nozze
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSectionPreview;
