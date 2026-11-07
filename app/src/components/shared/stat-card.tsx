import type { LucideIcon } from "lucide-react";
import { NumberTicker } from "@/components/magic/number-ticker";

export function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
}: {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="glass rounded-2xl p-6">
      <Icon className="size-5 text-indigo-300" />
      <p className="mt-3 text-4xl font-bold tracking-tight">
        <NumberTicker value={value} suffix={suffix} />
      </p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </div>
  );
}
