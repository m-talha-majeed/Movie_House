
import { NextResponse } from 'next/server';
import { movies, genres } from '@/lib/data';

export async function GET(request, { params }) {
  const genreId = params.id;
  const genre = genres.find((g) => g.id === genreId);

  if (!genre) {
    return NextResponse.json({ error: 'Genre not found' }, { status: 404 });
  }

  const filteredMovies = movies.filter((movie) =>
    movie.genreIds.includes(genreId)
  );

  return NextResponse.json(filteredMovies);
}
