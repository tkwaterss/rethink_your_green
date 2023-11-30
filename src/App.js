import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhyClover from "./pages/WhyClover";
import SuccessStories from "./pages/SuccessStories";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SuccessStory from "./pages/SuccessStory";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why_clover" element={<WhyClover />} />
          <Route path="/success_stories" element={<SuccessStories />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story/:storyId" element={<SuccessStory />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
