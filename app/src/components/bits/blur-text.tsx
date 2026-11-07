import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Анимация текста: слова проявляются из размытия (стиль React Bits «Blur Text»). */
export function BlurText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("inline-flex flex-wrap", className)} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.28em] inline-block"
          initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.45, delay: delay + i * 0.035 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
