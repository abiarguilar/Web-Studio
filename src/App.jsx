import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MediaSection from "./components/MediaSection";
import SocialProof from "./components/SocialProof";
import ResultsSection from "./components/ResultsSection";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { Routes, Route } from "react-router-dom";

import Ejemplos from "./pages/Ejemplos";
import DemoServicios from "./pages/DemoServicios";
import DemoProducto from "./pages/DemoProducto";
import DemoCaptacion from "./pages/DemoCaptacion";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ResultsSection />
              <MediaSection />
              <Showcase />
              <SocialProof /> 
              <CTA />
              <Footer />
            </>
          }
        />

        <Route path="/ejemplos" element={<Ejemplos />} />
        <Route path="/demo-captacion" element={<DemoCaptacion />} />
        <Route path="/demo-servicios" element={<DemoServicios />} />
        <Route path="/demo-producto" element={<DemoProducto />} />
        <Route path="/demo-captacion" element={<DemoCaptacion />} />
      </Routes>

      <SpeedInsights />
    </>
  );
}
