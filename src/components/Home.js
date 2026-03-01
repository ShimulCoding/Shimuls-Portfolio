import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import photo from '../assets/shimul.jpg';

const phrases = [
  'BSc in Computer Science & Engineering',
  'Machine Learning Enthusiast',
  'Competitive Programmer · 200+ CF',
  'Full-Stack Developer',
  'Research-Oriented Mind'
];

export default function Home({ navigateTo, userPhoto, onPhotoUpload }) {
  const [ref, vis] = useIntersectionObserver({ threshold: 0.2 });
  const [typed, setTyped] = useState('');
  const [cgpa, setCgpa] = useState(0);
  const [cf, setCf] = useState(0);
  const [credits, setCredits] = useState(0);
  const fileRef = useRef(null);
  const on = vis ? 'on' : '';
  const imgSrc = userPhoto || photo;

  // typing effect
  useEffect(() => {
    let pi = 0, ci = 0, del = false, cancelled = false;
    function tick() {
      if (cancelled) return;
      const cur = phrases[pi];
      if (!del) {
        setTyped(cur.substring(0, ci + 1));
        ci++;
        if (ci === cur.length) { setTimeout(() => { if (!cancelled) { del = true; tick(); } }, 2400); return; }
        setTimeout(tick, 50 + Math.random() * 30);
      } else {
        setTyped(cur.substring(0, ci - 1));
        ci--;
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 350); return; }
        setTimeout(tick, 20);
      }
    }
    setTimeout(tick, 600);
    return () => { cancelled = true; };
  }, []);

  // counters - re-animate on every scroll in
  useEffect(() => {
    if (!vis) {
      setCgpa(0);
      setCf(0);
      setCredits(0);
      return;
    }
    const anim = (setter, target, isFloat) => {
      const start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / 2000, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setter(isFloat ? (ease * target).toFixed(2) : Math.floor(ease * target));
        if (p < 1) requestAnimationFrame(step);
        else setter(isFloat ? target.toFixed(2) : target);
      })(performance.now());
    };
    const t = setTimeout(() => {
      anim(setCgpa, 3.94, true);
      anim(setCf, 200, false);
      anim(setCredits, 110, false);
    }, 400);
    return () => clearTimeout(t);
  }, [vis]);

  // stars + orbs (once)
  useEffect(() => {
    const h = document.getElementById('home');
    if (!h || h.dataset.init) return;
    h.dataset.init = '1';
    for (let i = 0; i < 60; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.setProperty('--sd', (2 + Math.random() * 4) + 's');
      s.style.animationDelay = (-Math.random() * 5) + 's';
      h.appendChild(s);
    }
    [
      { w: 80, t: '8%', l: '5%', oc: 'rgba(124,58,237,.15)', dy: '-15px', dur: '7s' },
      { w: 50, t: '60%', l: '8%', oc: 'rgba(236,72,153,.12)', dy: '-12px', dur: '9s' },
      { w: 65, t: '25%', l: '85%', oc: 'rgba(14,165,233,.12)', dy: '-18px', dur: '8s' },
      { w: 40, t: '75%', l: '90%', oc: 'rgba(16,185,129,.1)', dy: '-10px', dur: '6s' },
      { w: 55, t: '45%', l: '70%', oc: 'rgba(245,158,11,.1)', dy: '-14px', dur: '10s' }
    ].forEach(o => {
      const d = document.createElement('div');
      d.className = 'orb3d';
      d.style.cssText = 'width:' + o.w + 'px;height:' + o.w + 'px;top:' + o.t + ';left:' + o.l + ';--oc:' + o.oc + ';--dy:' + o.dy + ';--dur:' + o.dur;
      h.appendChild(d);
    });
  }, []);

  return (
    <section id="home" ref={ref}>
      <div className="aurora-layer"></div>
      <div className="grid-floor"></div>
      <div className="scanline"></div>
      <div className="spkbox" id="sparkle-home"></div>
      <div className="pring" id="ring-home"></div>
      <div className="sec-inner">
        <div className="hero-grid">
          <div className="hero-text-col">
            <div className={'hero-greet rvb ' + on}><span className="wave">👋</span> Hello, I'm</div>
            <h1 className={'hero-name rvl d1 ' + on}><span className="hl">Shimul</span><br />Chowdhury</h1>
            <div className={'status-dot rv d2 ' + on}>Available for Research &amp; Collaboration</div>
            <p className={'hero-sub rvr d2 ' + on}>Research-oriented CSE undergraduate building intelligent systems and full-stack applications with a passion for AI &amp; Machine Learning.</p>
            <div className={'hero-typed rvf d3 ' + on}>
              <span style={{ color: 'rgba(255,255,255,.2)' }}>→ </span>
              <span>{typed}</span>
              <span className="tcur"></span>
            </div>
            <div className={'hero-stats rv d4 ' + on}>
              <div className="hst"><div className="hst-v">{cgpa}</div><div className="hst-l">CGPA / 4.0</div></div>
              <div className="hst"><div className="hst-v">{cf}+</div><div className="hst-l">CF Solved</div></div>
              <div className="hst"><div className="hst-v">{credits}</div><div className="hst-l">Credits</div></div>
            </div>
            <div className={'hero-btns rvb d5 ' + on}>
              <a href="#projects" className="btn-p" onClick={e => { e.preventDefault(); navigateTo('projects', 'Projects', '#8b5cf6', 'blades', 'glitch'); }}>View Projects</a>
              <a href="#contact" className="btn-s" onClick={e => { e.preventDefault(); navigateTo('contact', 'Contact', '#e11d48', 'curtain', 'rise'); }}>Contact Me</a>
            </div>
          </div>
          <div className={'hero-img-col rvz d3 ' + on}>
            <div className="him-w">
              <div className="glow-ring"></div>
              <div className="cube-wire">
                <div className="cube-face front"></div>
                <div className="cube-face back"></div>
                <div className="cube-face left"></div>
                <div className="cube-face right"></div>
              </div>
              <div className="cbr cbr-tl"></div>
              <div className="cbr cbr-tr"></div>
              <div className="cbr cbr-bl"></div>
              <div className="cbr cbr-br"></div>
              <div className="him-frame">
                <img src={imgSrc} alt="Shimul Chowdhury" />
                <div className="upload-ov" onClick={() => fileRef.current && fileRef.current.click()}>
                  <span>📷</span><small>Upload Photo</small>
                </div>
                <input ref={fileRef} type="file" accept="image/*" className="file-inp" onChange={e => e.target.files[0] && onPhotoUpload(e.target.files[0])} />
              </div>
              <div className="hfloat hf-t"><div className="fv">🏆 3.94</div><div className="fl">CGPA</div></div>
              <div className="hfloat hf-b"><div className="fv">⚡ 200+</div><div className="fl">Problems</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}