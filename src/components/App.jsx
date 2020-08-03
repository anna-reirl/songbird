import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import birdsData from '../data/birds';
import './App.scss';


function makeQuestions(arrayIndex) {
  if (arrayIndex > birdsData[0].birds.length - 1) {
    return null;
  }

  const random = Math.floor(0 + Math.random() * birdsData[0].length);
  const newQuestions = {
    ...birdsData[arrayIndex].birds[random],
    index: random,
  };
  return newQuestions;
}

function makeAnswer(arrayIndex) {
  if (arrayIndex > birdsData[0].birds.length - 1) {
    return null;
  }

  const newAnswers = birdsData[arrayIndex].birds.map((birds, index)=>{
    return {
      ...birds,
      index,
      status: '',
    };
  });
  return newAnswers;
}

const initialGameState = {
  score: 0,
  stage: 0,
  price: 5,
  isStageFinished: false,
  question: makeQuestion(0),
  answers: makeAnswers(0),
  selectedBird: null,
  isFinished: false,
};



function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;

