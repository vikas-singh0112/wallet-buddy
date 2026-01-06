import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SubFeatures from "./components/SubFeatures";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 flex flex-col items-center">
      <Navbar />
      <Hero />
      <Features />
      <SubFeatures />
      <Footer />
    </div>
  );
}

export default Home;
