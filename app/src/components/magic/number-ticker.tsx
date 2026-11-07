import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

/** Счётчик, «накручивающийся» при появлении в кадре (стиль Magic UI «Number Ticker»). */
export function NumberTicker({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const spring = useSpring(0, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString("ru-RU"));

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
