import { useCallback } from "react";

export function useTechBoom() {
  const boom = useCallback((e: React.MouseEvent) => {
    const cx = e.clientX;
    const cy = e.clientY;
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText =
      "position:fixed;top:0;left:0;pointer-events:none;z-index:9999;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;

    let progress = 0;
    const duration = 400; // ms
    const start = performance.now();

    const animate = (now: number) => {
      progress = Math.min((now - start) / duration, 1);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Shockwave ring
      const radius = progress * 180;
      const alpha = 1 - progress;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.7})`;
      ctx.lineWidth = 3 * (1 - progress);
      ctx.stroke();

      // Inner ring
      const r2 = progress * 120;
      ctx.beginPath();
      ctx.arc(cx, cy, r2, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 0, 255, ${alpha * 0.5})`;
      ctx.lineWidth = 2 * (1 - progress);
      ctx.stroke();

      // Glow burst
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.7);
      grad.addColorStop(0, `rgba(0, 240, 255, ${alpha * 0.15})`);
      grad.addColorStop(1, `rgba(0, 240, 255, 0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    };
    requestAnimationFrame(animate);
  }, []);

  return boom;
}
