import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import FeaturedObject from "@/components/FeaturedObject";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LatestNews />
        <FeaturedObject />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
