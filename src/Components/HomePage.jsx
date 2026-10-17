import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="page home-page">
      <section className="panel home-panel">
        
        <h1>Welcome to the Frontend Quiz!</h1>
        
        <button
          className="primary-button"
          onClick={() => navigate("/quiz")}
        >
          Start Quiz
        </button>
      </section>
    </main>
  );
}
