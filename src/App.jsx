import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogGridsPage from "./pages/BlogGridsPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import { ChevronUp } from "lucide-react";
import Footer from "./components/Footer";

const App = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for showing "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0f172a] text-gray-800 dark:text-white">
      {/* Back to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-indigo-500 shadow-lg rounded-lg flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="text-white" />
        </button>
      )}

      {/* Optional Video Modal */}
      {showVideo && <Video setShowVideo={setShowVideo} />}

      {/* Navbar */}
      <Navbar />

      {/* Route Pages */}
      <Routes>
        <Route path="/" element={<HomePage setShowVideo={setShowVideo} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/blog-grids" element={<BlogGridsPage />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
