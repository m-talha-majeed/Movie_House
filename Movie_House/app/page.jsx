
import { MovieCard } from '@/components/MovieCard';
import { movies as allMovies } from '@/lib/data'; // Using mock data

// Simulate fetching data - replace with actual data fetching logic if needed
async function getTrendingMovies() {
  // In a real app, this would fetch from an API or database
  // For now, filter the mock data
  // Add a delay to simulate network latency if needed for loading states
  // await new Promise(resolve => setTimeout(resolve, 1000));
  return allMovies.filter(movie => movie.trending);
}

// Use revalidate for Incremental Static Regeneration (ISR)
export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const trendingMovies = await getTrendingMovies();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Trending Movies</h1>
      {trendingMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No trending movies found.</p>
      )}
    </div>
  );
}

// Removed getStaticProps as fetching is done directly in the component body
