import { useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 270;
const FPS          = 18;
const frameUrl = (i) => `/frames/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`;

export default function FrameCanvas() {
  const canvasRef   = useRef(null);
  const images      = useRef(new Array(TOTAL_FRAMES).fill(null));
  const frameRef    = useRef(0);
  const rafRef      = useRef(null);
  const lastTimeRef = useRef(0);
  const readyRef    = useRef(false);

  const draw = useCallback((idx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = images.current[idx];
    if (!img?.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext('2d');
    const cw  = canvas.width  / (window.devicePixelRatio || 1);
    const ch  = canvas.height / (window.devicePixelRatio || 1);

    // "contain" — never upscale past native, center-align
    const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth  * scale;
    const dh = img.naturalHeight * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Preload — eager on first 40 frames, sequential for the rest
  useEffect(() => {
    let loadedFirst = 0;

    const loadFrame = (i) => {
      const img = new Image();
      img.onload = () => {
        images.current[i] = img;
        if (i === 0) {
          draw(0);
          readyRef.current = true;
        }
        if (i < 40) {
          loadedFirst++;
        }
      };
      img.src = frameUrl(i);
    };

    // Prioritise first 40 frames for instant playback
    for (let i = 0; i < 40; i++) loadFrame(i);
    // Queue remaining
    for (let i = 40; i < TOTAL_FRAMES; i++) loadFrame(i);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  // Auto-play loop at FPS
  useEffect(() => {
    const tick = (time) => {
      rafRef.current = requestAnimationFrame(tick);
      if (!readyRef.current) return;
      if (time - lastTimeRef.current < 1000 / FPS) return;
      lastTimeRef.current = time;

      const next = (frameRef.current + 1) % TOTAL_FRAMES;
      // Skip frame if not loaded yet (never stall)
      if (!images.current[next]) return;
      frameRef.current = next;
      draw(next);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [draw]);

  // Sharp canvas on HiDPI screens + resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr  = window.devicePixelRatio || 1;
      canvas.width  = Math.round(rect.width  * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      draw(frameRef.current);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
