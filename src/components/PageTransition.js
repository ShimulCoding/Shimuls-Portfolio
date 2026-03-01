import React from 'react';
import './PageTransition.css';

export default function PageTransition({ active, label, color, anim }) {
  const cls = active ? 'page-t anim-' + anim : 'page-t';
  return (
    <div className={cls} style={{ '--ov': color }}>
      {[0,1,2,3,4].map(i => <div key={i} className="blade" style={{ background: color }}></div>)}
      <div className="t-lbl">{label}</div>
    </div>
  );
}