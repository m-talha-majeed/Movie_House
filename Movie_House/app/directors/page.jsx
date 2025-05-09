
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { directors as allDirectors } from '@/lib/data'; // Import director data
import { User } from 'lucide-react'; // Import User icon

// Fetch data directly within the Server Component
async function getDirectorsData() {
  // In a real app, fetch from DB/API
  // Simulate delay if needed: await new Promise(res => setTimeout(res, 1000));
  return allDirectors;
}

// This is a Server Component by default in the App Router
export default async function DirectorsListPage() {
  const directors = await getDirectorsData();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Directors</h1>

      {directors && directors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {directors.map((director) => (
            <Card key={director.id} className="transition-shadow duration-300 hover:shadow-md">
              {/* Link to the statically generated director detail page */}
              <Link href={`/directors/${director.id}`} passHref>
                 <CardHeader>
                   <div className="flex items-center gap-3 mb-2">
                     <User className="w-5 h-5 text-accent" />
                     <CardTitle className="text-xl">{director.name}</CardTitle>
                   </div>
                  <CardDescription className="line-clamp-3 h-[60px] overflow-hidden">
                    {director.biography}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="link" className="p-0 h-auto">View Details</Button>
                 </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No directors found.</p>
      )}
    </div>
  );
}
