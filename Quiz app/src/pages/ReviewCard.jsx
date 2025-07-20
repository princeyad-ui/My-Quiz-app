import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar'; 

const ReviewCard = () => {
  const { state } = useLocation();
  const userAnswers = state?.userAnswers || [];

  return (
    <div>
      <NavBar /> 
      <div style={{ padding: '30px' }}>
        <h2>Answer Review</h2>
        {userAnswers.map((item, index) => {
          const isCorrect = item.selectedAnswer === item.correctAnswer;
          const options = [...new Set(item.options)].sort();

          return (
            <div key={index} style={{
              marginBottom: '25px',
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: isCorrect ? '#d4edda' : '#f8d7da',
              border: `2px solid ${isCorrect ? 'green' : 'red'}`
            }}>
              <h3 dangerouslySetInnerHTML={{ __html: `${index + 1}. ${item.question}` }} />
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {options.map((opt, i) => {
                  const isSelected = opt === item.selectedAnswer;
                  const isRight = opt === item.correctAnswer;

                  return (
                    <li
                      key={i}
                      style={{
                        fontWeight: isRight ? 'bold' : 'normal',
                        color: isSelected
                          ? isRight ? 'green' : 'red'
                          : isRight ? 'green' : 'black',
                        margin: '5px 0'
                      }}
                      dangerouslySetInnerHTML={{ __html: opt }}
                    />
                  );
                })}
              </ul>
              <p>
                Your Answer: <strong style={{ color: isCorrect ? 'green' : 'red' }} dangerouslySetInnerHTML={{ __html: item.selectedAnswer }} /><br />
                Correct Answer: <strong dangerouslySetInnerHTML={{ __html: item.correctAnswer }} />
              </p>
              <p style={{ fontWeight: 'bold', color: isCorrect ? 'green' : 'red' }}>
                {isCorrect ? '✅ Correct' : '❌ Wrong'}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCard;
