"use client";
import { useRef } from "react";
import { motion } from "motion/react";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#dd00ee",
  borderRadius: 10,
};

export default function Motion() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef}>
      <motion.div
        drag
        style={box}
        dragConstraints={constraintsRef}
        dragElastic={0.5}
        whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
        animate={{ rotate: 360 }}
      />
    </div>
  );
}
