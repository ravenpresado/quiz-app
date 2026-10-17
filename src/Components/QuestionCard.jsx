
import React from "react";
import AnswerOption from "./AnswerOption.jsx";

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
}) {
  return (
    <section className="question-card">
      <h2>{question.question}</h2>

      <div className="answer-list">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            selected={selectedAnswer === option}
            onClick={() => onSelectAnswer(option)}
          />
        ))}
      </div>
    </section>
  );
}
