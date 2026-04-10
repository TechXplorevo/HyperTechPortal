import { useCallback } from "react";

export function useNeonRipple() {
  const ripple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rippleEl = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 2;
    rippleEl.style.cssText = `
      position: absolute;
      border-radius: 50%;
      width: ${size}px;
      height: ${size}px;
      left: ${x - size / 2}px;
      top: ${y - size / 2}px;
      background: radial-gradient(circle, rgba(0,240,255,0.25) 0%, transparent 70%);
      transform: scale(0);
      animation: neonRippleAnim 0.5s ease-out forwards;
      pointer-events: none;
      z-index: 1;
    `;

    // Ensure parent has relative/overflow hidden for containment
    const origPos = el.style.position;
    const origOverflow = el.style.overflow;
    if (!origPos || origPos === "static") el.style.position = "relative";
    el.style.overflow = "hidden";
    el.appendChild(rippleEl);

    setTimeout(() => {
      rippleEl.remove();
      el.style.position = origPos;
      el.style.overflow = origOverflow;
    }, 500);
  }, []);

  return ripple;
}
