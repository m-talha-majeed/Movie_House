import Link from "next/link";

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

export async function getStaticPaths() {
  return {
    paths: movies.map((movie) => ({ params: { id: movie.id } })),
    fallback: false,
  };
}

async function getMovie(id) {
  const movie = movies.find((m) => m.id === id);
  return movie || null;
}

async function getDirector(directorId) {
    const director = directors.find((d) => d.id === directorId);
    return director || null;
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const movie = await getMovie(id);
  const director = movie ? await getDirector(movie.directorId) : null;

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
      director,
    },
    revalidate: 10,
  };
}

export default function MovieDetail({ movie, director }) {
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div style={{borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)', padding: '1rem'}}>
        <div style={{fontSize: '2rem', fontWeight: '600'}}>{movie.title}</div>
        <div className="text-gray-600">Rating: {movie.rating}</div>
        <div>{movie.description}</div>
        <div>Release Year: {movie.releaseYear}</div>
        <div>
          Director:
          {director ? (
            <Link href={`/directors/${director.id}`} className="text-blue-500 underline">
              {director.name}
            </Link>
          ) : (
            "Unknown"
          )}
        </div>
      </div>
    </div>
  );
}
