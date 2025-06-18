import React, { useState, useEffect } from 'react';
import Flashcard from './components/Flashcard';
import './components/Flashcard.css';

const cardSet = {
  title: 'Data Structures and Algorithms in C++',
  description: 'A deck covering all DSA topics from the UCI ICS 46 class',
  cards: [
    {
      id: 1,
      question:
      {
        text: 'In which traversal does the node visitation order follow the pattern "root - left subtree - right subtree"?',
        image: null
      },
      answer:
      {
        text: 'Pre-order traversal',
        image: null
      },
      difficulty: 'easy',
    },
    {
      id: 2,
      question:
      {
        text: 'In which traversal does the node visitation order follow the pattern "left subtree - root - right subtree"?',
        image: null
      },
      answer:
      {
        text: 'In-order traversal',
        image: null
      },
      difficulty: 'easy',
    },
    {
      id: 3,
      question:
      {
        text: 'What is the height difference limit between the left and right subtrees of any node in an AVL tree?',
        image: null
      },
      answer:
      {
        text: '1',
        image: null
      },
      difficulty: 'easy',
    },
    {
      id: 4,
      question:
      {
        text: 'Assume strlen(s) as follows. What is T(N) for strlen(s) where N is the length of s?',
        image: 'assets/card4.jpg'
      },
      answer:
      {
        text: '4N + 3',
        image: null
      },
      difficulty: 'hard',
    },
    {
      id: 5,
      question:
      {
        text: 'What is the worst-case time complexity for inserting a node into a self-balancing binary tree with n nodes?',
        image: null
      },
      answer:
      {
        text: 'O(log n)',
        image: null
      },
      difficulty: 'medium',
    },
    {
      id: 6,
      question:
      {
        text: 'Quick Sort has a worst-case time complexity of O(n^2) when:',
        image: null
      },
      answer:
      {
        text: 'The pivot element always divides the array into two uneven sub-arrays',
        image: null
      },
      difficulty: 'medium',
    },
  ],
};

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardSet.cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cardSet.cards.length) % cardSet.cards.length);
  };

  return (
    <div className="app">
      <h1>{cardSet.title}</h1>
      <h3>{cardSet.description}</h3>
      <p>Total Cards: {cardSet.cards.length}</p>
      <div className="card-grid">
        <Flashcard key={cardSet.cards[currentIndex].id} {...cardSet.cards[currentIndex]} />
      </div>
      <div className="card-nav">
        <button onClick={handlePrev} aria-label="Previous card">←</button>
        <button onClick={handleNext} aria-label="Next card">→</button>
      </div>
      <div className="card-progress">
        Card {currentIndex + 1} of {cardSet.cards.length}
      </div>
    </div>

  );
};

export default App;