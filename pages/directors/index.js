import Link from 'next/link';

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

export async function getStaticProps() {
  return {
    props: {
      directors: directors,
      movies: movies,
    },
  };
}

export default function DirectorsPage({ directors, movies }) {
  return (
    <div className="container">
      <h2 className="directors-title">Directors</h2>
      <div className="directors-grid">
        {directors.map((director) => {
          const directedMovies = movies.filter((movie) => movie.directorId === director.id);

          return (
            <div key={director.id} className="director-card">
              <Link href={`/directors/${director.id}`} className="director-link">
                <div className="director-name">
                  {director.name}
                </div>
              </Link>
              <div className="director-details">
                <p className="director-bio">{director.biography}</p>
                <h3 className="movies-directed">Movies Directed:</h3>
                {directedMovies.length > 0 ? (
                  <ul className="movie-list">
                    {directedMovies.map((movie) => (
                      <li key={movie.id} className="movie-item">{movie.title}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No movies directed by this director.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          margin: 20px auto;
          padding: 20px;
          max-width: 1000px;
        }

        .directors-title {
          font-size: 2em;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }

        .directors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .director-card {
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 8px;
          transition: background-color 0.2s;
        }

        .director-card:hover {
          background-color: #f9f9f9;
        }

        .director-link {
          text-decoration: none;
          color: inherit;
        }

        .director-name {
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .director-details {
          margin-top: 10px;
        }

        .director-bio {
          font-size: 1.1em;
          line-height: 1.4;
          color: #666;
          margin-bottom: 10px;
        }

        .movies-directed {
          font-size: 1.2em;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .movie-list {
          list-style: none;
          padding: 0;
        }

        .movie-item {
          font-size: 1em;
          margin-bottom: 3px;
        }
      `}</style>
    </div>
  );
}
