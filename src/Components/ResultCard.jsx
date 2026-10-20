
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "./question.js";

export default function ResultCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state;

  if (!results) {
    return (
      <main className="page">
        <section className="panel">
          <h1>No Quiz Results Yet</h1>
          <p>Please take the quiz first.</p>

          <button
            className="primary-button"
            onClick={() => navigate("/")}
          >
            Return Home
          </button>

          <button
            className="primary-button"
            onClick={() => navigate("/quiz")}
          >
            Retake Quiz
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="page result-page">
      <section className="panel">
        <p className="eyebrow">QUIZ COMPLETED</p>
        <h1>Your Results</h1>

        <div className="result-grid">
          <div className="result-item">
            <span>Total Questions</span>
            <strong>{results.totalQuestions}</strong>
          </div>

          <div className="result-item">
            <span>Correct Answers</span>
            <strong>{results.correctAnswers}</strong>
          </div>

          <div className="result-item">
            <span>Incorrect Answers</span>
            <strong>{results.incorrectAnswers}</strong>
          </div>

          <div className="result-item highlight">
            <span>Final Score</span>
            <strong>
              {results.score} / {results.totalQuestions}
            </strong>
            <strong>{results.percentage}%</strong>
          </div>
        </div>

        <h2>Answer Details</h2>

        {questions.map((question, index) => {
          const userAnswer = results.answers[index];
          const isCorrect = userAnswer === question.answer;

          return (
            <div className="result-item" key={index}>
              <h3>
                Question {index + 1}: {question.question}
              </h3>

              <p>
                Your Answer: {userAnswer || "No answer"}
              </p>

              <p>
                Correct Answer: {question.answer}
              </p>

              <strong>
                {isCorrect ? "Correct" : "Incorrect"}
              </strong>
            </div>
          );
        })}

        <div className="result-buttons">
          <button
            className="primary-button"
            onClick={() => navigate("/quiz")}
          >
            Retake Quiz
          </button>

          <button
            className="primary-button"
            onClick={() => navigate("/")}
          >
            Return Home
          </button>
        </div>
      </section>
    </main>
  );
}
