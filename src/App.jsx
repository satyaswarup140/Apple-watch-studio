import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CaseSelection from './components/CaseSelection';
import SizeSelection from './components/SizeSelection';
import BandSelection from './components/BandSelection';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <CaseSelection />
        <SizeSelection />
        <BandSelection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
