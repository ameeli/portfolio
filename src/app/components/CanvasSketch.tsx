"use client";
import P5Wrapper from "./ui/P5Wrapper";
import { recursiveTreeSketch } from "@/app/sketches/recursiveTree";

export default function CanvasSketch() {
  return <P5Wrapper sketch={recursiveTreeSketch} />;
}
