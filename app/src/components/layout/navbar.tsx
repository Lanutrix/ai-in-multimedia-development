import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
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

/** Переключатель светлой/тёмной темы (сохраняется в localStorage). */
function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const apply = (dark: boolean) => {
      setIsDark(dark);
      document.documentElement.classList.toggle("dark", dark);
      try {
        localStorage.setItem("theme", dark ? "dark" : "light");
      } catch {
        /* приватный режим — не страшно */
      }
    };
    const onChange = (e: MediaQueryListEvent) => apply(e.matches);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener?.("change", onChange);
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener?.("change", onChange);
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={() => {
        const next = !document.documentElement.classList.contains("dark");
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
          localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
          /* noop */
        }
      }}
      aria-label="Переключить тему"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-zinc-950/70">
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
                  "rounded-full px-3 py-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
                  isActive &&
                    "bg-zinc-900/[0.06] text-zinc-900 dark:bg-white/10 dark:text-zinc-100",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="border-zinc-300 bg-transparent hover:bg-zinc-100 dark:border-white/15 dark:bg-transparent dark:hover:bg-white/10"
            render={<Link to="/about" />}
          >
            О проекте
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-zinc-200/70 bg-white/95 px-4 py-3 dark:border-white/5 dark:bg-zinc-950/95 lg:hidden">
          <div className="grid gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5",
                    isActive && "bg-zinc-900/[0.06] text-zinc-900 dark:bg-white/10 dark:text-white",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5"
            >
              О проекте
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
