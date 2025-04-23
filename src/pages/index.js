import Link from "next/link";
import { ArrowRight } from "lucide-react";

const movies = [
    {
      "id": "1",
      "title": "Inception",
      "directorId": "d1",
      "description": "A mind-bending thriller about dreams within dreams.",
      "releaseYear": 2010,
      "genreId": "g1",
      "rating": 8.8
    },
    {
      "id": "2",
      "title": "The Great Gatsby",
      "directorId": "d3",
      "description": "A mysterious millionaire throws lavish parties in 1920s New York.",
      "releaseYear": 2013,
      "genreId": "g4",
      "rating": 7.2
    },
    {
      "id": "3",
      "title": "Interstellar",
      "directorId": "d1",
      "description": "A team of explorers travel through a wormhole in space.",
      "releaseYear": 2014,
      "genreId": "g3",
      "rating": 8.6
    },
    {
      "id": "4",
      "title": "Parasite",
      "directorId": "d4",
      "description": "A poor family schemes to become employed by a wealthy household.",
      "releaseYear": 2019,
      "genreId": "g5",
      "rating": 8.6
    },
    {
      "id": "5",
      "title": "The Matrix",
      "directorId": "d5",
      "description": "A hacker discovers the reality he lives in is a simulation.",
      "releaseYear": 1999,
      "genreId": "g1",
      "rating": 8.7
    },
    {
      "id": "6",
      "title": "La La Land",
      "directorId": "d6",
      "description": "A jazz musician and an aspiring actress fall in love in Los Angeles.",
      "releaseYear": 2016,
      "genreId": "g4",
      "rating": 8.0
    }
  ];

function TrendingMovies({ movies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`} className="hover:cursor-pointer">
          <div style={{border: '1px solid #e2e8f0', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)'}} className="p-4">
            <div>{movie.title}</div>
            <div>{movie.rating}</div>
            <div className="text-blue-500 underline block mt-2">
              Learn More <ArrowRight className="inline-block ml-1" size={16} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      trendingMovies: movies.slice(0, 3),
    },
    revalidate: 10,
  };
}

export default function Home({ trendingMovies }) {
  return (
    <div className="container mx-auto py-10">
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Trending Movies</h2>
        <TrendingMovies movies={trendingMovies} />
      </section>

      <Link href='/genres' style={{backgroundColor: '#e67e22', color: 'white', fontWeight: 'bold'}} className="py-2 px-4 rounded">Browse Genres</Link>
    </div>
  );
}
