import React from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import QuestionCard from "./pages/QuestionCard";
import NavBar from "./pages/NavBar";
import ReviewCard from './pages/ReviewCard';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/questioncard" element={<QuestionCard />} />
        <Route path="/reviewcard" element={<ReviewCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
