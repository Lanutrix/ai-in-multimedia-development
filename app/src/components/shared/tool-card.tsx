import { Check, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/bits/spotlight-card";
import {
  AVAILABILITY_META,
  CATEGORY_META,
  REGION_META,
  type Tool,
} from "@/data/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  const category = CATEGORY_META[tool.category];
  const region = REGION_META[tool.region];
  const availability = AVAILABILITY_META[tool.russia];
  const Icon = category.icon;

  return (
    <SpotlightCard className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Icon className="size-5 text-indigo-300" />
          </span>
          <div>
            <p className="font-semibold leading-tight">{tool.name}</p>
            <p className="text-xs text-zinc-500">{tool.developer}</p>
          </div>
        </div>
        <Badge variant="outline" className={region.badgeClass}>
          {region.labelShort}
        </Badge>
      </div>

      <p className="mt-3.5 text-sm leading-relaxed text-zinc-400">
        {tool.description}
      </p>

      <ul className="mt-3.5 grid gap-1.5">
        {tool.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-zinc-300">
            <Check className="mt-0.5 size-3.5 shrink-0 text-indigo-400" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="outline" className={availability.className}>
            {availability.label}
          </Badge>
          {tool.version && (
            <Badge variant="outline" className="border-white/10 text-zinc-400">
              {tool.version}
            </Badge>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/5 pt-3">
          <span className="text-xs text-zinc-500">{tool.pricing}</span>
          {tool.url && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1.5 px-2 text-xs text-zinc-300 hover:text-white"
              render={
                <a href={tool.url} target="_blank" rel="noreferrer" />
              }
            >
              Сайт <ExternalLink className="size-3" />
            </Button>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
