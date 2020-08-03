import React from 'react';
import PropTypes from 'prop-types';


const GameStage = props => {
  const { stages, activeStage } = props;

  const stageStatusItems = stages.map((stage, index) => {
    if (activeStage === index)
      return (
        <li key={stage} className="active">
          {stage}
        </li>
      );
    if (activeStage > index)
      return (
        <li key={stage} className="passed">
          {stage}
        </li>
      );
    return <li key={stage}>{stage}</li>;
  });

  return (
    <nav>
      <ul>{stageStatusItems}</ul>
    </nav>
  );
};

GameStage.propTypes = {
  stages: PropTypes.arrayOf(PropTypes.string),
  activeStage: PropTypes.number,
};

GameStage.defaultProps = {
  stages: [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие Птицы',
    'Хищные птицы',
    'Морские птицы',
  ],
  activeStage: 0,
};

export default GameStage;