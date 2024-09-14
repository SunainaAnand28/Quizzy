import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/Navbar.module.css'; // Import the CSS module
import logo from '../assets/quizzy-logo.png'


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>

      <img className={styles.applogo} src={logo} alt="" onClick={() => navigate('/dashboard')} />
      
      <div className={styles.navbarLinks}>
        <div className={styles.navItem} onClick={() => navigate('/quiz')}>
          Create Quiz
        </div>
        <div className={styles.navItem} onClick={() => navigate('/auth/quiz/myquiz')}>
          My Quiz
        </div>
        <div className={styles.navItem} onClick={() => navigate('/attempt-quizzes')}>
          Attempt Quiz
        </div>
      </div>

      <div className={styles.accountSettings} onClick={() => navigate('/my-profile')}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
          alt="Profile"
          width={40}
        />
      </div>
    </nav>
  );
};

export default Navbar;
