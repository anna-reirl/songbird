import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import GameStage from './GameStage';
import birdsData from '../data/birds';
import './App.scss';


function makeQuestion(arrayIndex) {
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
  answers: makeAnswer(0),
  selectedBird: null,
  isFinished: false,
};

function init(initialState) {
  return {
    ...initialState,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'RESET':
    return init(initialGameState);
    case 'NEXT_LEVEL':
      return {
        ...state,
        price: 5,
        stage: state.stage + 1,
        isStageFinished: false,
        isFinished: state.stage + 1 > 5,
        question: makeQuestion(state.stage + 1),
        answers: makeAnswers(state.stage + 1),
        selectedBird: null,
      };
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialGameState, init);
  function renderQuiz() {
    return (
      <>
        
      </>
    );
  }

function renderEnd() {
  return <EndGame score={state.score} reset={dispatch} />;
}
return (
  <div className="container">
    <Header score={state.score} onClick={() => dispatch({ type: 'PLAY' })} />
    <GameStage stages={state.quizNames} activeStage={state.stage} />
    {state.isFinished ? renderEnd() : renderQuiz()}
  </div>
);
};

export default App;

