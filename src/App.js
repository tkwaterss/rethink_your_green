import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhyClover from "./pages/WhyClover";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why_clover" element={<WhyClover />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:blogId" element={<BlogDetails />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/newAdmin" element={<AdminRegister />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
