import { useEffect } from "react";

/**
 * Applies a typing animation to all h1, h2, h3 elements
 * as they enter the viewport using IntersectionObserver.
 */
export function useScrollHeadingType() {
  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3");
    const dataMap = new Map<Element, { full: string; typed: boolean }>();

    headings.forEach((h) => {
      const text = h.textContent || "";
      dataMap.set(h, { full: text, typed: false });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const data = dataMap.get(entry.target);
          if (!data || data.typed) return;
          data.typed = true;
          observer.unobserve(entry.target);

          const el = entry.target as HTMLElement;
          const full = data.full;
          el.textContent = "";
          el.style.borderRight = "2px solid hsl(186, 100%, 50%)";

          let i = 0;
          const speed = Math.max(30, 1200 / full.length); // adaptive speed
          const iv = setInterval(() => {
            i++;
            el.textContent = full.slice(0, i);
            if (i >= full.length) {
              clearInterval(iv);
              setTimeout(() => {
                el.style.borderRight = "none";
              }, 600);
            }
          }, speed);
        });
      },
      { threshold: 0.3 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);
}
