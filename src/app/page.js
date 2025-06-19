import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import CommunitySection from "./components/CommunitySection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 min-h-screen">
      <div className="bg-[#ede7df] min-h-screen flex flex-col">
        <Hero />
        <About />
        <Services />
        {/* <Coaching /> */}
        <CommunitySection />
        <Gallery />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
