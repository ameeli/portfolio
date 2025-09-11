"use client";
import { useRef } from "react";
import { motion } from "motion/react";

export default function Motion() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef}>
      <motion.div
        drag
        animate={{ rotate: 360 }}
        className="rounded-md h-25 w-25 bg-primary"
        dragConstraints={constraintsRef}
        dragElastic={0.5}
        whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
      />
    </div>
  );
}
