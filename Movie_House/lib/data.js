

export const genres = [
    { id: '1', name: 'Action' },
    { id: '2', name: 'Comedy' },
    { id: '3', name: 'Drama' },
    { id: '4', name: 'Sci-Fi' },
    { id: '5', name: 'Horror' },
  ];
  
  export const directors = [
    { id: '1', name: 'Christopher Nolan', biography: 'Known for complex narratives and visual spectacle.' },
    { id: '2', name: 'Quentin Tarantino', biography: 'Famous for stylized violence and pop culture references.' },
    { id: '3', name: 'Greta Gerwig', biography: 'Acclaimed director and writer, known for coming-of-age stories.' },
  ];
  
  export const movies = [
    {
      id: '1',
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      directorId: '1',
      releaseYear: 2010,
      rating: 8.8,
      genreIds: ['1', '4'],
      trending: true,
    },
    {
      id: '2',
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      directorId: '2',
      releaseYear: 1994,
      rating: 8.9,
      genreIds: ['1', '3'],
    },
    {
      id: '3',
      title: 'Lady Bird',
      description: 'In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.',
      directorId: '3',
      releaseYear: 2017,
      rating: 7.4,
      genreIds: ['2', '3'],
      trending: true,
    },
      {
      id: '4',
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      directorId: '1',
      releaseYear: 2008,
      rating: 9.0,
      genreIds: ['1', '3'],
    },
    {
      id: '5',
      title: 'Once Upon a Time in Hollywood',
      description: 'A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood\'s Golden Age in 1969 Los Angeles.',
      directorId: '2',
      releaseYear: 2019,
      rating: 7.6,
      genreIds: ['2', '3'],
    },
     {
      id: '6',
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      directorId: '1',
      releaseYear: 2014,
      rating: 8.6,
      genreIds: ['3', '4'],
      trending: true,
    },
     {
      id: '7',
      title: 'Little Women',
      description: 'Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women each determined to live life on her own terms.',
      directorId: '3',
      releaseYear: 2019,
      rating: 7.8,
      genreIds: ['3'],
    },
     {
      id: '8',
      title: 'Reservoir Dogs',
      description: 'When a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
      directorId: '2',
      releaseYear: 1992,
      rating: 8.3,
      genreIds: ['1', '3'],
    },
     {
      id: '9',
      title: 'Barbie',
      description: 'Barbie suffers a crisis that leads her to question her world and her existence.',
      directorId: '3',
      releaseYear: 2023,
      rating: 6.9,
      genreIds: ['2', '3'],
      trending: true
    },
     {
      id: '10',
      title: 'Hereditary',
      description: 'A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.',
      directorId: '4', // Placeholder - Director not in list
      releaseYear: 2018,
      rating: 7.3,
      genreIds: ['3', '5'],
    }
  ];
  