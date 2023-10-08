import React, {useState, useEffect} from 'react'
import { RenderMovie } from './RenderMovie'
import { HeroItem } from './HeroItem'
import { HiSearch } from 'react-icons/hi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { fetchDataMovie } from '../services/get-data-movie'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SwiperCore from 'swiper'
import { Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css/pagination'

export const MovieList = () => {
    const [LoadData, setLoadData] = useState([])
    const [showAllMovies, setShowAllMovies] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [showPopularMovie, setShowPopularMovie] = useState(true)

    SwiperCore.use([Pagination, Autoplay])

    const getDataMovie = async () => {
        const data = await fetchDataMovie()
        setLoadData(data.results)
    }
    
    useEffect(() => {
        getDataMovie()
    }, [])
    

    const handleToggleShowAll = () => {
        setShowAllMovies(!showAllMovies)
    }

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value)
        setShowPopularMovie(!e.target.value)
    }

    const filteredMovies = LoadData.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

    const maxMoviesToShow = showAllMovies ? filteredMovies.length : 4 

    const maxImagesToShow = 4

    const hi = {color : 'grey'}

  return (
    <div className=''>
        <div className=''>
            <div className='flex justify-between mb-[.5rem] absolute top-0 left-0 z-50 w-full'>
                <div className='ml-[1.5rem]'>
                    <div className='text-red-600 text-[2.5rem] font-bold'><a href='/'>Movielist</a></div>
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
            {!searchQuery && 
                (<div className='h-screen'>
                    <Swiper spaceBetween={0} slidesPerView={1} modules={[Autoplay, Pagination]} loop={true} autoplay={{delay:3000}} pagination={{clickable:true}}>
                        {showAllMovies ? LoadData.slice(0, maxImagesToShow).map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <HeroItem dataHero={movie} />
                            </SwiperSlide>
                        )) : LoadData.slice(0, maxImagesToShow).map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <HeroItem dataHero={movie} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            <div className='mx-[1.5rem] my-[.5rem]'>
                {showPopularMovie && 
                    (<div className='flex justify-between my-[1rem]'>
                        <div className='text-[1.8rem] font-bold mb-[.5rem]'>Popular Movie</div>
                        {!showAllMovies && filteredMovies.length > 4 && 
                        (<div onClick={handleToggleShowAll} className='text-red-600 mb-[.5rem] font-semibold py-2'>
                            <div className='flex justify-between hover:cursor-pointer'>
                            <div className='text-[1rem] mt-[.2rem]'>See All Movie</div>
                            <div className='pl-[.2rem] pt-[.4rem]'><AiOutlineArrowRight/></div>
                        </div>
                    </div>
                        )}
                    </div>
                )}
                {searchQuery && (<div className='text-[1.6rem] font-bold mb-[.5rem] mt-[5rem]'>Search results "<span>{searchQuery}</span>"</div>)}
                <div className='grid grid-cols-4 gap-12'>
                    {filteredMovies.slice(0, maxMoviesToShow).map((value, index) => {
                        if (showAllMovies) {
                            return <RenderMovie dataMovie={value}/>
                        }
                        if (index < 4) {
                            return <RenderMovie dataMovie={value}/>
                        }
                        return null
                    })}
                </div>
            </div>
        </div>
    </div>  
  )
}
