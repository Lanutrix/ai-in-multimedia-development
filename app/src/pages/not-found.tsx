import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="text-gradient text-7xl font-bold">404</p>
      <p className="mt-4 text-xl font-semibold">Страница не найдена</p>
      <p className="mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
        Похоже, эта ссылка не существует. Вернитесь на главную или откройте
        каталог инструментов.
      </p>
      <Button
        className="mt-8 bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400"
        render={<Link to="/" />}
      >
        <ArrowLeft className="mr-1 size-4" /> На главную
      </Button>
    </div>
  );
}
