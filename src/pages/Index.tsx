import Navigation from "@/components/wedding/Navigation";
import Hero from "@/components/wedding/Hero";
import Program from "@/components/wedding/Program";
// import OurStory from "@/components/wedding/OurStory"; // Temporaneamente nascosto
import Gallery from "@/components/wedding/Gallery";
import RSVP from "@/components/wedding/RSVP";
import GiftSectionPreview from "@/components/wedding/GiftSectionPreview";
import InfoSection from "@/components/wedding/InfoSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Program />
      <RSVP />
      <GiftSectionPreview />
      {/* <OurStory /> */} {/* Temporaneamente nascosto */}
      <Gallery />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Index;
