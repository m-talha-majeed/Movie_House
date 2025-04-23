import Link from 'next/link';

const genres = [
  {
    "id": "g1",
    "name": "Science Fiction"
  },
  {
    "id": "g3",
    "name": "Adventure"
  },
  {
    "id": "g4",
    "name": "Drama"
  },
  {
    "id": "g5",
    "name": "Thriller"
  }
];

export async function getServerSideProps() {
  return {
    props: {
      genres: genres,
    },
  };
}

export default function GenresPage({ genres }) {
  return (
    <div className="container">
      <h2 className="genres-title">Movie Genres</h2>
      <div className="genres-grid">
        {genres.map((genre) => (
          <div key={genre.id} className="genre-card">
            <Link href={`/genres/${genre.id}`} className="genre-link">
              <div className="genre-name">{genre.name}</div>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          margin: 20px auto;
          padding: 20px;
          max-width: 800px;
        }

        .genres-title {
          font-size: 2em;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }

        .genres-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 15px;
        }

        .genre-card {
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 8px;
          transition: background-color 0.2s;
          text-align: center;
        }

        .genre-card:hover {
          background-color: #f9f9f9;
        }

        .genre-link {
          text-decoration: none;
          color: inherit;
        }

        .genre-name {
          font-size: 1.1em;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
