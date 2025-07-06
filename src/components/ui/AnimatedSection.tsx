"use client";

import React from "react";
import { motion } from "framer-motion";


interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", delay = 0, style }) => {
  return (
    <motion.section
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
