import About from "./about/About";
import Contact from "./Contact/Contact";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import LandingPage from "./landingpage/LandingPage";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Features />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
