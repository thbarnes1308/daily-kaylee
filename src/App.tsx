import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import './App.css';
import { PremiumLinks } from './components/PremiumLinks';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <PremiumLinks />

        </section>
      </main>
    </div>
  );
}

export default App;
