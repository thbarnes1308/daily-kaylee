import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import './App.css';
import { PremiumLinks } from './components/PremiumLinks';

function App() {
  if (window.location.href.includes("allmylinks.com")) {
    window.location.replace("/");
  }
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
