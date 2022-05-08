import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import NewsComponent from "./components/NewsComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Prices from "./components/Prices";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import SingleNews from "./components/SingleNews";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/darkhandeed" element={<Main />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/news/:id" element={<SingleNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
