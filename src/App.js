import "./App.css";
import React, { useContext } from "react";
import AuthContext from "./store/authContext";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhyClover from "./pages/WhyClover";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";
import ManageBlogs from "./pages/admin/ManageBlogs";
import ManageContacts from "./pages/admin/ManageContacts";
import NewBlog from "./pages/admin/NewBlog";

function App() {
  const authCtx = useContext(AuthContext);
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
          {authCtx.token && (
            <Route path="/newAdmin" element={<AdminRegister />} />
          )}
          {authCtx.token && (
            <Route path="/manageBlogs" element={<ManageBlogs />} />
          )}
          {authCtx.token && (
            <Route path="/manageContacts" element={<ManageContacts />} />
          )}
          {authCtx.token && <Route path="/newBlog" element={<NewBlog />} />}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
