import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import bgg from "./images/bgg.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgg})`,
        height: "150vh",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Fixes the background
      }}
      className="w-full h-full"
    >
      <Home />
    </div>
  );
}

export default App;
