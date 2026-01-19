import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: gallery1,
      alt: "Paola e David - Montagne",
    },
    {
      id: 2,
      src: gallery2,
      alt: "Paola e David - Mare",
    },
    {
      id: 3,
      src: gallery3,
      alt: "Paola e David - Dolomiti",
    },
    {
      id: 4,
      src: gallery4,
      alt: "Paola e David - Tramonto",
    },
    {
      id: 5,
      src: gallery5,
      alt: "Paola e David - Urbino",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galleria" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-peach-dark tracking-[0.3em] uppercase text-sm mb-4">
            Momenti Preziosi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Galleria
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una raccolta dei nostri momenti più belli insieme.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className={`relative cursor-pointer group overflow-hidden rounded-xl ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover ${
                  index === 0 ? "aspect-square" : "aspect-square"
                }`}
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-peach-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center">
                  <Camera className="w-5 h-5 text-peach-dark" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-sm border-peach/20 p-0">
            <DialogTitle className="sr-only">Visualizza foto</DialogTitle>
            <div className="relative aspect-[4/3] flex items-center justify-center bg-muted rounded-lg m-4">
              {selectedImage !== null && (
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain"
                />
              )}

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Image counter */}
            <div className="text-center pb-4 text-muted-foreground text-sm">
              {selectedImage !== null && `${selectedImage + 1} / ${images.length}`}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
