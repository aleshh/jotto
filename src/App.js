import React, { Component } from 'react';
import './App.css';

import GuessedWords from './components/GuessedWords'
import Congrats from './components/Congrats'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
    { guessedWord: 'train', matchedCount: 3},
    { guessedWord: 'agile', matchedCount: 1},
    { guessedWord: 'party', matchedCount: 5}
  ]} />
      </div>
    );
  }
}

export default App;
