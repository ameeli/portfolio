"use client";
import { useEffect, useRef } from "react";
import type { default as P5 } from "p5";

export default function CanvasSketch() {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let p5Instance: P5 | null = null;

    import("p5").then((p5Module) => {
      const p5 = p5Module.default;

      const sketch = (p: P5) => {
        p.setup = () => {
          p.createCanvas(600, 400, p.WEBGL);
        };

        p.draw = () => {
          p.background(240);
          p.rotateY(p.frameCount * 0.01);
          p.box(100);
        };
      };

      p5Instance = new p5(sketch, sketchRef.current!);
    });

    return () => {
      p5Instance?.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
}
