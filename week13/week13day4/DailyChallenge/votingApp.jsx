import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const increaseVote = (languageName) => {
    setLanguages(prevLanguages => {
      return prevLanguages.map(language => {
        if (language.name === languageName) {
          return { ...language, votes: language.votes + 1 };
        } else {
          return language;
        }
      });
    });
  };

  return (
    <div>
      <h1>Vote for your favorite language:</h1>
      <ul>
        {languages.map(language => (
          <li key={language.name}>
            {language.name}: {language.votes} votes
            <button onClick={() => increaseVote(language.name)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
