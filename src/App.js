// Original project
// https://www.youtube.com/c/MrWebDesignerAnas
// calısan react versiyonu yaptım
// https://travel-web-liart.vercel.app/#
import "./App.css";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Packages from "./components/Packages";
import Review from "./components/Review";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import Homex from "./components/Homex";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}

      <Homex />
      {/* <Homexy /> */}
      <Book />
      <Packages />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
