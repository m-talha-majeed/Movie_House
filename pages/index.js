import Link from 'next/link';

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
    <div className="trending-movies-grid">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`} className="movie-card-link">
          <div className="movie-card">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-rating">{movie.rating}</div>
            </div>
        </Link>
      ))}
      <style jsx>{`
        .trending-movies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .movie-card-link {
          text-decoration: none;
          color: inherit;
        }

        .movie-card {
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 8px;
          transition: background-color 0.2s;
          text-align: center;
        }

        .movie-card:hover {
          background-color: #f9f9f9;
        }

        .movie-title {
          font-size: 1.2em;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .movie-rating {
          font-size: 1em;
          color: #777;
        }
      `}</style>
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
    <div className="container">
      <section className="trending-section">
        <h2 className="trending-title">Trending Movies</h2>
        <TrendingMovies movies={trendingMovies} />
      </section>

      <div className="browse-genres-link">
        <Link href='/genres' className="browse-genres-button">Browse Genres</Link>
      </div>
      <style jsx>{`
        .container {
          margin: 20px auto;
          padding: 20px;
          max-width: 900px;
        }

        .trending-section {
          margin-bottom: 30px;
        }

        .trending-title {
          font-size: 2em;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }

        .browse-genres-link,
        .browse-directors-link,
        .browse-movies-link {
          text-align: center;
          margin-top: 10px;
        }

        .browse-genres-button,
        .browse-directors-button,
        .browse-movies-button {
          background-color: #e67e22;
          color: white;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.2s;
          margin: 0 5px;
        }

        .browse-genres-button:hover,
        .browse-directors-button:hover,
        .browse-movies-button:hover {
          background-color: #d35400;
        }
      `}</style>
    </div>
  );
}
