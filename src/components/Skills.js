import React from 'react';
import './Skills.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const skills = [
  { icon: '💻', title: 'Programming', pills: ['C', 'C++', 'Java', 'Python', 'GitHub'], bars: [{ l: 'C/C++', v: 90 }, { l: 'Python', v: 85 }] },
  { icon: '🤖', title: 'ML & AI', pills: ['Scikit-learn', 'Pandas', 'NumPy', 'Classification'], bars: [{ l: 'Supervised Learning', v: 80 }, { l: 'Data Analysis', v: 82 }] },
  { icon: '📐', title: 'CS & Math', pills: ['Algorithms', 'OOP', 'OS', 'Calculus', 'Numerical'], bars: [{ l: 'Algorithms', v: 88 }, { l: 'Mathematics', v: 85 }] },
];

export default function Skills() {
  const [ref, vis] = useIntersectionObserver();
  const on = vis ? 'on' : '';
  return (
    <section id="skills" ref={ref}>
      <div className="mesh" style={{ width: 300, height: 300, background: '#10b981', bottom: 0, right: '-5%' }}></div>
      <div className="spkbox" id="sparkle-skills"></div>
      <div className="pring" id="ring-skills"></div>
      <div className="sec-inner">
        <div className={'rvb ' + on}><span className="stag sk-stag">✦ Skills</span></div>
        <h2 className={'stitle sk-stitle rvl d1 ste ' + on} data-ta="scale">Technical Arsenal</h2>
        <div className="sk-grid">
          {skills.map((s, i) => (
            <div key={i} className={'sk-c rvf d' + (i + 1) + ' ' + on}>
              <div className="sk-ic">{s.icon}</div>
              <div className="sk-t">{s.title}</div>
              <div className="sk-pills">{s.pills.map((p, j) => <span key={j} className="sk-pill">{p}</span>)}</div>
              {s.bars.map((b, j) => (
                <div key={j} className="sk-bar">
                  <div className="sk-bt"><span>{b.l}</span><span>{b.v}%</span></div>
                  <div className="sk-btr"><div className="sk-bf" data-w={b.v} style={{ width: vis ? b.v + '%' : '0%' }}></div></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}