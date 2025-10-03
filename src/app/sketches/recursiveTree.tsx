import type { default as P5 } from "p5";

export const recursiveTreeSketch = (p: P5) => {
  let angle: number;
  let bgColor: string;

  p.setup = () => {
    p.createCanvas(710, 400);
    p.colorMode(p.HSB);
    p.angleMode(p.DEGREES);

    bgColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-background")
      .trim();
  };

  p.draw = () => {
    p.colorMode(p.RGB);
    p.background(bgColor);
    p.pop();

    p.colorMode(p.HSB);

    angle = (p.mouseX / p.width) * 90;
    angle = p.min(angle, 90);

    p.push();
    p.translate(p.width / 2, p.height);

    // Trunk
    p.stroke(45, 20, 73);
    p.strokeWeight(3);
    p.line(0, 0, 0, -120);

    p.translate(0, -120);
    branch(120, 0);
    p.pop();
  };

  const branch = (h: number, level: number) => {
    const hue = p.map(level, 0, 10, 45, 165);
    const saturation = p.map(level, 0, 10, 20, 15);
    const brightness = p.map(level, 0, 10, 73, 76);

    p.stroke(hue, saturation, brightness);
    p.strokeWeight(p.map(h, 2, 120, 1, 3));

    h *= 0.66;

    if (h > 2) {
      // Right branch
      p.push();
      p.rotate(angle);
      p.line(0, 0, 0, -h);
      p.translate(0, -h);
      branch(h, level + 1);
      p.pop();

      // Left branch
      p.push();
      p.rotate(-angle);
      p.line(0, 0, 0, -h);
      p.translate(0, -h);
      branch(h, level + 1);
      p.pop();
    }
  };
};
