import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Showcase from "./components/ShowCase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
};

export default App;
