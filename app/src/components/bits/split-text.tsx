import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Анимация заголовка: слова выезжают снизу по очереди (стиль React Bits «Split Text»).
 * Наблюдателем выступает видимая обёртка: обрезанный внутри overflow-hidden
 * элемент никогда не считается пересекающим вьюпорт.
 */
export function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  /** Класс для каждого слова — например, градиент текста. */
  wordClassName?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      transition={{ staggerChildren: 0.045, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden pb-1 -mb-1">
          <motion.span
            className={cn("mr-[0.28em] inline-block", wordClassName)}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
