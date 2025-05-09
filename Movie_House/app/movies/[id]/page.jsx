
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Clapperboard, ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { movies as allMovies, directors as allDirectors, genres as allGenres } from '@/lib/data'; // Import all data
import { notFound } from 'next/navigation'; // Import notFound

// Simulate fetching a single movie with related data (used by the Page component)
async function getMovieData(movieId) {
  const movie = allMovies.find((m) => m.id === movieId);

  if (!movie) {
    return null; // Indicate not found
  }

  const director = allDirectors.find(d => d.id === movie.directorId);
  const movieGenres = movie.genreIds
    .map(id => allGenres.find(g => g.id === id))
    .filter(g => !!g); // Filter out nulls if a genre ID doesn't match

  return {
    movie,
    director: director || null,
    genres: movieGenres,
  };
}

// Define paths to pre-render at build time
export async function generateStaticParams() {
  // Pre-render paths for all movies in the mock data
  const paths = allMovies.map((movie) => ({
    id: movie.id, // Param name must match the folder name [id]
  }));
  return paths;
}

// Configure ISR for revalidation if needed
export const revalidate = 60; // Revalidate every 60 seconds

// The Page component is now an async Server Component
export default async function MovieDetailsPage({ params }) {
    const movieId = params.id;
    const data = await getMovieData(movieId);

    // Handle not found case
    if (!data) {
       notFound(); // Use notFound to render the not-found page
    }

    const { movie, director, genres: movieGenres } = data;

    return (
        <div className="container mx-auto py-12 px-4">
        <Button asChild variant="ghost" className="mb-6">
            <Link href="/movies">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Movies
            </Link>
        </Button>
        <Card className="overflow-hidden">
            <CardHeader className="p-6">
                <CardTitle className="text-3xl lg:text-4xl font-bold">{movie.title}</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">{movie.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium text-foreground">{movie.rating.toFixed(1)}</span>/10
                </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.releaseYear}</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-md font-semibold mb-2">Genres</h3>
                    <div className="flex flex-wrap gap-2">
                    {movieGenres && movieGenres.length > 0 ? (
                        movieGenres.map((genre) => (
                           <Link href={`/movies?genre=${genre.id}`} key={genre.id}>
                              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">{genre.name}</Badge>
                           </Link>
                        ))
                        ) : (
                        <span className="text-sm text-muted-foreground">N/A</span>
                        )
                    }
                    </div>
                </div>

                <div>
                <h3 className="text-md font-semibold mb-1">Director</h3>
                    {director ? (
                    <Button variant="link" asChild className="p-0 h-auto text-base">
                        {/* Corrected Link: Point to the director's detail page */}
                        <Link href={`/directors/${director.id}`} className="flex items-center gap-1">
                        <Clapperboard className="w-4 h-4" />
                        {director.name}
                        </Link>
                    </Button>
                    ) : (
                    <span className="text-sm text-muted-foreground">Information unavailable</span>
                    )}
                </div>
            </CardContent>
        </Card>
        </div>
    );
}

    