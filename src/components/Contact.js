import React, { useState } from 'react';
import './Contact.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const links = [
  { icon: '📧', label: 'Email', value: 'shimulc17@gmail.com', href: 'mailto:shimulc17@gmail.com' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/ShimulCoding', href: 'https://github.com/ShimulCoding' },
  { icon: '⚔️', label: 'Codeforces', value: 'shimulc17', href: 'https://codeforces.com/profile/shimulc17' },
  { icon: '📱', label: 'Phone', value: '+880 1990 019201', href: 'tel:+8801990019201' },
];

export default function Contact() {
  const [ref, vis] = useIntersectionObserver();
  const on = vis ? 'on' : '';
  const [form, setForm] = useState({ n: '', e: '', m: '' });
  const [sent, setSent] = useState(false);
  const send = () => {
    if (form.n && form.e && form.m) {
      setSent(true);
      setForm({ n: '', e: '', m: '' });
      setTimeout(() => setSent(false), 4000);
    }
  };
  return (
    <section id="contact" ref={ref}>
      <div className="ct-orb" style={{ width: 250, height: 250, background: 'radial-gradient(circle,rgba(225,29,72,.12),transparent 70%)', top: '10%', right: '5%' }}></div>
      <div className="ct-orb" style={{ width: 200, height: 200, background: 'radial-gradient(circle,rgba(219,39,119,.1),transparent 70%)', bottom: '15%', left: '5%', animationDelay: '-4s' }}></div>
      <div className="spkbox" id="sparkle-contact"></div>
      <div className="pring" id="ring-contact"></div>
      <div className="sec-inner">
        <div className={'rvb ' + on}><span className="stag ct-stag">✦ Contact</span></div>
        <h2 className={'stitle ct-stitle rvl d1 ste ' + on} data-ta="rise">Let's Connect</h2>
        <p className={'sdesc rvr d2 ' + on} style={{ color: '#9f1239' }}>Interested in collaboration, research, or saying hello?</p>
        <div className="ct-layout">
          <div>
            {links.map((l, i) => (
              <a key={i} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={'cl-i rvl d' + (i + 1) + ' ' + on}>
                <div className="cl-ic">{l.icon}</div>
                <div><div className="cl-lbl">{l.label}</div><div className="cl-val">{l.value}</div></div>
              </a>
            ))}
          </div>
          <div className={'msg-form rvr d2 ' + on}>
            <div className="fg"><label>Your Name</label><input type="text" placeholder="John Doe" value={form.n} onChange={e => setForm({ ...form, n: e.target.value })} /></div>
            <div className="fg"><label>Your Email</label><input type="email" placeholder="john@example.com" value={form.e} onChange={e => setForm({ ...form, e: e.target.value })} /></div>
            <div className="fg"><label>Message</label><textarea placeholder="Write your message..." value={form.m} onChange={e => setForm({ ...form, m: e.target.value })}></textarea></div>
            <button className="send-btn" onClick={send}><span>Send Message</span><span>✈️</span></button>
            {sent && <div className="form-ok show">✅ Message sent successfully!</div>}
          </div>
        </div>
      </div>
    </section>
  );
}