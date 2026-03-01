import React from 'react';
import './Slides.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const slides = [
  { icon: '📊', title: 'Newton Raphson', desc: 'Root-finding', link: 'https://docs.google.com/presentation/d/13YqU0_A7OupknJ7j8vJYg3YQrDvmiCDYV9VW8KgITus' },
  { icon: '📐', title: 'Bisection', desc: 'Bracketing', link: 'https://docs.google.com/presentation/d/1Cl0RMn9Cq40pEFprlN9HtJQrucKzaE9P1bvpg40V5sI' },
  { icon: '🔄', title: 'Fixed Point', desc: 'Convergence', link: 'https://docs.google.com/presentation/d/1i9jxc2E_vhzFtnJ6IVEi8IMel5vR65hmzRDaFUqCo3E' },
  { icon: '📏', title: 'Regula Falsi', desc: 'False position', link: 'https://docs.google.com/presentation/d/1r5OxcWZyK5us-9dNTl5Umbujev78xVsPlRyhVSVaXog' },
  { icon: '📚', title: 'Full Deck', desc: 'Compilation', link: 'https://docs.google.com/presentation/d/1_5P-0IH_1YH53O3t2ifAqJLmW1ky2JLL4fIMcqgbboY' },
];

export default function Slides() {
  const [ref, vis] = useIntersectionObserver();
  const on = vis ? 'on' : '';
  return (
    <section id="slides" ref={ref}>
      <div className="mesh" style={{ width: 280, height: 280, background: '#f59e0b', top: '15%', right: '-4%' }}></div>
      <div className="spkbox" id="sparkle-slides"></div>
      <div className="pring" id="ring-slides"></div>
      <div className="sec-inner">
        <div className={'rvb ' + on}><span className="stag sl-stag">✦ Presentations</span></div>
        <h2 className={'stitle sl-stitle rvl d1 ste ' + on} data-ta="wave">Numerical Methods Slides</h2>
        <p className={'sdesc rvr d2 ' + on} style={{ color: '#92400e' }}>Click to open in Google Slides.</p>
        <div className="sl-grid">
          {slides.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" className={'sl-card rvz d' + (i + 1) + ' ' + on}>
              <span className="si">{s.icon}</span><h4>{s.title}</h4><p>{s.desc}</p><div className="sl-arr">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}