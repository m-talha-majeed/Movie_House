
'use client';

import React, { useState, useMemo } from 'react';
import { MovieCard } from '@/components/MovieCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function MovieFilterClient({ movies, genres }) {
  const [selectedGenre, setSelectedGenre] = useState('all');

  const filteredMovies = useMemo(() => {
    if (selectedGenre === 'all' || !selectedGenre) {
      return movies;
    }
    return movies.filter((movie) => movie.genreIds.includes(selectedGenre));
  }, [movies, selectedGenre]);

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">All Movies</h1>
        <div className="w-full sm:w-auto min-w-[180px]">
          <Select onValueChange={handleGenreChange} defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Filter by Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              {genres.map((genre) => (
                <SelectItem key={genre.id} value={genre.id}>
                  {genre.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No movies found{selectedGenre !== 'all' && ' for this genre'}.
          </p>
        )}
      </div>
    </div>
  );
}
