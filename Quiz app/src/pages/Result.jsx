import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { score, total, userAnswers } = state || { score: 0, total: 0, userAnswers: [] };

  return (
    <div>
      <NavBar />
      <div style={{
        textAlign: 'center',
        marginTop: '100px',
        fontFamily: 'Arial'
      }}>
        <h1>Quiz Completed!</h1>
        <h2>You Scored {score} out of {total}</h2>

        <p>
          Note: If you want to see which questions were right or wrong,&nbsp;
          <button
            onClick={() => navigate('/questioncard', { state: { userAnswers } })}
            style={{
              color: 'blue',
              background: 'none',
              border: 'none',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            click here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Result;

