import { useEffect, useRef } from "react";

type UseMouseParallaxOptions = {
  count: number;
  stiffness?: number;
  damping?: number;
  maxDist?: number;
  /** how strongly each item reacts, by index — defaults to a mild variation */
  depthFor?: (index: number) => number;
};

export function useMouseParallax({
  count, // how many items you're animating
  stiffness = 0.06, // how hard the spring pulls toward its target each frame. Higher = snappier/faster response.
  damping = 0.82, // how much velocity bleeds off each frame. Higher = less oscillation/bounce, more like moving through syrup.
  maxDist = 18, // a hard clamp so no item can ever drift more than this many pixels from its resting position, regardless of how fast the mouse moves.
  depthFor = (i) => 0.012 + (i % 3) * 0.006, // a function mapping item index → a multiplier. This is what creates the parallax illusion: items with a bigger multiplier move more in response to mouse movement, appearing "closer," while small-multiplier items barely move, appearing "farther away."
}: UseMouseParallaxOptions) {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const target = useRef({ x: 0, y: 0 });
  const springs = useRef(
    Array.from({ length: count }, () => ({ cx: 0, cy: 0, vx: 0, vy: 0 })),
  );
  const rafRef = useRef<number>(0);

  // Spring animation loop
  useEffect(() => {
    const tick = () => {
      springs.current.forEach((s, i) => {
        const el = itemRefs.current[i];
        if (!el) return;

        const depth = depthFor(i);
        const tx = Math.max(
          -maxDist,
          Math.min(maxDist, target.current.x * depth),
        );
        const ty = Math.max(
          -maxDist,
          Math.min(maxDist, target.current.y * depth),
        );

        const ax = (tx - s.cx) * stiffness;
        const ay = (ty - s.cy) * stiffness;
        s.vx = s.vx * damping + ax;
        s.vy = s.vy * damping + ay;
        s.cx += s.vx;
        s.cy += s.vy;

        el.style.transform = `translate(${s.cx.toFixed(2)}px, ${s.cy.toFixed(2)}px)`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [stiffness, damping, maxDist, depthFor]);

  // Mouse tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX - window.innerWidth / 2;
      target.current.y = e.clientY - window.innerHeight / 2;
    };
    const onLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    itemRefs.current[index] = el;
  };

  return { setRef };
}
