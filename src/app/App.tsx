import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Tokenomics } from "./components/Tokenomics";
import { MemeGallery } from "./components/MemeGallery";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-purple-950 to-black">
      <Hero />
      <About />
      <Tokenomics />
      <MemeGallery />
      <Footer />
    </div>
  );
}
