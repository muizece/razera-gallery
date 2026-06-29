import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (!options.repeat) observer.unobserve(entry.target);
        } else if (options.repeat) {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.repeat]);

  return ref;
}

export function useScrollRevealAll(className = '.reveal', options = {}) {
  useEffect(() => {
    const els = document.querySelectorAll(className);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: options.threshold || 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [className, options.threshold]);
}
