import React, { useState, useEffect } from 'react';
import './Flashcard.css'

const difficultyColors = {
  easy: 'var(--color-easy)',
  medium: 'var(--color-medium)',
  hard: 'var(--color-hard)'
};

const isImage = (src) => {
  if (typeof src !== 'string') return false;
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(src);
};

const Flashcard = ({ question, answer, difficulty }) => {
  if (
    !question || typeof question !== 'object' ||
    !answer || typeof answer !== 'object'
  ) {
    return <div className="flashcard error">Invalid card format</div>;
  }

  const [flipped, setFlipped] = useState(false);

  const cardStyle = {
    border: `4px solid ${difficultyColors[difficulty] || 'var(--card-color)'}`,
    borderRadius: '12px',
  };

  const renderContent = ({ text, image }) => (
    <div className="card-content">
      {image && <img src={image} alt="" />}
      {text && <p>{text}</p>}
    </div>
  );

  return (
    <div
      className={`flashcard ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner" style={cardStyle}>
        <div className="card-front">{renderContent(question)}</div>
        <div className="card-back">{renderContent(answer)}</div>
      </div>
    </div>
  );
};

export default Flashcard;