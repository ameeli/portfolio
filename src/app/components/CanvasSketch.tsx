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
        let angle: number;

        p.setup = () => {
          p.createCanvas(710, 400);
          p.colorMode(p.HSB);
          p.angleMode(p.DEGREES);
        };

        p.draw = () => {
          p.background(0);
          angle = (p.mouseX / p.width) * 90;
          angle = p.min(angle, 90);

          p.push();
          p.translate(p.width / 2, p.height);

          p.stroke(0, 255, 255);
          p.line(0, 0, 0, -120);

          p.translate(0, -120);

          branch(120, 0);
          p.pop();
        };

        const branch = (h: number, level: number) => {
          p.stroke(level * 25, 255, 255);

          h *= 0.66;

          if (h > 2) {
            // Draw the right branch
            p.push();
            p.rotate(angle);
            p.line(0, 0, 0, -h);
            p.translate(0, -h);
            branch(h, level + 1);
            p.pop();

            // Draw the left branch
            p.push();
            p.rotate(-angle);
            p.line(0, 0, 0, -h);
            p.translate(0, -h);
            branch(h, level + 1);
            p.pop();
          }
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
