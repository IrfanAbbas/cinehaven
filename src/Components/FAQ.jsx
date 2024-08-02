import React, { useState } from 'react';
import './FAQ.scss'; // Import your SCSS file

const FAQ = () => {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (question) => {
    setShowAnswers({ ...showAnswers, [question]: !showAnswers[question] });
  };

  return (
    <div className="faq-wrapper">
      <h1>Frequently Asked Questions</h1>
      <ul className="question-list">
        <li className="question-item">
          <button className="question-button" onClick={() => toggleAnswer('What is Netflix?')}>
            What is Netflix?
            <span className="toggle-icon">{showAnswers['What is Netflix?'] ? '-' : '+' }</span>
          </button>
          {showAnswers['What is Netflix?'] && (
            <p className="answer-text">
              Netflix is a streaming service that offers a wide variety of movies,
              TV shows, documentaries, and more.
            </p>
          )}
        </li>
        <li className="question-item">
          <button className="question-button" onClick={() => toggleAnswer('How much does Netflix cost?')}>
            How much does Netflix cost?
            <span className="toggle-icon">{showAnswers['How much does Netflix cost?'] ? '-' : '+' }</span>
          </button>
          {showAnswers['How much does Netflix cost?'] && (
            <p className="answer-text">
              Netflix offers different subscription plans at various price points. 
              Check their website for current pricing options.
            </p>
          )}
        </li>
        <li className="question-item">
          <button className="question-button" onClick={() => toggleAnswer('Where can I watch?')}>
            Where can I watch?
            <span className="toggle-icon">{showAnswers['Where can I watch?'] ? '-' : '+' }</span>
          </button>
          {showAnswers['Where can I watch?'] && (
            <p className="answer-text">
              You can watch Netflix on various devices, including smart TVs,
              computers, smartphones, tablets, and gaming consoles.
            </p>
          )}
        </li>
        <li className="question-item">
          <button className="question-button" onClick={() => toggleAnswer('How do I cancel?')}>
            How do I cancel?
            <span className="toggle-icon">{showAnswers['How do I cancel?'] ? '-' : '+' }</span>
          </button>
          {showAnswers['How do I cancel?'] && (
            <p className="answer-text">
              You can cancel your Netflix subscription at any time through your
              account settings.
            </p>
          )}
        </li>
        <li className="question-item">
          <button className="question-button" onClick={() => toggleAnswer('What can I watch on Netflix?')}>
            What can I watch on Netflix?
            <span className="toggle-icon">{showAnswers['What can I watch on Netflix?'] ? '-' : '+' }</span>
          </button>
          {showAnswers['What can I watch on Netflix?'] && (
            <p className="answer-text">
              Netflix has a vast library of movies, TV shows, documentaries, and
              more. Explore their website or app to find something you like.
            </p>
          )}
        </li>
        <li className="question-item">
          <button className="question-button" onClick={() => toggleAnswer('Is Netflix good for kids?')}>
            Is Netflix good for kids?
            <span className="toggle-icon">{showAnswers['Is Netflix good for kids?'] ? '-' : '+' }</span>
          </button>
          {showAnswers['Is Netflix good for kids?'] && (
            <p className="answer-text">
              Netflix offers a dedicated Kids section with age-appropriate content.
              Parents can control what their children can access through parental
              controls.
            </p>
          )}
        </li>
      </ul>
      <div className="cta-section">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="email-input-group">
          <input type="email" placeholder="Email address" className="email-input"/>
          <button className="subscribe-button">Get Started &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
