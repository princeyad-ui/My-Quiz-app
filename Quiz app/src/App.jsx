import React from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import QuestionCard from "./pages/QuestionCard"
import NavBar from "./pages/NavBar";
import ReviewCard from './pages/ReviewCard';
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<NavBar/>} path="/navbar"/>
      <Route element={<Home/>} path="/home"/>
      <Route element={<Quiz/>} path="/quiz"/>
      <Route element={<Result/>} path="/result"/>
      <Route element={<QuestionCard/>} path="/questioncard"/>
    
     
    </Routes>
    </BrowserRouter>
  );
};

export default App;
