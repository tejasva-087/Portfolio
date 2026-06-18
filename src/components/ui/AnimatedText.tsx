"use client";

import { useEffect, useRef, useState } from "react";

type AnimationVariant = "slide-up" | "slide-down" | "fade" | "blur-in";

interface AnimatedTextProps {
  text: string;
  textSize?: string;
  fontWeight?: string;
  textColor?: string;
  fontFamily?: string;
  letterSpacing?: string;
  lineHeight?: string;
  className?: string;
  variant?: AnimationVariant;
  staggerMs?: number;
  durationMs?: number;
  delayMs?: number;
  splitBy?: "chars" | "words";
  trigger?: "mount" | "viewport";
  replay?: boolean;
}

const VARIANT_STYLES: Record<
  AnimationVariant,
  { from: string; to: string; clipFrom?: string; clipTo?: string }
> = {
  "slide-up": {
    from: "translate-y-[110%] opacity-0",
    to: "translate-y-0 opacity-100",
  },
  "slide-down": {
    from: "-translate-y-[110%] opacity-0",
    to: "translate-y-0 opacity-100",
  },
  fade: {
    from: "opacity-0",
    to: "opacity-100",
  },
  "blur-in": {
    from: "opacity-0 blur-[12px]",
    to: "opacity-100 blur-0",
  },
};

export default function AnimatedText({
  text,
  textSize = "text-5xl",
  fontWeight = "font-bold",
  textColor = "",
  fontFamily = "",
  letterSpacing = "",
  lineHeight = "",
  className = "",
  variant = "slide-up",
  staggerMs = 35,
  durationMs = 700,
  delayMs = 0,
  splitBy = "chars",
  trigger = "viewport",
  replay = false,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(trigger === "mount");
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (replay) {
      setVisible(false);
      const t = setTimeout(() => setVisible(trigger === "mount"), 50);
      setKey((k) => k + 1);
      return () => clearTimeout(t);
    }
  }, [text]);

  useEffect(() => {
    if (trigger !== "viewport") return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, key]);

  const units: { token: string; isSpace: boolean }[] = [];

  if (splitBy === "words") {
    text.split(" ").forEach((word, i, arr) => {
      units.push({ token: word, isSpace: false });
      if (i < arr.length - 1) units.push({ token: "\u00A0", isSpace: true });
    });
  } else {
    Array.from(text).forEach((char) => {
      units.push({ token: char, isSpace: char === " " });
    });
  }

  const { from, to } = VARIANT_STYLES[variant];
  const needsClip = variant === "slide-up" || variant === "slide-down";

  const typographyClasses = [
    textSize,
    fontWeight,
    textColor,
    fontFamily,
    letterSpacing,
    lineHeight,
  ]
    .filter(Boolean)
    .join(" ");

  let animIdx = 0;

  return (
    <div
      ref={containerRef}
      aria-label={text}
      className={`flex flex-wrap ${typographyClasses} ${className}`}
      style={{ willChange: "transform" }}
    >
      {units.map((unit, i) => {
        if (unit.isSpace && splitBy === "chars") {
          return (
            <span key={i} className="inline-block">
              &nbsp;
            </span>
          );
        }

        const idx = animIdx++;
        const delay = delayMs + idx * staggerMs;

        const inner = (
          <span
            key={`${key}-${i}`}
            className={`inline-block transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible ? to : from
            }`}
            style={{
              transitionDuration: `${durationMs}ms`,
              transitionDelay: visible ? `${delay}ms` : "0ms",
            }}
          >
            {unit.token === " " || unit.token === "\u00A0"
              ? "\u00A0"
              : unit.token}
          </span>
        );

        if (needsClip) {
          return (
            <span
              key={`clip-${key}-${i}`}
              className="inline-block overflow-hidden"
              style={
                splitBy === "words" && unit.token !== "\u00A0"
                  ? { marginRight: "0.25em" }
                  : undefined
              }
            >
              {inner}
            </span>
          );
        }

        return (
          <span
            key={`wrap-${key}-${i}`}
            style={
              splitBy === "words" && !unit.isSpace
                ? { marginRight: "0.25em" }
                : undefined
            }
          >
            {inner}
          </span>
        );
      })}
    </div>
  );
}
