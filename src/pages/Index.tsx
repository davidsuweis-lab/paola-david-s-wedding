import Navigation from "@/components/wedding/Navigation";
import Hero from "@/components/wedding/Hero";
import Program from "@/components/wedding/Program";
import OurStory from "@/components/wedding/OurStory";
import Gallery from "@/components/wedding/Gallery";
import RSVP from "@/components/wedding/RSVP";
import InfoSection from "@/components/wedding/InfoSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Program />
      <OurStory />
      <Gallery />
      <RSVP />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Index;
