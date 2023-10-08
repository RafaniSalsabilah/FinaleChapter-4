import React from 'react'
import { Link } from 'react-router-dom'

export const RenderMovie = ({dataMovie}) => {
  return (
    <div>
      <Link to={`/movie/${dataMovie.id}`}>
        <div className='rounded flex items-center flex-col'>
          <div>
            <img src={`https://image.tmdb.org/t/p/w300/${dataMovie.poster_path}`} className='rounded-lg'/> 
          </div>
          <div className='flex justify-center items-center mt-[.5rem]'>
            <span className='text-center self-center font-semibold'>{dataMovie.title}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
