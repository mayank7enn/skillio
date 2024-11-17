import React from 'react';
import Header from './components/Header';
import VideoSummarizer from './components/VideoSummarizer';
import Helpdesk from './components/Helpdesk';
import PdfSummarizer from './components/PdfSummarizer';
import './index.css'
import Home from './components/home.js';
import Team from './components/Team.js';
import TranslatorTTS from './components/TranslatorTTS.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <VideoSummarizer />
        <PdfSummarizer />
        <TranslatorTTS />
        <Helpdesk />
        <Team />
      </main>
    </div>
  );
}

export default App;