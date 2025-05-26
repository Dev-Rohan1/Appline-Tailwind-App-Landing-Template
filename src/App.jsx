import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogGridsPage from "./pages/BlogGridsPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

const App = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {showVideo && <Video setShowVideo={setShowVideo} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage setShowVideo={setShowVideo} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/blog-grids" element={<BlogGridsPage />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
