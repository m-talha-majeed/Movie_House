
import { NextResponse } from 'next/server';
import { movies, directors, genres } from '@/lib/data'; // Import directors and genres

export async function GET(request, { params }) {
  const movieId = params.id;
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
  }

  // Fetch related data (director and genres) based on IDs in the movie object
  const director = directors.find(d => d.id === movie.directorId);
  const movieGenres = movie.genreIds.map(id => genres.find(g => g.id === id)).filter(g => !!g);

  // Construct the response object including related data
  const movieDetails = {
    ...movie,
    director: director || null, // Include director object or null if not found
    genres: movieGenres, // Include array of genre objects
  };


  return NextResponse.json(movieDetails);
}
