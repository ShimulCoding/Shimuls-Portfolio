import React, { useState } from 'react';
import './Footer.css';

const eggs = ['☕', '✨', '🌟', '🎉', '💜', '💙', '💚', '💛', '🧡'];

export default function Footer() {
  const [icon, setIcon] = useState('☕');
  const [pop, setPop] = useState(false);

  const eggClick = () => {
    setPop(false);
    setTimeout(() => {
      setPop(true);
      setIcon(eggs[Math.floor(Math.random() * eggs.length)]);
    }, 10);
    setTimeout(() => setPop(false), 800);
  };

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="ft-grid">
        <div className="ft-about">
          <div className="ft-logo">Shimul Chowdhury</div>
          <div className="ft-desc">Research-oriented CSE undergraduate at Metropolitan University, Sylhet. Passionate about AI, Machine Learning, and building impactful systems.</div>
          <div className="ft-socs">
            <a href="mailto:shimulc17@gmail.com" className="ft-soc">📧</a>
            <a href="https://github.com/ShimulCoding" target="_blank" rel="noopener noreferrer" className="ft-soc">🐙</a>
            <a href="https://codeforces.com/profile/shimulc17" target="_blank" rel="noopener noreferrer" className="ft-soc">⚔️</a>
            <a href="tel:+8801990019201" className="ft-soc">📱</a>
          </div>
        </div>
        <div className="ft-col">
          <h5>Navigation</h5>
          <button onClick={() => scrollTo('home')}>🏠 Home</button>
          <button onClick={() => scrollTo('about')}>👤 About</button>
          <button onClick={() => scrollTo('education')}>🎓 Education</button>
          <button onClick={() => scrollTo('skills')}>💡 Skills</button>
          <button onClick={() => scrollTo('projects')}>🚀 Projects</button>
        </div>
        <div className="ft-col">
          <h5>Resources</h5>
          <button onClick={() => scrollTo('slides')}>📊 Presentations</button>
          <button onClick={() => scrollTo('activities')}>🏆 Activities</button>
          <button onClick={() => scrollTo('contact')}>✉️ Contact</button>
          <a href="https://github.com/ShimulCoding" target="_blank" rel="noopener noreferrer">🐙 GitHub Profile</a>
          <a href="https://codeforces.com/profile/shimulc17" target="_blank" rel="noopener noreferrer">⚔️ Codeforces</a>
        </div>
      </div>
      <div className="ft-bottom">
        <div className="ft-copy">© 2026 Shimul Chowdhury · All rights reserved</div>
        <div className="ft-made">Built with <span className={'ft-egg' + (pop ? ' pop' : '')} onClick={eggClick}>{icon}</span> passion &amp; code</div>
      </div>
    </footer>
  );
}