import React from 'react'
import { API_ENDPOINT } from '../utils/api-endpoints'
import { AiOutlinePlayCircle } from 'react-icons/ai'

export const HeroItem = (props) => {
  return (
    <div className='w-full relative bg-center bg-cover bg-no-repeat min-h-screen' style={{backgroundImage: `url(${API_ENDPOINT.BACKGROUND(props.dataHero.backdrop_path ? props.dataHero.backdrop_path : props.dataHero.poster_path)})`}}>
      <div className='absolute w-full top-0 left-0 h-full bg-opacity-60 bg-black'></div>
      <div className='absolute w-full bottom-0 left-0 h-15 bg-gradient-to-t from-black to-transparent'></div>
      <div className='flex flex-col justify-center absolute inset-0 w-1/2 gap-4 mx-[1.5rem]'>
        <h1 className='text-white font-bold text-[4rem]'>{props.dataHero.title}</h1>
        <p className='text-white'>{props.dataHero.overview}</p>
        <button className='bg-red-600 text-white font-semibold rounded-full px-[1rem] py-[.5rem] w-fit flex'><AiOutlinePlayCircle className='mt-[.3rem] mr-[.5rem]'/> Watch Trailer</button>
      </div>
    </div>
  )
}
