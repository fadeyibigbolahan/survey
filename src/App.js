import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import bgg from "./images/bgg.jpg";

function App() {
  return (
    <div class="min-h-screen bg-gradient-to-b from-blue-500 to-white">
      <Home />
    </div>
  );
}

export default App;
