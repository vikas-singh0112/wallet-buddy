import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
