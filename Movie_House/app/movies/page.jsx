
import React from 'react';
import { MovieFilterClient } from '@/components/MovieFilterClient';
import { genres as allGenres, movies as allMovies } from '@/lib/data'; // Direct import for SSG props

// Simulate fetching data server-side (now directly in the component)
async function getPageData() {
  // In a real app, fetch from DB/API
  return {
    movies: allMovies,
    genres: allGenres,
  };
}

// Configure Incremental Static Regeneration (ISR) for this page
export const revalidate = 60; // Revalidate every 60 seconds

export default async function MoviesPage() {
  // Fetch data directly within the Server Component
  const { movies, genres } = await getPageData();

  // Pass the fetched data to the Client Component responsible for filtering
  return <MovieFilterClient movies={movies} genres={genres} />;
}

// Removed the getStaticProps function as it's not used in App Router
