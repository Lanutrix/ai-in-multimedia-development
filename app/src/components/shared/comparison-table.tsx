import type { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/[0.02]">
      <Table>
        <TableHeader>
          <TableRow className="border-zinc-200 hover:bg-transparent dark:border-white/10">
            {headers.map((h) => (
              <TableHead key={h} className="whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} className="border-zinc-100 dark:border-white/5">
              {row.map((cell, j) => (
                <TableCell
                  key={j}
                  className={
                    j === 0
                      ? "whitespace-nowrap font-medium text-zinc-900 dark:text-zinc-100"
                      : "text-zinc-600 dark:text-zinc-400"
                  }
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
