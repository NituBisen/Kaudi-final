import Navbar from "../common/Navbar";
import Hero from "../homepage/Hero";
import Ticker from "../homepage/Ticker";
import About from "../homepage/About";
import Why from "../homepage/Why";
import Featured from "../homepage/Featured";
import Howit from "../homepage/Howit";
import Tokenomics from "../homepage/Tokenomics";
import Roadmap from "../homepage/Roadmap";
import FAQ from "../homepage/FAQ";
import Cta from "../homepage/Cta";
import Footer from "../common/Footer";
const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />

      <main>
        <Hero />
        <Ticker />
        <About />
        <Why />
        <Featured />
        <Howit />
        <Tokenomics />
        <Roadmap />
        <FAQ />
        <Cta />
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;