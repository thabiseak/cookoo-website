import React from 'react';
import Header from './components/Header';
import HeroNew from './components/HeroNew';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Features from './components/Features';
import Videos from './components/Videos';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <section id="home">
        <HeroNew />
        <Features />
      </section>
      <section id="about">
        <Stats />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="videos">
        <Videos />
      </section>
      <Partners />
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
