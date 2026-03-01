import React, { useRef } from 'react';
import './Projects.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const projects = [
  { num: '01', emoji: '🌋📊', title: '🧠 Earthquake Prediction ML Pipeline', desc: 'End-to-end machine learning pipeline for seismic event prediction. Implements binary classification using Random Forest, SVM & KNN achieving 85%+ accuracy on real USGS earthquake datasets.', tech: ['🐍 Python', '📈 Scikit-learn', '🐼 Pandas', '📊 Matplotlib', '🔬 Google Colab'], link: 'https://colab.research.google.com/drive/1N6O5hMw-Ag-MAEJ9J4VD0VNeMZ16W1TA?usp=sharing', btn: '📓 Open Notebook →' },
  { num: '02', emoji: '🔬🌊', title: '🔭 Computational Diffraction Simulator', desc: 'Scientific computing project analyzing single-slit light diffraction patterns using numerical methods and Fraunhofer diffraction theory.', tech: ['🔢 Numerical Methods', '⚛️ Physics', '🐍 Python', '📊 NumPy', '📉 Matplotlib'], link: 'https://github.com/ShimulCoding/Physics-Problem-Solving-Assignment.Group-7-Section-C', btn: '🐙 View on GitHub →' },
  { num: '03', emoji: '🏗️💾', title: '⚙️ University Club Management System', desc: 'Full-stack web application for managing university clubs with role-based access control, CRUD operations, and 3NF database schema.', tech: ['🐘 PHP', '🗄️ MySQL', '🎨 Tailwind CSS', '🔐 Auth System', '📱 Responsive'], link: 'https://github.com/ShimulCoding/university-club-management', btn: '🐙 View on GitHub →' },
  { num: '04', emoji: '👾🕹️', title: '🎮 Pacman OOP Arcade Game', desc: 'Classic Pacman recreation using OOP principles with four unique ghost AI behaviors, collision detection, and smooth 60 FPS gameplay.', tech: ['🏛️ OOP Design', '🤖 Ghost AI', '🎯 60 FPS', '🎲 State Machine', '🖼️ Sprite Engine'], link: 'https://github.com/ShimulCoding/pacman-game', btn: '🐙 View on GitHub →' },
];

const anims = ['rvl', 'rvr', 'rvl', 'rvr'];

function Card({ p, i, vis }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const on = vis ? 'on' : '';
  const onMove = e => {
    const r = cardRef.current && cardRef.current.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    cardRef.current.style.transform = 'perspective(800px) rotateX(' + ((y - 0.5) * -10) + 'deg) rotateY(' + ((x - 0.5) * 10) + 'deg) translateY(-8px)';
    if (glowRef.current) { glowRef.current.style.left = (e.clientX - r.left) + 'px'; glowRef.current.style.top = (e.clientY - r.top) + 'px'; }
  };
  return (
    <div ref={cardRef} className={'pj-card ' + anims[i] + ' d' + (i + 1) + ' ' + on} onMouseMove={onMove} onMouseLeave={() => { if (cardRef.current) cardRef.current.style.transform = ''; }}>
      <div ref={glowRef} className="cglow"></div>
      <div className="pj-banner"><div className="lava"></div><div className="lava"></div><div className="lava"></div><div className="pj-emoji">{p.emoji}</div></div>
      <div className="pj-body">
        <div className="pj-num">{p.num}</div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="pj-tech">{p.tech.map((t, j) => <span key={j}>{t}</span>)}</div>
        <a href={p.link} target="_blank" rel="noopener noreferrer" className="pj-btn">{p.btn}</a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, vis] = useIntersectionObserver();
  const on = vis ? 'on' : '';
  return (
    <section id="projects" ref={ref}>
      <div className="mesh" style={{ width: 400, height: 400, background: '#8b5cf6', top: '-5%', left: '40%' }}></div>
      <div className="spkbox" id="sparkle-projects"></div>
      <div className="pring" id="ring-projects"></div>
      <div className="sec-inner">
        <div className={'rvb ' + on}><span className="stag pj-stag">✦ Projects</span></div>
        <h2 className={'stitle pj-stitle rvl d1 ste ' + on} data-ta="glitch">Featured Work</h2>
        <p className={'sdesc rvr d2 ' + on} style={{ color: '#6b21a8' }}>Real-world projects showcasing ML pipelines, scientific computing, full-stack development, and game AI.</p>
        <div className="pj-grid">{projects.map((p, i) => <Card key={i} p={p} i={i} vis={vis} />)}</div>
      </div>
    </section>
  );
}