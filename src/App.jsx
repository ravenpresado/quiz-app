import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import QuizPage from "./Components/QuizPage.jsx";
import ResultPage from "./Components/ResultCard.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/results" element={<ResultPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
