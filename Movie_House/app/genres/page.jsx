
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { genres as allGenres } from '@/lib/data'; // Import data
import { Tag } from 'lucide-react';

// Simulate fetching data server-side (now directly in the component)
async function getGenresData() {
  // In a real app, fetch from DB/API
  return allGenres;
}

// By default, App Router pages are Server Components and render dynamically (SSR-like).
// You can add caching/revalidation options using fetch or segment configs if needed.
// export const dynamic = 'force-dynamic'; // Uncomment for true SSR on every request
// export const revalidate = 60; // Uncomment for ISR behavior

export default async function GenresPage() {
  // Fetch data directly within the Server Component
  const genres = await getGenresData();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Genres</h1>
        {genres && genres.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {genres.map((genre) => (
              <Card key={genre.id} className="transition-shadow duration-300 hover:shadow-md">
                 {/* Link to filter movies on the /movies page */}
                 <Link href={`/movies?genre=${genre.id}`} passHref>
                  <CardContent className="p-6 flex items-center justify-between cursor-pointer">
                     <div className="flex items-center gap-3">
                       <Tag className="w-5 h-5 text-accent" />
                       <span className="text-lg font-medium">{genre.name}</span>
                     </div>
                  </CardContent>
                 </Link>
              </Card>
            ))}
          </div>
        ) : (
             <p className="text-muted-foreground">No genres found.</p>
        )}
    </div>
  );
}

// Removed getServerSideProps as data fetching is now done directly in the Server Component body
