import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import { get } from '../data/httpClient'
import "./SearchResults.css"

export function SearchResults(){
    const [movies, setMovies] = useState([])
    const {query} = useParams()
    console.log(query)

    useEffect(() => {
        get("/search/movie?query=" + query).then((data) => {
            setMovies(data.results);
        });
    }, []);

    return(
        <div className='context-movie-card'>
            <h1>Search results</h1>
            <div className="movie-container">
                {movies.map((movie) => ( 
                    <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    )
}