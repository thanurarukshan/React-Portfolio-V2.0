import React, { useEffect, useRef } from "react";

/* ─── Wave layer config ─────────────────────────────────────────────────────
   Each wave: amplitude (% of screen height), frequency, animation speed,
   vertical center position (% of height), and RGBA fill color.
   Layered back-to-front for a depth effect.
   ─────────────────────────────────────────────────────────────────────── */
const WAVE_LAYERS = [
  { amp: 0.09, freq: 0.0030, speed: 0.008, yCenter: 0.72, color: [6,  22, 50,  0.65] },
  { amp: 0.07, freq: 0.0045, speed: 0.013, yCenter: 0.58, color: [8,  32, 68,  0.55] },
  { amp: 0.06, freq: 0.0060, speed: 0.018, yCenter: 0.44, color: [10, 42, 82,  0.48] },
  { amp: 0.05, freq: 0.0080, speed: 0.024, yCenter: 0.30, color: [12, 50, 96,  0.38] },
  { amp: 0.04, freq: 0.0100, speed: 0.030, yCenter: 0.18, color: [15, 58, 110, 0.28] },
];

function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let frame = 0;

    /* Resize canvas to always fill the viewport */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const render = () => {
      const W = canvas.width;
      const H = canvas.height;

      /* ── Base background gradient ── */
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0.0, "#050a14");
      bg.addColorStop(0.5, "#071828");
      bg.addColorStop(1.0, "#0a1f38");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      /* ── Animated wave layers ── */
      WAVE_LAYERS.forEach(({ amp, freq, speed, yCenter, color }) => {
        const yC = H * yCenter;
        const amplitude = H * amp;
        const [r, g, b, a] = color;

        ctx.beginPath();
        ctx.moveTo(0, yC);

        /* Compound sine wave: primary + harmonic for organic look */
        for (let x = 0; x <= W; x += 4) {
          const primary  = Math.sin(x * freq       + frame * speed)       * amplitude;
          const harmonic = Math.sin(x * freq * 1.8 + frame * speed * 0.7 + 2) * amplitude * 0.35;
          ctx.lineTo(x, yC + primary + harmonic);
        }

        /* Close shape down to bottom of canvas and fill */
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fill();
      });

      frame++;
      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100%",
        height:        "100%",
        zIndex:        0,
        pointerEvents: "none",
        display:       "block",
      }}
    />
  );
}

export default WaveBackground;
