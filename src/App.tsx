import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Resume } from './components/Resume/Resume';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Sparkles } from './components/Background/Sparkles';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Sparkles />
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;