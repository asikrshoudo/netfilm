export const movies = [
  {
    id: 'bangla-smp',
    title: 'How to join Bangladeshi Survival SMP',
    year: 2024,
    genre: ['Gaming'],
    duration: '',
    rating: '',
    description: '',
    thumb: '',  
    video: '/movies/bangla-smp.webm',
    featured: true,
  },
];

export const series = [
  {
    id: 'breaking-bad',
    title: 'Breaking Bad',
    year: 2008,
    genre: ['Drama', 'Crime', 'Thriller'],
    rating: '9.5',
    description: 'A chemistry teacher diagnosed with cancer turns to manufacturing drugs.',
    thumb: '/thumbs/breaking-bad.jpg',
    featured: false,
    seasons: [
      {
        season: 1,
        episodes: [
          { ep: 1, title: 'Pilot', duration: '58m', video: '/videos/series/bb/s01e01.mp4' },
          { ep: 2, title: "Cat's in the Bag", duration: '48m', video: '/videos/series/bb/s01e02.mp4' },
        ]
      },
    ]
  },
];
export const music = [
  {
    id: 'ncs',
    artist: 'NCS',
    thumb: '',
    songs: [
      { id: 's1', title: 'Mortals (feat. Laura Brehm)', duration: '3:50', file: '/music/mortals.mp3' },
    ]
  },
];


export const genres = ['Action', 'Drama', 'Sci-Fi', 'Thriller', 'Crime', 'Comedy', 'Horror', 'Romance'];
