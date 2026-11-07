import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Главная", end: true },
  { to: "/basics", label: "Основы" },
  { to: "/pipeline", label: "Этапы" },
  { to: "/tools", label: "Каталог" },
  { to: "/comparison", label: "Сравнение" },
  { to: "/cases", label: "Кейсы" },
  { to: "/ethics", label: "Этика" },
  { to: "/trends", label: "Тренды" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400">
            <Sparkles className="size-4.5 text-white" />
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">
            ИИ <span className="text-gradient">×</span> Медиа
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100",
                  isActive && "bg-white/10 text-zinc-100",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant="outline"
            size="sm"
            className="border-white/15 bg-transparent hover:bg-white/10"
            render={<Link to="/about" />}
          >
            О проекте
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-zinc-950/95 px-4 py-3 lg:hidden">
          <div className="grid gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5",
                    isActive && "bg-white/10 text-white",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5"
            >
              О проекте
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
