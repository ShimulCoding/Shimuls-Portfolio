import React from 'react';
import './Activities.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const acts = [
  { i: '🏛️', t: 'Campus Ambassador', d: 'ICT Olympiad S3' },
  { i: '🏏', t: 'Volunteer', d: 'BPL 2024' },
  { i: '🆘', t: 'Disaster Response', d: 'MUDRU' },
  { i: '💡', t: 'ICT Olympiad', d: 'Selection S2' },
  { i: '🔬', t: 'Scientific Conf.', d: 'Participant' },
];
const achvs = [
  { i: '🏆', t: "Vice Chancellor's Scholarship", d: 'Outstanding academic performance.' },
  { i: '⚡', t: '200+ CF Solutions', d: 'Algorithmic problem-solving (shimulc17).' },
  { i: '🥇', t: 'Talentpool Scholarship', d: '6th in Ishwarganj Upazilla.' },
];

export default function Activities() {
  const [ref, vis] = useIntersectionObserver();
  const on = vis ? 'on' : '';
  return (
    <section id="activities" ref={ref}>
      <div className="mesh" style={{ width: 250, height: 250, background: '#ec4899', bottom: '-3%', left: '8%' }}></div>
      <div className="spkbox" id="sparkle-activities"></div>
      <div className="pring" id="ring-activities"></div>
      <div className="sec-inner">
        <div className={'rvb ' + on}><span className="stag act-stag">✦ Activities &amp; Honors</span></div>
        <h2 className={'stitle act-stitle rvl d1 ste ' + on} data-ta="swing">Beyond Academics</h2>
        <div className="act-grid">
          {acts.map((a, idx) => (
            <div key={idx} className={'act-c rvz d' + (idx + 1) + ' ' + on}>
              <div className="aci">{a.i}</div><h4>{a.t}</h4><p>{a.d}</p>
            </div>
          ))}
        </div>
        <div className="achv-row">
          {achvs.map((a, idx) => (
            <div key={idx} className={'achv-c rvl d' + (idx + 3) + ' ' + on}>
              <div className="achv-i">{a.i}</div><div><h4>{a.t}</h4><p>{a.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}