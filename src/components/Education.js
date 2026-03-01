import React from 'react';
import './Education.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const data = [
  { year: '2023 — PRESENT', icon: '🎓', degree: 'Bachelor of Science in Computer Science & Engineering', inst: 'Metropolitan University, Sylhet, Bangladesh', chips: [{ t: '📊 CGPA: 3.94 / 4.00', c: 'gpa' }, { t: '🏆 VC Scholarship 2025', c: 'award' }, { t: '📚 110 Credits Completed', c: 'info' }], prog: { l: 'Degree Progress', v: 73 } },
  { year: '2019 — 2021', icon: '📜', degree: 'Higher Secondary Certificate (HSC)', inst: 'Shahid Syed Nazrul Islam College, Mymensingh', chips: [{ t: '📊 GPA: 5.00', c: 'gpa' }, { t: '🔬 Science Group', c: 'info' }, { t: '📝 1159 / 1300', c: 'rank' }], prog: { l: 'Score Rate', v: 89 } },
  { year: '2018', icon: '📖', degree: 'Secondary School Certificate (SSC)', inst: 'Atharabari M.C. High School, Mymensingh', chips: [{ t: '📊 GPA: 5.00', c: 'gpa' }, { t: '🔬 Science Group', c: 'info' }, { t: '📝 1146 / 1300', c: 'rank' }], prog: { l: 'Score Rate', v: 88 } },
  { year: '2016', icon: '🌟', degree: 'Junior School Certificate (JSC) — Dhaka Board', inst: 'Atharabari M.C. High School, Mymensingh', chips: [{ t: '📊 GPA: 5.00', c: 'gpa' }, { t: '🏅 Talentpool Scholarship', c: 'award' }, { t: '🥇 6th in Ishwarganj Upazilla', c: 'rank' }] },
];

export default function Education() {
  const [ref, vis] = useIntersectionObserver();
  const on = vis ? 'on' : '';
  return (
    <section id="education" ref={ref}>
      <div className="mesh" style={{ width: 350, height: 350, background: '#0ea5e9', top: '8%', left: '-5%' }}></div>
      <div className="mesh" style={{ width: 250, height: 250, background: '#6366f1', bottom: '5%', right: '-3%', animationDelay: '-6s' }}></div>
      <div className="spkbox" id="sparkle-education"></div>
      <div className="pring" id="ring-education"></div>
      <div className="sec-inner">
        <div className={'rvb ' + on}><span className="stag edu-stag">✦ Education</span></div>
        <h2 className={'stitle edu-stitle rvl d1 ste ' + on} data-ta="drop">Academic Journey</h2>
        <p className={'edu-subtitle rvr d2 ' + on}>A track record of academic excellence and continuous growth.</p>
        {data.map((d, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div className={'edu-connector rvz d' + Math.min(i + 1, 6) + ' ' + on}><div className="edu-connector-line"></div></div>}
            <div className={'edu-card rvf d' + Math.min(i + 1, 6) + ' ' + on}>
              <div className="edu-accent"></div>
              <div className="edu-header"><div className="edu-year">{d.year}</div><div className="edu-icon-wrap">{d.icon}</div></div>
              <div className="edu-body">
                <div className="edu-degree">{d.degree}</div>
                <div className="edu-inst">{d.inst}</div>
                <div className="edu-chips">{d.chips.map((ch, j) => <span key={j} className={'edu-chip chip-' + ch.c}>{ch.t}</span>)}</div>
                {d.prog && <div className="edu-progress-wrap"><div className="edu-progress-label"><span>{d.prog.l}</span><span>{d.prog.v}%</span></div><div className="edu-progress-bar"><div className="edu-progress-fill" data-pw={d.prog.v} style={{ width: vis ? d.prog.v + '%' : '0%' }}></div></div></div>}
              </div>
            </div>
          </React.Fragment>
        ))}
        <div className="edu-summary">
          <div className={'edu-stat rvb d3 ' + on}><span className="edu-stat-icon">🎯</span><div className="edu-stat-val">3.94</div><div className="edu-stat-lbl">Current CGPA</div></div>
          <div className={'edu-stat rvb d4 ' + on}><span className="edu-stat-icon">📚</span><div className="edu-stat-val">110</div><div className="edu-stat-lbl">Credits Done</div></div>
          <div className={'edu-stat rvb d5 ' + on}><span className="edu-stat-icon">🏆</span><div className="edu-stat-val">4×</div><div className="edu-stat-lbl">GPA 5.00</div></div>
          <div className={'edu-stat rvb d6 ' + on}><span className="edu-stat-icon">🥇</span><div className="edu-stat-val">2</div><div className="edu-stat-lbl">Scholarships</div></div>
        </div>
      </div>
    </section>
  );
}