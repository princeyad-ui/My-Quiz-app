
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import NavBar from './NavBar';

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (selected) => {
    const current = questions[currentQ];
    const isCorrect = selected === current.correct_answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const updatedAnswers = [
      ...userAnswers,
      {
        question: current.question,
        correctAnswer: current.correct_answer,
        selectedAnswer: selected,
        options: [...current.incorrect_answers, current.correct_answer]
      }
    ];
    setUserAnswers(updatedAnswers);

    if (currentQ + 1 < questions.length) {
      setCurrentQ((prev) => prev + 1);
    } else {
      navigate('/result', {
        state: {
          score: isCorrect ? score + 1 : score,
          total: questions.length,
          userAnswers: updatedAnswers
        }
      });
    }
  };

  const currentQuestion = questions[currentQ];
  const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div>
      <NavBar />
      <div style={{ margin: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
        <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              display: 'block',
              margin: '10px 0',
              padding: '10px',
              width: '100%',
              backgroundColor: '#ffffff',
              border: '1px solid #ddd',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
        <p style={{ marginTop: '20px' }}>
          Question {currentQ + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
};

export default Quiz;
