import React, { useState, useEffect } from 'react';
import './Navbar.css';

const items = [
  { id: 'home', label: 'Home', color: '#7c3aed', anim: 'blades', ta: 'spread' },
  { id: 'about', label: 'About', color: '#ea580c', anim: 'wipe', ta: 'flip' },
  { id: 'education', label: 'Education', color: '#0ea5e9', anim: 'circle', ta: 'drop' },
  { id: 'skills', label: 'Skills', color: '#10b981', anim: 'diamond', ta: 'scale' },
  { id: 'projects', label: 'Projects', color: '#8b5cf6', anim: 'blades', ta: 'glitch' },
  { id: 'slides', label: 'Slides', color: '#f59e0b', anim: 'diag', ta: 'wave' },
  { id: 'activities', label: 'Activities', color: '#ec4899', anim: 'zoom', ta: 'swing' },
  { id: 'contact', label: 'Contact', color: '#e11d48', anim: 'curtain', ta: 'rise' },
];

export default function Navbar({ navigateTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50);
      let cur = 'home';
      document.querySelectorAll('section').forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (item) => {
    setOpen(false);
    navigateTo(item.id, item.label, item.color, item.anim, item.ta);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#home" className="logo" onClick={e => { e.preventDefault(); go(items[0]); }}>&lt;SC /&gt;</a>
      <ul className={'nav-links' + (open ? ' open' : '')}>
        {items.map(item => (
          <li key={item.id}>
            <a
              href={'#' + item.id}
              className={active === item.id ? 'active' : ''}
              data-section={item.id}
              onClick={e => { e.preventDefault(); go(item); }}
            >{item.label}</a>
          </li>
        ))}
      </ul>
      <button className={'hamburger' + (open ? ' open' : '')} onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}