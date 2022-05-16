import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import NewsComponent from "./components/NewsComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Prices from "./components/Prices";
import Main from "./components/Main";
import SingleNews from "./components/newsParts/SingleNews";

function App() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh" as "100vh",
      }}
      className="App"
    >
      <Header />
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/darkhandeed" element={<Main />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<Prices />} />
        {/* <Route path="/teachers" element={<Prices />} /> */}
        <Route path="/news/:id" element={<SingleNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
