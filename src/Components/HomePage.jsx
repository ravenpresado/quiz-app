import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <section className="home-card">
        
<h1>
  <span className="welcome-normal">Welcome to the</span>
  <br />
  <strong>Frontend Quiz!</strong>
</h1>

        <button
          className="start-quiz-button"
          onClick={() => navigate("/quiz")}
        >
          Start Quiz
        </button>
      </section>
    </main>
  );
}

export default HomePage;
