// components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <Navbar /> 

      <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome to Quizzy!</h1>
        <p className='dashboard-text'>Test your knowledge and have fun with exciting quizzes!</p>
        <div className="dashboard-nav">
          <div className="dashboard-item">
            <h3>Create Your Own Quiz</h3>
            <button className="dashboard-button" onClick={() => navigate('/quiz')}>Create Quiz</button>
          </div>
          <div className="dashboard-item">
            <h3>Choose Your Quizzes</h3>
            <button className="dashboard-button" onClick={() => navigate('/auth/quiz/myquiz')}>My Quiz</button>
          </div>
          <div className="dashboard-item">
            <h3>Attempt Quizzes</h3>
            <button className="dashboard-button" onClick={() => navigate('/attempt-quizzes')}>Attempt Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
