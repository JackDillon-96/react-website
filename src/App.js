import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import Services from "./components/Services";
import Join from "./components/Join";
import "./App.css";

export default function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Join />
      <Footer />
    </>
  );
}
