import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';


export function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col">
        {/* Image removed */}
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-semibold mb-2 truncate">{movie.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-4">{movie.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{movie.rating.toFixed(1)}</span>
          </div>
          <Badge variant="secondary">{movie.releaseYear}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
