export const API_ENDPOINT = {
    NOW_PLAYING : 'movie/now_playing',
    POPULAR : 'movie/popular',
    BACKGROUND : (bg) => `https://image.tmdb.org/t/p/original/${bg}`,
    MOVIE_DETAIL : (id) => `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
}