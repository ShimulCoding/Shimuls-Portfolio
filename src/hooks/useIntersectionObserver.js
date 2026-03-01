import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(opts) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...opts }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
    // eslint-disable-next-line
  }, []);
  return [ref, visible];
}