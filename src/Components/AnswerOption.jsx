import React from "react";
export default function AnswerOption({
    option,
    selected,
    onClick,
  }) {
    return (
      <button
        type="button"
        className={`answer-option ${
          selected ? "selected" : ""
        }`}
        aria-pressed={selected}
        onClick={onClick}
      >
        {option}
      </button>
    );
  }
  