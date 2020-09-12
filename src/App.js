import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Questions from './components/Questions';
import Answered from './components/Answered';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Questions />
      <Answered />
    </div>
  );
}

export default App;
