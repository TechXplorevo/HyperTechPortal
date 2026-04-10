import { useEffect, useRef } from "react";

const GlowingLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1, y: -1 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let frame: number;

    const lines = Array.from({ length: 6 }, (_, i) => ({
      baseY: (i + 1) / 7,
      amplitude: 20 + Math.random() * 30,
      frequency: 0.002 + Math.random() * 0.003,
      phase: Math.random() * Math.PI * 2,
      speed: 0.005 + Math.random() * 0.01,
      color: i % 3 === 0 ? "0,240,255" : i % 3 === 1 ? "255,0,255" : "138,0,255",
      alpha: 0.08 + Math.random() * 0.06,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouse);

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = performance.now();
      const scroll = scrollRef.current * 0.1;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      lines.forEach((line) => {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 3) {
          const baseY = line.baseY * canvas.height;
          let y =
            baseY +
            Math.sin(x * line.frequency + time * line.speed + scroll * 0.01 + line.phase) *
              line.amplitude;

          // Mouse influence (desktop)
          if (mx > 0) {
            const dx = x - mx;
            const dy = baseY - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
              y += (1 - dist / 200) * 25 * Math.sign(dy || 1);
            }
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${line.color}, ${line.alpha})`;
        ctx.lineWidth = 1;
        ctx.shadowColor = `rgba(${line.color}, ${line.alpha * 2})`;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.7 }}
    />
  );
};

export default GlowingLines;
