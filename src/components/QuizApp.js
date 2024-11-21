import React, { useState } from "react";

function QuizApp() {
  const questions = [
    {
      question: "What is the capital of Maharashtra?",
      options: ["Nagpur", "Thane", "Pune", "Mumbai"],
      answer: "Mumbai",
    },
    {
      question: "Name the national fruit of india?",
      options: ["Apple", "Mango", "Banana", "Orange"],
      answer: "Mango",
    },
    {
      question: "How many colors are there in a rainbow?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [userAnswers, setUserAnswers] = useState([]); 
  const [score, setScore] = useState(0); 
  const [quizComplete, setQuizComplete] = useState(false); 

  
  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer; 
    if (isCorrect) setScore(score + 1); 

    setUserAnswers([...userAnswers, { questionIndex: currentQuestion, isCorrect }]); 

    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); 
    } else {
      setQuizComplete(true); 
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0); 
    setUserAnswers([]); 
    setScore(0); 
    setQuizComplete(false); 
  };

  return (
    <div className="maindiv">
      <h1 className="title">Quiz App</h1>

      {quizComplete ? (
        <div className="container">
          <h2>Your Score: {score}/{questions.length}</h2>
          <button className="restart-btn" onClick={restartQuiz}>
            Restart Quiz
          </button>
          <ul>
            {userAnswers.map((ans, index) => (
              <li key={index}>
                Question {index + 1}:{" "}
                {ans.isCorrect ? "Correct ✅" : "Incorrect ❌"}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="container">
          <h2 className="que">
            Question {currentQuestion + 1}: {questions[currentQuestion].question}
          </h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button className="option-btn"
                key={index}
                onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
