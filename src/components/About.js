import React from 'react';
import './About.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import photo from '../assets/shimul-2.jpg';

export default function About({ userPhoto }) {
  const [ref, vis] = useIntersectionObserver({ threshold: 0.05 });
  const on = vis ? 'on' : '';
  const img = userPhoto || photo;
  return (
    <section id="about" ref={ref}>
      <div className="mesh" style={{ width: 350, height: 350, background: '#f97316', top: '5%', right: '-3%' }}></div>
      <div className="spkbox" id="sparkle-about"></div>
      <div className="pring" id="ring-about"></div>
      <div className="sec-inner">
        <div className={'rvb ' + on}><span className="stag about-stag">✦ About Me</span></div>
        <h2 className={'stitle about-stitle rvl d1 ste ' + on} data-ta="flip">Research-Driven Developer</h2>
        <div className="about-grid">
          <div className={'rvz d2 ' + on}><div className="about-photo"><img src={img} alt="Shimul" /></div></div>
          <div>
            <p className={'rvr d2 ' + on} style={{ color: '#92400e', marginBottom: 18 }}>CSE undergraduate at <strong style={{ color: '#431407' }}>Metropolitan University, Sylhet</strong> with <strong style={{ color: '#c2410c' }}>CGPA 3.94/4.00</strong>. <strong style={{ color: '#c2410c' }}>Vice Chancellor's Scholarship</strong> recipient.</p>
            <p className={'rvr d3 ' + on} style={{ color: '#92400e', marginBottom: 24 }}>Passionate about <strong style={{ color: '#431407' }}>AI, Machine Learning, and Data Analysis</strong>. Seeking Research opportunities.</p>
            <div className="about-cards">
              <div className={'ac rvf d3 ' + on}><div className="ai">🎓</div><div className="al">University</div><div className="av">Metropolitan University</div></div>
              <div className={'ac rvf d4 ' + on}><div className="ai">🏆</div><div className="al">Scholarship</div><div className="av">VC's Award</div></div>
              <div className={'ac rvf d5 ' + on}><div className="ai">🤖</div><div className="al">Focus</div><div className="av">AI & ML</div></div>
              <div className={'ac rvf d6 ' + on}><div className="ai">🌐</div><div className="al">Languages</div><div className="av">BN · EN · HI</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}