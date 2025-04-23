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

export async function getServerSideProps({ params }) {
  const genreId = params.id;
  const filteredMovies = movies.filter((movie) => movie.genreId === genreId);

  return {
    props: {
      genreId,
      filteredMovies,
    },
  };
}

export default function GenreMoviesPage({ genreId, filteredMovies }) {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-4">Movies in Genre: {genreId}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
          <div className="hover:cursor-pointer" style={{borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)', padding: '1rem'}}>
            <div style={{fontSize: '1.25rem', fontWeight: '600'}}>{movie.title}</div>
            <div className="text-gray-600">Rating: {movie.rating}</div>
            <div>
              {movie.description.substring(0, 100)}...
              <div className="text-blue-500 underline block mt-2">
                Learn More <ArrowRight className="inline-block ml-1" size={16} />
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
