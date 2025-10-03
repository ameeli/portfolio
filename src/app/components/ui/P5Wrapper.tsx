"use client";
import { useEffect, useRef } from "react";
import type { default as P5 } from "p5";

interface P5WrapperProps {
  sketch: (p: P5) => void;
  className?: string;
}

export default function P5Wrapper({ sketch, className }: P5WrapperProps) {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let p5Instance: P5 | null = null;

    import("p5").then((p5Module) => {
      const p5 = p5Module.default;
      p5Instance = new p5(sketch, sketchRef.current!);
    });

    return () => {
      p5Instance?.remove();
    };
  }, [sketch]);

  return <div ref={sketchRef} className={className}></div>;
}
