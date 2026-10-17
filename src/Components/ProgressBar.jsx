import React from "react";
export default function ProgressBar({ current, total }) {
    const percentage = (current / total) * 100;
  
    return (
      <div className="progress-section">
        <div className="progress-label">
          <span>Question {current} of {total}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        >
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
  