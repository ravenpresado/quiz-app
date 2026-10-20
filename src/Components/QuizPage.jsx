
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./question.js";
import QuizHeader from "./QuizHeader.jsx";
import ProgressBar from "./ProgressBar.jsx";
import QuestionCard from "./QuestionCard.jsx";

export default function QuizPage() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  if (!questions || questions.length === 0) {
    return (
      <main className="quiz-page">
        <h1>No questions found</h1>
        <p>Please check your question.js file.</p>
      </main>
    );
  }

  const question = questions[currentQuestion];

  function handleNext() {
    if (!selectedAnswer) {
      alert("Please select an answer first.");
      return;
    }

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      const correctAnswers = questions.reduce(
        (total, item, index) => {
          return total +
            (updatedAnswers[index] === item.answer ? 1 : 0);
        },
        0
      );

      const incorrectAnswers =
        questions.length - correctAnswers;

      const percentage = Math.round(
        (correctAnswers / questions.length) * 100
      );

      navigate("/results", {
        state: {
          totalQuestions: questions.length,
          correctAnswers,
          incorrectAnswers,
          score: correctAnswers,
          percentage,
          answers: updatedAnswers,
        },
      });
    }
  }

  return (
    <main className="quiz-page">
      <QuizHeader />

      <section className="quiz-content">
        <ProgressBar
          current={currentQuestion + 1}
          total={questions.length}
        />

        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
        />

        <button
          type="button"
          className="primary-button"
          onClick={handleNext}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </section>
    </main>
  );
}
