import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="buttonContainer">
       <h3 className="intro-heading" >Let's Quiz</h3>
        <p className="intro-text">Your hub for all thing's quizzes! Create, publish, and participate in a wide range of quizzes. Dive in and join the fun!</p>
        <button
          className="registerButton homeButton"
          onClick={() => navigate("/auth")}
        >
          Register
        </button>
        <button
          className="loginButton homeButton"
          onClick={() => navigate("/auth/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
