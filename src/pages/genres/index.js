import Link from "next/link";

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
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-4">Movie Genres</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {genres.map((genre) => (
          <div key={genre.id} style={{borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)', padding: '1rem'}}>
            <Link href={`/genres/${genre.id}`}>
              <div>{genre.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
