import Link from "next/link";

const directors = [
    {
      "id": "d1",
      "name": "Christopher Nolan",
      "biography": "British-American director known for complex storytelling and visual innovation."
    },
    {
      "id": "d3",
      "name": "Baz Luhrmann",
      "biography": "Australian director known for visually extravagant films like Moulin Rouge! and The Great Gatsby."
    },
    {
      "id": "d4",
      "name": "Bong Joon-ho",
      "biography": "South Korean filmmaker acclaimed for combining drama, social commentary, and thrills."
    },
    {
      "id": "d5",
      "name": "The Wachowskis",
      "biography": "Sibling duo behind groundbreaking sci-fi films including The Matrix trilogy."
    },
    {
      "id": "d6",
      "name": "Damien Chazelle",
      "biography": "American director known for musical dramas like Whiplash and La La Land."
    }
  ];
  
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

export async function getStaticPaths() {
  const paths = directors.map((director) => ({
    params: { id: director.id },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const director = directors.find((d) => d.id === params.id);
  const directedMovies = movies.filter((movie) => movie.directorId === params.id);

  return {
    props: {
      director,
      directedMovies,
    },
  };
}

export default function DirectorDetailPage({ director, directedMovies }) {
  if (!director) {
    return <div>Director not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-4">Director: {director.name}</h2>
      <p>{director.biography}</p>

      <h3 className="text-lg font-semibold mt-4">Movies Directed:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {directedMovies.length > 0 ? (
          directedMovies.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
            <div className="hover:cursor-pointer" style={{borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)', padding: '1rem'}}>
              <div style={{fontSize: '1.5rem', fontWeight: '600'}}>{movie.title}</div>
              <div>{movie.description.substring(0, 100)}...</div>
            </div>
            </Link>
          ))
        ) : (
          <p>No movies directed by this director.</p>
        )}
      </div>
    </div>
  );
};
