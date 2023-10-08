import { useQuery } from "@tanstack/react-query";
import http from '../utils/http'
import { API_ENDPOINT } from "../utils/api-endpoints";

const fetchDataMovie = async (page) => {
    const { data } = await http.get(`${API_ENDPOINT.POPULAR}?page=${page ? page : 1}`)
    return data
    // const [_key, _params] = queryKey
    // const { data } = await http.get(_key, { params: _params });
    // return data
};

const useMovieDataQuery = (page) => {
    return useQuery(["userData", page], () => fetchDataMovie(page));
    // return useQuery([API_ENDPOINT.POPULAR , options], fetchDataMovie)
};

export {fetchDataMovie , useMovieDataQuery}