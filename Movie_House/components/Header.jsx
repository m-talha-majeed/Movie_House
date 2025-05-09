import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Film } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
           <Film className="h-6 w-6 text-accent" />
          <span className="font-bold text-primary">CineVerse</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
             <Button variant="ghost" asChild>
               <Link href="/">Home</Link>
             </Button>
            <Button variant="ghost" asChild>
               <Link href="/movies">Movies</Link>
             </Button>
             <Button variant="ghost" asChild>
               <Link href="/genres">Genres</Link>
             </Button>
             <Button variant="ghost" asChild>
               <Link href="/directors">Directors</Link>
             </Button>
             <Button variant="ghost" asChild>
               <Link href="/help">Help</Link>
             </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
