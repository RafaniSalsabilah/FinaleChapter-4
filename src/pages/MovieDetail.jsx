import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINT } from '../utils/api-endpoints';
import { AiOutlinePlayCircle , AiFillStar } from 'react-icons/ai'
import { HiSearch } from 'react-icons/hi'

export const MovieDetail = () => {
  const  id = useParams()
  const [movieDetail, setMovieDetail] = useState({})

  const getDetailMovie = async () => {
    const { data } = await axios(`${process.env.REACT_APP_SERVER}${API_ENDPOINT.MOVIE_DETAIL(id.id)}`)
    setMovieDetail(data)
    console.log(data)
  }

  useEffect(() => {
    getDetailMovie()
  }, [id.id])

  return (
    <div>
      <div className='flex justify-between mb-[.5rem] absolute top-0 left-0 z-50 w-full'>
        <div className='ml-[1.5rem]'>
          <div className='text-red-600 text-[2.5rem] font-bold'><a href='/'>Movielist</a></div>
        </div>
        <div className='mt-[.1rem] border-red-600 border-2 rounded-full ml-[1rem] mt-[1rem] h-10 w-96 pl-[.5rem] flex items-center'>
          <input className='h-8 w-[20.5rem] pl-[.5rem] focus:outline-none rounded-lg bg-transparent' placeholder='What do you want to watch?'></input>
          <div className='ml-[.8rem]'><HiSearch className='w-[1.5rem] h-[2rem] text-gray-500'/></div>
        </div>
        <div className='mr-[1.5rem]'>
          <button className='mt-[.1rem] border-red-600 border-2 text-red-600 font-semibold rounded-full ml-[1rem] mt-[1rem] h-10 w-24'>Login</button>
          <button className='mt-[.1rem] bg-red-600 text-white font-semibold rounded-full ml-[1rem] mt-[1rem] h-10 w-24'>Register</button>
        </div>
      </div>
      <div className='w-full relative bg-center bg-cover bg-no-repeat min-h-screen' style={{backgroundImage: `url(${API_ENDPOINT.BACKGROUND(movieDetail.backdrop_path ? movieDetail.backdrop_path : movieDetail.poster_path)})`}}>
      <div className='absolute w-full top-0 left-0 h-full bg-opacity-60 bg-black'></div>
      <div className='absolute w-full bottom-0 left-0 h-15 bg-gradient-to-t from-black to-transparent'></div>
      <div className='flex flex-col justify-center absolute inset-0 w-1/2 gap-4 mx-[1.5rem]'>
        <h1 className='text-white font-bold text-[4rem]'>{movieDetail.title}</h1>
        <p className='text-white'>{movieDetail.genres?.map((genre) => genre.name).join(', ')}</p>
        <p className='text-white'>{movieDetail.overview}</p>
        <div className='flex'>
          <div className='mt-[.3rem] mr-[.5rem] text-amber-300'><AiFillStar/></div>
          <p className='text-white'>{movieDetail.vote_average} / 10</p>
        </div>
        <button className='bg-red-600 text-white font-semibold rounded-full pl-[.5rem] pr-[1rem] py-[.5rem] w-fit flex'><AiOutlinePlayCircle className='mt-[.3rem] mr-[.5rem]'/> Watch Trailer</button>
      </div>
    </div>
    </div>
  )
}
