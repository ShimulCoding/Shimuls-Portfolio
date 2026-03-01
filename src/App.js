import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Slides from './components/Slides';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollProgress from './hooks/useScrollProgress';

export default function App() {
  const progress = useScrollProgress();
  const [tr, setTr] = useState({ active: false, label: '', color: '#7c3aed', anim: 'blades' });
  const [userPhoto, setUserPhoto] = useState(null);
  const trRef = useRef(false);

  useEffect(() => { trRef.current = tr.active; }, [tr.active]);

  const navigateTo = useCallback((id, label, color, anim, ta) => {
    if (trRef.current) return;
    setTr({ active: true, label, color, anim });

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'auto' });
    }, 380);

    setTimeout(() => {
      // sparkles
      const box = document.getElementById('sparkle-' + id);
      if (box) {
        box.innerHTML = '';
        const sec = document.getElementById(id);
        if (sec) {
          const r = sec.getBoundingClientRect();
          const cx = r.width / 2, cy = r.height / 2;
          for (let i = 0; i < 40; i++) {
            const s = document.createElement('div');
            s.className = 'spk';
            const a = (Math.PI * 2 / 40) * i + Math.random() * 0.6;
            const d = 120 + Math.random() * 280;
            s.style.left = cx + 'px';
            s.style.top = cy + 'px';
            s.style.setProperty('--sx', Math.cos(a) * d + 'px');
            s.style.setProperty('--sy', Math.sin(a) * d + 'px');
            s.style.animationDelay = (Math.random() * 0.35) + 's';
            s.style.background = [color, '#fff', '#fbbf24', '#f472b6', '#34d399', '#818cf8'][Math.floor(Math.random() * 6)];
            s.style.width = (3 + Math.random() * 6) + 'px';
            s.style.height = s.style.width;
            box.appendChild(s);
            requestAnimationFrame(() => s.classList.add('go'));
          }
          setTimeout(() => { box.innerHTML = ''; }, 1400);
        }
      }
      // ring
      const ring = document.getElementById('ring-' + id);
      if (ring) {
        ring.style.background = 'radial-gradient(circle,' + color + ',transparent 70%)';
        ring.classList.remove('go');
        void ring.offsetWidth;
        ring.classList.add('go');
        setTimeout(() => ring.classList.remove('go'), 1400);
      }
      // title anim
      const taMap = { spread: 'a-spread', flip: 'a-flip', drop: 'a-drop', scale: 'a-scale', glitch: 'a-glitch', wave: 'a-wave', swing: 'a-swing', rise: 'a-rise' };
      const titleEl = document.querySelector('#' + id + ' .ste');
      if (titleEl) {
        titleEl.classList.remove('ta', 'a-spread', 'a-flip', 'a-drop', 'a-scale', 'a-glitch', 'a-wave', 'a-swing', 'a-rise');
        titleEl.style.opacity = '0';
        void titleEl.offsetWidth;
        titleEl.classList.add('ta', taMap[ta] || 'a-rise');
      }
      // skill bars reset
      if (id === 'skills') {
        document.querySelectorAll('#skills .sk-bf').forEach(b => {
          b.style.width = '0';
          setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 100);
        });
      }
      // edu progress reset
      if (id === 'education') {
        document.querySelectorAll('#education .edu-progress-fill').forEach(b => {
          b.style.width = '0';
          setTimeout(() => { b.style.width = b.dataset.pw + '%'; }, 200);
        });
      }
    }, 520);

    setTimeout(() => {
      setTr({ active: false, label: '', color: '#7c3aed', anim: 'blades' });
    }, 1100);
  }, []);

  const handlePhoto = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (e) => setUserPhoto(e.target.result);
    reader.readAsDataURL(file);
  }, []);

  return (
    <div>
      <div id="progress" style={{ width: progress + '%' }}></div>
      <PageTransition active={tr.active} label={tr.label} color={tr.color} anim={tr.anim} />
      <Navbar navigateTo={navigateTo} />
      <Home navigateTo={navigateTo} userPhoto={userPhoto} onPhotoUpload={handlePhoto} />
      <About userPhoto={userPhoto} />
      <Education />
      <Skills />
      <Projects />
      <Slides />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}