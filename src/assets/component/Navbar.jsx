import React, {useState, useEffect} from 'react'
import { RenderMovie } from '../../pages/RenderMovie'
import { HiSearch } from 'react-icons/hi'
import { fetchDataMovie } from '../../services/get-data-movie'

export const Navbar = () => {
    const [LoadData, setLoadData] = useState([])
    const [showAllMovies, setShowAllMovies] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [showPopularMovie, setShowPopularMovie] = useState(true)
    
    const getData = async () => {
        const movieData = await fetchDataMovie()
        setLoadData(movieData.results)
      }
    
    useEffect(() => {
        getData()
    }, [])

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value)
        setShowPopularMovie(!e.target.value)
    }

    const hi = {color : 'grey'}

    const filteredMovies = LoadData.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

    const maxMoviesToShow = showAllMovies ? filteredMovies.length : 4 

    const maxImagesToShow = 4

  return (
    <div className=''>
        <div className=''>
            <div className='flex justify-between mb-[.5rem] absolute top-0 left-0 z-50 w-full'>
                <div className='ml-[1.5rem]'>
                    <div className='text-red-600 text-[2.5rem] font-bold'>Movielist</div>
                </div>
                <div className='mt-[.1rem] border-red-600 border-2 rounded-full ml-[1rem] mt-[1rem] h-10 w-96 pl-[.5rem] flex items-center'>
                    <input className='h-8 w-[20.5rem] pl-[.5rem] focus:outline-none rounded-lg bg-transparent' placeholder='What do you want to watch?' value={searchQuery} onChange={handleSearchInputChange}></input>
                    <div className='ml-[.8rem]'><HiSearch className='w-[1.5rem] h-[2rem]' style={hi}/></div>
                </div>
                <div className='mr-[1.5rem]'>
                    <button className='mt-[.1rem] border-red-600 border-2 text-red-600 font-semibold rounded-full ml-[1rem] mt-[1rem] h-10 w-24'>Login</button>
                    <button className='mt-[.1rem] bg-red-600 text-white font-semibold rounded-full ml-[1rem] mt-[1rem] h-10 w-24'>Register</button>
                </div>
            </div>
        </div>
    </div>  
  )
}
