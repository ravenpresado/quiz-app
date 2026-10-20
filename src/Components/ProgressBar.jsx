
import React from "react";

export default function ProgressBar({ current, total }) {
  const safeTotal = Number(total) || 10;
  const safeCurrent = Number(current) || 1;

  const percentage = Math.min(
    100,
    (safeCurrent / safeTotal) * 100
  );

  return (
    <div className="progress-section">
      <div className="progress-label">
        <span>Question {safeCurrent} of {safeTotal}</span>
        <span>{safeCurrent}/{safeTotal}</span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={safeCurrent}
        aria-valuemin={1}
        aria-valuemax={safeTotal}
      >
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
