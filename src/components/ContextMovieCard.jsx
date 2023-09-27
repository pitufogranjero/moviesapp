import { useEffect, useRef, useState } from 'react'
import { MovieCard } from './MovieCard'
import { get } from '../data/httpClient'
import "./ContextMovieCard.css"

export function ContextMovieCard({ searchQuery }){
    // console.log('ContextMovieCard -> ' + searchQuery)

    const [movies, setMovies] = useState([])


    const endpointRef = useRef('');
    const messageRef = useRef('');

    useEffect(() => {
        if (searchQuery) {
            endpointRef.current = `/search/movie?query=${searchQuery}`
            messageRef.current = `Search Results: "${searchQuery}"`
            
        } else {
            endpointRef.current = '/movie/popular/'
            messageRef.current = 'Popular Movies'
        }
        // console.log(endpointRef.current + ' - ' + messageRef.current)

        get(endpointRef.current).then((data) => {
            setMovies(data.results);
            });

}, [searchQuery]);

    return(
        <div className='context-movie-card'>
            <h3>{messageRef.current}</h3>
            <div className="movie-container">
                {movies.map((movie) => ( 
                    <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    )
}