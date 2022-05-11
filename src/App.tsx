import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import NewsComponent from "./components/NewsComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import Prices from "./components/Prices";
import Main from "./components/Main";
import SingleNews from "./components/SingleNews";
import Test from "./components/subComponents/Test";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/darkhandeed" element={<Main />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/news/:id" element={<SingleNews />} />
      </Routes> */}
      <Test />
      <Footer />
    </div>
  );
}

export default App;
