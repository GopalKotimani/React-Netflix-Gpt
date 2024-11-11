import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='-mt-36 relative z-20 pl-4'>
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList title={"Upcoming"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer