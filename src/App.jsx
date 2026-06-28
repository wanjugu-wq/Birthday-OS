import Hero from "./components/Hero";
import Specs from "./components/Specs";
import Timeline from "./components/Timeline";
import Terminal from "./components/Terminal";
import SecretMode from "./components/SecretMode";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <Specs />
      <Timeline />
      <Terminal />
      <SecretMode />
      <Footer />
    </main>
  );
}

export default App;
